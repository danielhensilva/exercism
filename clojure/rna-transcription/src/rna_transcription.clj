(ns rna-transcription
  (use [clojure.string])
)

(defn to-rna [dna] 
  (assert
    (not (boolean (re-find #"[^ATGC]+" dna)))
  )

  (-> dna
    (replace #"A" "U")
    (replace #"T" "A")
    (replace #"G" "%")
    (replace #"C" "G")
    (replace #"%" "C")
  )
)