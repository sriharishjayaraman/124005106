import json
from difflib import get_close_matches
data = json.load(open("words.json"))



def word_meaning(word):
    word = word.lower()
    if word in data:
        return data[word]

    elif word.title() in data:
        return data[word.title()]

    elif word.upper() in data:
        return data[word.upper()]

    elif len(get_close_matches(word, data.keys())) > 0:

        similar_words_list = list(map(str, get_close_matches(word, data.keys())))
        ans = input("Did you mean %s instead? Enter 'Y' If yes or 'N' if No " % similar_words_list)

        if ans.lower() == 'y':
            index = int(input("Enter the position number of word to select the word. Ex 1 or 2 or 3 : "))
            if index > int(3) :
                    print("Order exceeds the words so no words found")
            else:
                   return word_meaning(get_close_matches(word, data.keys())[int(index) - 1])
        elif ans.lower() == 'n':
            print("Word Doesnt exists. Please double check it!!!")
        else:
            print("Sorry, We don't understand you!!!!")

    else:
        print("kindly verify")

while True:
  word = input("Enter a Word to find its Meaning :")
  print(word_meaning(word))

