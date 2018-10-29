from collections import Counter


def detect_anagrams(word, candidates):
    anagrams = []
    word = word.lower()
    word_counter = Counter(word)
    for candidate in candidates:
        if (candidate.lower() == word):
            continue
        candidate_counter = Counter(candidate.lower())
        if word_counter == candidate_counter:
            anagrams.append(candidate)
    return anagrams
