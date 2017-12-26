(ns nucleotide-count)

(def struct {\A 0, \T 0, \C 0, \G 0})

(defn- validate [char]
  (->> struct
    (keys)
    (some #(= char %))
    (assert)
  )
)

(defn count [char dna-string]
  (validate char)
  (-> char
    (str)
    (re-pattern)
    (re-seq dna-string)
    (clojure.core/count)
  )
)

(defn nucleotide-counts [dna-string] 
  (reduce 
    (fn [m c] 
      (update m c (partial + (count c dna-string)))
    ) 
    struct 
    (keys struct)
  )
)