from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from recommendation.router import router as recommendation_router

# 기존 라우터들이 있다면 아래처럼 추가
# from home.router import router as home_router
# from courses.router import router as courses_router
# from export.router import router as export_router

app = FastAPI(title="MJE API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:3001",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(recommendation_router)

# app.include_router(home_router)
# app.include_router(courses_router)
# app.include_router(export_router)
