(ns beer-song
  (use [clojure.string])
)

(defn- verse-0 []
  (str 
    "No more bottles of beer on the wall, no more bottles of beer.\n"
    "Go to the store and buy some more, 99 bottles of beer on the wall.\n"
  )
)

(defn- verse-1 []
  (str 
    "1 bottle of beer on the wall, 1 bottle of beer.\n"
    "Take it down and pass it around, no more bottles of beer on the wall.\n"
  )
)

(defn- verse-2 []
  (str 
    "2 bottles of beer on the wall, 2 bottles of beer.\n"
    "Take one down and pass it around, 1 bottle of beer on the wall.\n"
  )
)

(defn verse [n]
  (cond
    (= n 0) (verse-0)
    (= n 1) (verse-1)
    (= n 2) (verse-2)
    :else (str 
      n " bottles of beer on the wall, " n " bottles of beer.\n"
      "Take one down and pass it around, " (dec n) " bottles of beer on the wall.\n"
    )
  )
)

(defn- sing-range [list]
  (join "\n" 
    (map verse list)
  )
)

(defn sing 
  ([from] (sing from 0))
  ([from to] (sing-range (range from (dec to) -1)))
)