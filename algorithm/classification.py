import fasttext


def train():
    model = fasttext.train_supervised(
        input="./algorithm/train.txt", minCount=1)
    model.save_model("./algorithm/classification.bin")


def test():
    model = fasttext.load_model("./algorithm/classification.bin")
    output = model.predict("I wanna a youtube like website")
    print(output)


if __name__ == "__main__":
    train()
    test()
