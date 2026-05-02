import uuid
from dataclasses import dataclass, field
from typing import Optional

from fastapi import HTTPException

from .schema import (
    ActivitiesResponse,
    CafesResponse,
    CourseDetailResponse,
    CourseItem,
    CreateCourseRequest,
    CreateCourseResponse,
    ExplainTextResponse,
    HashtagResponse,
    ImageResponse,
    KeywordItem,
    LocationResponse,
    OtherCourseItem,
    OtherCoursesResponse,
    PlaceDetailItem,
    PlaceItem,
    RestaurantsResponse,
    SubCourseItem,
)

# ==================== Category 분류 ====================
# category 필드에 아래 키워드가 포함되면 해당 타입으로 분류

_CAFE_KEYWORDS = {"카페", "디저트", "cafe", "coffee", "커피", "베이커리"}
_RESTAURANT_KEYWORDS = {"음식점", "맛집", "레스토랑", "한식", "중식", "일식", "양식", "치킨", "피자", "술집", "바"}
# 위 두 분류에 속하지 않으면 activity로 처리


def _classify(category: str) -> str:
    cat = category.lower()
    if any(kw in cat for kw in _CAFE_KEYWORDS):
        return "cafe"
    if any(kw in cat for kw in _RESTAURANT_KEYWORDS):
        return "restaurant"
    return "activity"


# ==================== In-memory Store ====================

@dataclass
class _StoredCourse:
    course_id: str
    name: str
    description: str
    area: str
    start_time: str
    main_course: Optional[CourseItem]
    sub_courses: list[CourseItem] = field(default_factory=list)
    message: Optional[str] = None


_store: dict[str, _StoredCourse] = {}


def _get_or_404(course_id: str) -> _StoredCourse:
    course = _store.get(course_id)
    if not course:
        raise HTTPException(status_code=404, detail=f"Course '{course_id}' not found")
    return course


# ==================== 이름/설명 생성 헬퍼 ====================
# 실제 AI 연동 시 AI 응답에서 받아온 name/description으로 교체하면 됨

def _make_name(course: CourseItem, area: str) -> str:
    return f"{area} {course.courseType} 코스"


def _make_description(course: CourseItem) -> str:
    names = ", ".join(p.name for p in course.places[:3])
    total = len(course.places)
    return f"{names} 등 {total}곳을 방문하는 코스입니다."


# ==================== Service 함수 ====================

async def create_course(req: CreateCourseRequest) -> CreateCourseResponse:
    # TODO: 실제 AI 호출로 교체
    # ai_result = await ai_service.generate(req)
    # main_course = CourseItem(**ai_result["mainCourse"])
    # sub_courses = [CourseItem(**c) for c in ai_result["subCourses"]]

    course_id = str(uuid.uuid4())

    # AI 결과가 들어오기 전 임시 빈 코스 (AI 연동 후 제거)
    _tmp = CourseItem(courseType="데이트", transport=req.transport, totalDurationMinutes=0, places=[])
    main_course = CourseItem(
        courseType="데이트",
        transport=req.transport,
        totalDurationMinutes=0,
        places=[],
        name=_make_name(_tmp, req.area),
        description=_make_description(_tmp),
    )
    sub_courses: list[CourseItem] = []

    _store[course_id] = _StoredCourse(
        course_id=course_id,
        name=_make_name(main_course, req.area),
        description=_make_description(main_course),
        area=req.area,
        start_time=req.start_time,
        main_course=main_course,
        sub_courses=sub_courses,
        message=None,
    )

    return CreateCourseResponse(
        courseId=course_id,
        mainCourse=main_course,
        subCourses=sub_courses,
        message=None,
    )


def get_explain_text(course_id: str) -> ExplainTextResponse:
    c = _get_or_404(course_id)
    return ExplainTextResponse(name=c.name, description=c.description)


def get_hashtag(course_id: str) -> HashtagResponse:
    c = _get_or_404(course_id)
    seen: set[str] = set()
    labels: list[KeywordItem] = []
    if c.main_course:
        for place in c.main_course.places:
            for kw in place.keywords:
                label = kw if kw.startswith("#") else f"#{kw}"
                if label not in seen:
                    seen.add(label)
                    labels.append(KeywordItem(label=label))
    return HashtagResponse(keywords=labels[:10])


def get_location(course_id: str) -> LocationResponse:
    c = _get_or_404(course_id)
    return LocationResponse(location=c.area)


def get_image(course_id: str) -> ImageResponse:
    c = _get_or_404(course_id)
    image_url: Optional[str] = None
    if c.main_course and c.main_course.places:
        image_url = c.main_course.places[0].imageUrl
    return ImageResponse(imageUrl=image_url)


def _to_detail(place: PlaceItem, idx: int) -> PlaceDetailItem:
    return PlaceDetailItem(
        id=str(idx),
        name=place.name,
        description=place.mainDescription,
        location=place.area,
        time=place.recommendedTimeSlot,
        imageUrl=place.imageUrl,
    )


def get_restaurants(course_id: str) -> RestaurantsResponse:
    c = _get_or_404(course_id)
    places = c.main_course.places if c.main_course else []
    return RestaurantsResponse(
        restaurants=[
            _to_detail(p, i)
            for i, p in enumerate(places)
            if _classify(p.category) == "restaurant"
        ]
    )


def get_cafes(course_id: str) -> CafesResponse:
    c = _get_or_404(course_id)
    places = c.main_course.places if c.main_course else []
    return CafesResponse(
        cafes=[
            _to_detail(p, i)
            for i, p in enumerate(places)
            if _classify(p.category) == "cafe"
        ]
    )


def get_activities(course_id: str) -> ActivitiesResponse:
    c = _get_or_404(course_id)
    places = c.main_course.places if c.main_course else []
    return ActivitiesResponse(
        activities=[
            _to_detail(p, i)
            for i, p in enumerate(places)
            if _classify(p.category) == "activity"
        ]
    )


def get_other_courses(course_id: str) -> OtherCoursesResponse:
    c = _get_or_404(course_id)
    result: list[OtherCourseItem] = []
    for i, sub in enumerate(c.sub_courses):
        locations = list(dict.fromkeys(p.area for p in sub.places))  # 순서 유지 중복 제거
        result.append(
            OtherCourseItem(
                id=f"{course_id}-sub-{i}",
                name=_make_name(sub, locations[0] if locations else c.area),
                description=_make_description(sub),
                locations=locations,
                duration=sub.totalDurationMinutes,
                imageUrl=sub.places[0].imageUrl if sub.places else None,
            )
        )
    return OtherCoursesResponse(courses=result)


def get_course_detail(course_id: str) -> CourseDetailResponse:
    c = _get_or_404(course_id)
    places = c.main_course.places if c.main_course else []
    route_summary = " → ".join(p.name for p in places)

    sub_courses = [
        SubCourseItem(
            id=f"{course_id}-sub-{i}",
            name=_make_name(sub, c.area),
            description=_make_description(sub),
            locations=list(dict.fromkeys(p.area for p in sub.places)),
            totalDurationMinutes=sub.totalDurationMinutes,
            imageUrl=sub.places[0].imageUrl if sub.places else None,
        )
        for i, sub in enumerate(c.sub_courses)
    ]

    return CourseDetailResponse(
        courseId=course_id,
        title=c.name,
        description=c.description,
        totalDuration=c.main_course.totalDurationMinutes if c.main_course else 0,
        locationSummary=c.area,
        routeSummary=route_summary,
        places=places,
        subCourses=sub_courses,
    )
