import nltk
from nltk.tokenize import word_tokenize, RegexpTokenizer
from nltk.corpus import stopwords
import pandas as pd


def pre_process(data: str) -> str:
    # remove punctuation
    no_punctuation = RegexpTokenizer(r'\w+').tokenize(data)

    no_punctuation = " ".join(no_punctuation)

    stop_words = stopwords.words('english')

    ns = pd.read_csv(
        './algorithm/new_stopwords.txt')["new_stopwords"].to_list()
    stop_words = set(stop_words + ns)

    words = word_tokenize(no_punctuation)
    wordsFiltered = []

    for w in words:
        if w.lower() not in stop_words and w not in stop_words and w not in wordsFiltered:
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
    print(pre_process("I wanna a ballon"))
