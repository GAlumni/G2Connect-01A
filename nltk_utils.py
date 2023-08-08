import nltk
import numpy as np

#tokenization
def tokenize(sentences):
    return nltk.word_tokenize(sentences)

#Lemmatization
from nltk.stem import WordNetLemmatizer
lemmatizer = WordNetLemmatizer()
def lemma(word):
    return lemmatizer.lemmatize(word.lower())

#Bag of words
def bag_of_words(tokenized_sentence, all_words):
    tokenized_sentence=[lemma(word) for word in tokenized_sentence]
    bag=np.zeros(len(all_words),dtype=np.float32)
    for i,w in enumerate(all_words):
        if w in tokenized_sentence:
            bag[i]=1
    return bag
    
    
