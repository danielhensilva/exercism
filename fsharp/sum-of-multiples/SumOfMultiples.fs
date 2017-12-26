module SumOfMultiples

let multiples (number: int) (limit: int): int list =
  [ 
    for n in 1 .. limit do 
      if n < limit && n % number = 0 then 
        yield n 
  ]

let sumOfMultiples (numbers: int list) (upperBound: int): int =
  let mapping x = multiples x upperBound 
  numbers |> List.collect mapping |> List.distinct |> List.sum