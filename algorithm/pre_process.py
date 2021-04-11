import nltk
from nltk.tokenize import word_tokenize, RegexpTokenizer
from nltk.corpus import stopwords
import pandas as pd


def pre_process(data: str) -> str:
    # remove punctuation
    no_punctuation = RegexpTokenizer(r'\w+').tokenize(data)

    no_punctuation = " ".join(no_punctuation)

    stopWords = set(stopwords.words('english'))

    words = word_tokenize(no_punctuation)
    wordsFiltered = []

    for w in words:
        if w not in stopWords and w not in wordsFiltered:
            wordsFiltered.append(w)

    return wordsFiltered


def clean_csv(file_path, new_file):
    data_frame = pd.read_csv(file_path)
    names = data_frame["English"]
    rgb = data_frame["RGB"]
    names = list(map(lambda t: t.lower(), names))
    rgb = list(map(lambda t: ",".join(t.split("-")), rgb))

    fo = open(new_file, "w")

    for i in range(len(names)):
        fo.write(names[i] + ',' + rgb[i] + "\n")


if __name__ == "__main__":
    clean_csv("./algorithm/ral_standard.csv", "./algorithm/af_standard.csv")
