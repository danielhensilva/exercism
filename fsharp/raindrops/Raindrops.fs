module Raindrops

let sound n =
  match n with
  | 3 -> "Pling"
  | 5 -> "Plang"
  | 7 -> "Plong"
  | _ -> ""

let getSounds number =
  [
    for n in 1 .. number do
      if number % n = 0 then
        yield sound n 
  ]
  |> List.distinct
  |> String.concat ""

let convert (number: int): string =
  let sounds = getSounds number
  match sounds.Length with
  | 0 -> number.ToString()
  | _ -> sounds