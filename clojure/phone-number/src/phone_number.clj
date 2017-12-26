(ns phone-number
  (use clojure.string)
)

(defn number [value]
  (cond
    (< (count value) 10) "0000000000"
    (= (count value) 10) (replace value #"[\(\) -\.]" "") 

    (and
      (= (count value) 11)
      (= (first value) \1)
    ) (apply str (rest value))

    (and
      (= (count value) 11)
      (not= (first value) \1)
    ) "0000000000"

    :else (replace value #"[\(\) -\.]" "") 
  )
)

(defn area-code [value]
  (replace 
    (number value)
    #"^(\d{3})\d{7}$"
    "$1"
  )
)

(defn pretty-print [value]
  (replace 
    (number value)
    #"^(\d{3})(\d{3})(\d{4})$"
    "($1) $2-$3"
  )
)