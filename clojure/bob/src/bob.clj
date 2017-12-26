(ns bob
  (use [clojure.string])
)

(defn any-char? [text]
  (boolean (re-find #"[a-zA-Z]+" text))
)

(defn uppercase? [text]
  (= text (upper-case text))
)

(defn yelling? [text]
  (if
    (any-char? text)
    (uppercase? text)
    false
  )
)

(defn question? [text]
  (ends-with? text "?")
)

(defn response-for [req]
  (cond 
    (blank? req) "Fine. Be that way!"
    (yelling? req) "Whoa, chill out!"
    (question? req) "Sure."
    :else "Whatever."
  )
)