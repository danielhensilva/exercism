(ns anagram
  (use [clojure.string])
)


(defn- count-char [word]
  (into {} 
    (map 
      (fn [[k v]] [(lower-case k) (count v)])
      (group-by identity 
        (split word #"\B")
      )
    )
  )
)

(defn- same-char-amount? [word1 word2]
  (every?
    #(= 0 %)
    (vals
      (merge-with - 
        (count-char word1)
        (count-char word2)
      )
    )
  )
)

(defn- same-word? [word1 word2]
  (=
    (lower-case word1)
    (lower-case word2)
  )
)

(defn- anagram? [word1 word2]
  (and
    (same-char-amount? word1 word2)
    (not (same-word? word1 word2))
  )
)

(defn anagrams-for [word list]
  (into [] 
    (filter
      #(anagram? word %)
      list
    )
  )
)