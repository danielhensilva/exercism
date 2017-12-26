module QueenAttack

let canAttack (queen1: int * int) (queen2: int * int) = 
    let (x1, y1) = queen1
    match queen2 with
    | (x2, y2) when x1 = x2 && y1 = y2 -> failwith "Cannot occupy same space"
    | (x2, y2) when abs(x1-x2) = abs(y1-y2) -> true // diagonal
    | (_, y2) when y1 = y2 -> true // same column
    | (x2, _) when x1 = x2 -> true // same row
    | _ -> false