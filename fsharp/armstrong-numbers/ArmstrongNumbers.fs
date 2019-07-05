module ArmstrongNumbers

let rec digits(number: int): int list =
  if number = 0 then []
  elif number < 10 then [number]
  else
    let digit = number % 10
    let outNumber = (number - digit) / 10
    let outDigits = digits(outNumber)
    outDigits @ [digit]

let rec sum(allDigits: int list, length: int) =
  match allDigits with
    | head::tail -> (pown head length) + sum(tail, length)
    | _ -> 0

let isArmstrongNumber (number: int): bool =
  let allDigits = digits number
  let allDigitsLength = List.length allDigits
  let totalSum = sum(allDigits, allDigitsLength)
  number = totalSum

