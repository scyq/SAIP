import tensorflow as tf
from keras.utils import np_utils
from tensorflow.python import keras
from tensorflow.python.keras import preprocessing
from tensorflow.python.keras.preprocessing.text import Tokenizer
from tensorflow.python.keras.models import Sequential
from tensorflow.python.keras.layers import Dense, Dropout, LSTM, Reshape

import numpy as np
import pandas


data = pandas.read_csv('./algorithm/colors.csv')

names = data["name"]

name_max_len = 25

''' create an instance of Tokenizer '''
tokenizer = Tokenizer(char_level=True)

''' update internal vocabularies '''
tokenizer.fit_on_texts(names)

''' transfer words to sequences '''
tokenized = tokenizer.texts_to_sequences(names)

''' fill the sequences to the same length '''
padded_names = preprocessing.sequence.pad_sequences(
    tokenized, maxlen=name_max_len)

''' one-hot encoding '''
one_hot_names = np_utils.to_categorical(padded_names)
num_classes = one_hot_names.shape[-1]


# The RGB values are between 0 - 255
# scale them to be between 0 - 1
def norm(value):
    return value / 255.0


normalized_values = np.column_stack(
    [norm(data["red"]), norm(data["green"]), norm(data["blue"])])


# def predict(name):
#     name = name.lower()
#     tokenized = t.texts_to_sequences([name])
#     padded = preprocessing.sequence.pad_sequences(tokenized, maxlen=maxlen)
#     one_hot = np_utils.to_categorical(padded, num_classes=num_classes)
#     pred = model.predict(np.array(one_hot))[0]
#     r, g, b = scale(pred[0]), scale(pred[1]), scale(pred[2])
#     print(name + ',', 'R,G,B:', r, g, b)
#     plot_rgb(pred)
