(ns word-count
  (use [clojure.string])
)

(defn- remove-ponctuation [phrase]
  (replace phrase #"[^a-zA-Z0-9 ]" "")
)

(defn- word-split [phrase]
  (split phrase #" ")
)

(defn- remove-empty [map]
  (filter not-empty map )
)

(defn word-count [phrase]
  (-> phrase
    (lower-case)
    (remove-ponctuation)
    (word-split)
    (remove-empty)
    (frequencies)
  )
)