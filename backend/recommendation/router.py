from fastapi import APIRouter

from .schema import (
    ActivitiesResponse,
    CafesResponse,
    CourseDetailResponse,
    CreateCourseRequest,
    CreateCourseResponse,
    ExplainTextResponse,
    HashtagResponse,
    ImageResponse,
    LocationResponse,
    OtherCoursesResponse,
    RestaurantsResponse,
)
from . import service

router = APIRouter(tags=["recommendation"])


# ==================== 코스 생성 ====================

@router.post("/recommendations/create-course", response_model=CreateCourseResponse)
async def create_course(req: CreateCourseRequest):
    return await service.create_course(req)


# ==================== 기존 상세 조회 (유지) ====================

@router.get("/recommendations/courses/{course_id}", response_model=CourseDetailResponse)
def get_course_detail(course_id: str):
    return service.get_course_detail(course_id)


# ==================== 프론트 연동용 상세 API ====================

@router.get(
    "/recommendation/suggested-courses/{course_id}/explain-text",
    response_model=ExplainTextResponse,
)
def get_explain_text(course_id: str):
    return service.get_explain_text(course_id)


@router.get(
    "/recommendation/suggested-courses/{course_id}/hashtag",
    response_model=HashtagResponse,
)
def get_hashtag(course_id: str):
    return service.get_hashtag(course_id)


@router.get(
    "/recommendation/suggested-courses/{course_id}/location",
    response_model=LocationResponse,
)
def get_location(course_id: str):
    return service.get_location(course_id)


@router.get(
    "/recommendation/suggested-courses/{course_id}/image",
    response_model=ImageResponse,
)
def get_image(course_id: str):
    return service.get_image(course_id)


@router.get(
    "/recommendation/detail/{course_id}/restaurants",
    response_model=RestaurantsResponse,
)
def get_restaurants(course_id: str):
    return service.get_restaurants(course_id)


@router.get(
    "/recommendation/detail/{course_id}/cafes",
    response_model=CafesResponse,
)
def get_cafes(course_id: str):
    return service.get_cafes(course_id)


@router.get(
    "/recommendation/detail/{course_id}/activities",
    response_model=ActivitiesResponse,
)
def get_activities(course_id: str):
    return service.get_activities(course_id)


@router.get(
    "/recommendation/detail/{course_id}/other-courses",
    response_model=OtherCoursesResponse,
)
def get_other_courses(course_id: str):
    return service.get_other_courses(course_id)
