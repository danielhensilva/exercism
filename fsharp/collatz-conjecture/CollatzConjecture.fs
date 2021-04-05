module CollatzConjecture


let addOne (number: int option) : int option =
    match number with
    | Some x -> Some(x + 1)
    | None -> None


let nextNumber (number: int) : int =
    if (number % 2 = 0) then
        (number / 2)
    else
        (number * 3 + 1)


let rec steps (number: int) : int option =
    match number with
    | n when n <= 0 -> None
    | n when n = 1 -> Some 0
    | _ -> number |> nextNumber |> steps |> addOne
