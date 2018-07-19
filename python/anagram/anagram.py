from collections import Counter


def detect_anagrams(word, candidates):
    anagrams = []
    word_counter = Counter(word.lower())
    for candidate in candidates:
        candidate_counter = Counter(candidate.lower())
        if word_counter == candidate_counter:
            anagrams.append(candidate)
    return anagrams
