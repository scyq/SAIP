import tensorflow as tf
from keras.utils import np_utils
from tensorflow.python import keras
from tensorflow.python.keras import preprocessing
from tensorflow.python.keras.preprocessing.text import Tokenizer
from tensorflow.python.keras.models import Sequential
from tensorflow.python.keras.layers import Dense, Dropout, LSTM, Reshape
import pylab as plt
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

model = Sequential()
model.add(LSTM(256, return_sequences=True,
               input_shape=(name_max_len, num_classes)))
model.add(LSTM(128))
model.add(Dense(128, activation='relu'))
model.add(Dense(3, activation='sigmoid'))
model.compile(optimizer='adam', loss='mse', metrics=['acc'])
model.summary()
model.load_weights('./algorithm/model_1.h5')


# The RGB values are between 0 - 255
# scale them to be between 0 - 1
def norm(value):
    return value / 255.0


normalized_values = np.column_stack(
    [norm(data["red"]), norm(data["green"]), norm(data["blue"])])


def train():
    history = model.fit(one_hot_names, normalized_values,
                        epochs=40,
                        batch_size=32,
                        validation_split=0.1)
    # Optionally continue to train with all data, this will likely overfit the training data.
    model.fit(one_hot_names, normalized_values,
              epochs=10,
              batch_size=32)

    # Save the model parameters for later use.
    model.save_weights('./algorithm/model_1.h5')


def scale(n):
    return int(n * 255)


# Plot a color image.
def plot_rgb(rgb):
    data = [[rgb]]
    plt.figure(figsize=(2, 2))
    plt.imshow(data, interpolation='nearest')
    plt.show()


def predict(name):
    name = name.lower()
    tokenized = tokenizer.texts_to_sequences([name])
    padded = preprocessing.sequence.pad_sequences(
        tokenized, maxlen=name_max_len)
    one_hot = np_utils.to_categorical(padded, num_classes=num_classes)
    pred = model.predict(np.array(one_hot))[0]
    r, g, b = scale(pred[0]), scale(pred[1]), scale(pred[2])
    print(name + ',', 'R,G,B:', r, g, b)
    # plot_rgb(pred)


if __name__ == "__main__":
    predict("caoshengqi")
