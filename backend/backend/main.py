from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import trade_routes, market_routes

app = FastAPI()

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(trade_routes.router)
app.include_router(market_routes.router)

@app.get("/")
def root():
    return {"message": "Welcome to MirrorEdge Sim Trading API"}
