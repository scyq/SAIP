import fasttext


def train():
    model = fasttext.train_supervised(
        input="./algorithm/train.txt", minCount=1, epoch=40, loss='hs')
    model.save_model("./algorithm/classification.bin")


def classification(data):
    model = fasttext.load_model("./algorithm/classification.bin")
    output = model.predict(data)
    return output


if __name__ == "__main__":
    # train()
    classification("card")
