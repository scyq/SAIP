from fastapi import FastAPI
from algorithm.nl2color import predict
from algorithm.pre_process import pre_process
from fastapi.responses import JSONResponse
from algorithm.util import rgb2hex
from algorithm.classification import classification

app = FastAPI()
headers = {"Access-Control-Allow-Origin": "*"}


@app.get("/function_analysis")
def get_layout(data: str):
    layouts = []
    words = pre_process(data)
    for word in words:
        unfold_word = (list(classification(word))[0])[0]
        layouts.append(unfold_word.replace("__label__", ''))
    res = {
        "layouts": layouts,
        "words": words
    }
    return JSONResponse(content=res, headers=headers)


@app.get("/style_analysis")
def get_style(data: str):
    colorList = []
    words = pre_process(data)
    for word in words:
        colorList.append(rgb2hex(predict(word)))
    res = {
        "colorList": colorList,
        "words": words
    }
    return JSONResponse(content=res, headers=headers)
