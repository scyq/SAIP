import nltk
from fastapi import FastAPI
from fastapi.responses import JSONResponse
from imgSpider import *
import os
from fastapi.responses import FileResponse
import re
import string
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
 
''' 利用fastapi建立本地服务器 '''
app = FastAPI()

''' 用jieba库进行分词 '''
def split_words(text: str) -> str:

    ''' 去除所有标点符号以及空格 '''
    punc = '~`!#$%^&*()_+-=|\';":/.,?><~·！@#￥%……&*（）——+-=“：’；、。，？》《{} '
    query = re.sub(r"[%s]+" %punc, "", text)

    ''' 精确模式 '''
    seg_list = list(word_tokenize(text))

    return seg_list


@app.get("/func")
def get_headers(query: str):
    '''分词并去除停用词'''
    stopWords = set(stopwords.words('english'))
    res = split_words(query)
    
    wordsFiltered = []
    for w in res:
        if w not in stopWords:
            wordsFiltered.append(w)

    ''' 允许跨域访问 '''
    headers = {"Access-Control-Allow-Origin": "*"}
    return JSONResponse(content=wordsFiltered, headers=headers)