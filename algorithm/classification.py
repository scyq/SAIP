import fasttext


def train():
    model = fasttext.train_supervised(input="train.train", minCount=1)
    model.save_model("classification.bin")


if __name__ == "__main__":
    train()
