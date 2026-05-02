from pydantic import BaseModel
from typing import Optional, List


# ==================== Create Course ====================

class CreateCourseRequest(BaseModel):
    area: str
    start_time: str
    transport: str  # "car" | "walk" | "public_transit"


class PlaceItem(BaseModel):
    visitOrder: int
    name: str
    area: str
    category: str
    imageUrl: Optional[str] = None
    mainDescription: str
    briefDescription: str
    keywords: List[str]
    estimatedDurationMinutes: int
    travelTimeToNextMinutes: Optional[int] = None
    recommendedTimeSlot: str
    hasParking: Optional[bool] = None
    routePathToNext: List[List[float]] = []


class CourseItem(BaseModel):
    courseType: str
    transport: str
    totalDurationMinutes: int
    places: List[PlaceItem]
    name: Optional[str] = None
    description: Optional[str] = None


class CreateCourseResponse(BaseModel):
    courseId: str
    mainCourse: Optional[CourseItem] = None
    subCourses: List[CourseItem] = []
    message: Optional[str] = None


# ==================== Detail: explain-text ====================

class ExplainTextResponse(BaseModel):
    name: str
    description: str


# ==================== Detail: hashtag ====================

class KeywordItem(BaseModel):
    label: str


class HashtagResponse(BaseModel):
    keywords: List[KeywordItem]


# ==================== Detail: location ====================

class LocationResponse(BaseModel):
    location: str


# ==================== Detail: image ====================

class ImageResponse(BaseModel):
    imageUrl: Optional[str] = None


# ==================== Detail: places ====================

class PlaceDetailItem(BaseModel):
    id: str
    name: str
    description: str
    location: str
    time: Optional[str] = None
    imageUrl: Optional[str] = None


class RestaurantsResponse(BaseModel):
    restaurants: List[PlaceDetailItem]


class CafesResponse(BaseModel):
    cafes: List[PlaceDetailItem]


class ActivitiesResponse(BaseModel):
    activities: List[PlaceDetailItem]


# ==================== Detail: other-courses ====================

class OtherCourseItem(BaseModel):
    id: str
    name: str
    description: str
    locations: List[str]
    duration: Optional[int] = None
    imageUrl: Optional[str] = None


class OtherCoursesResponse(BaseModel):
    courses: List[OtherCourseItem]


# ==================== GET /recommendations/courses/{course_id} (기존 유지) ====================

class SubCourseItem(BaseModel):
    id: str
    name: str
    description: str
    locations: List[str]
    totalDurationMinutes: int
    imageUrl: Optional[str] = None


class CourseDetailResponse(BaseModel):
    courseId: str
    title: str
    description: str
    totalDuration: int
    locationSummary: str
    routeSummary: str
    places: List[PlaceItem]
    subCourses: List[SubCourseItem]
