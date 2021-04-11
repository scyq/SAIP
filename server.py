from fastapi import FastAPI
from algorithm.nl2color import predict
from algorithm.pre_process import pre_process
from fastapi.responses import JSONResponse

app = FastAPI()
headers = {"Access-Control-Allow-Origin": "*"}


@app.get("/function_analysis")
def get_layout(data: str):
    result = ""
    return JSONResponse(content=result, headers=headers)

# @app.get("/style_analysis")


def get_style(data: str):
    words = pre_process("data")
    for word in words:
        print(predict(word))


get_style("blue")
# pre_process()
