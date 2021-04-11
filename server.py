from fastapi import FastAPI
from algorithm.nl2color import predict

app = FastAPI()


@app.get("/")
