module Seq

let rec keep pred xs =
    let mutable x = []
    for i in xs do
        match pred(i) with
        | true -> x <- x @ [i]
        | _ -> ignore i
    x

let rec discard pred xs =
    let mutable x = []
    for i in xs do
        match pred(i) with
        | false -> x <- x @ [i]
        | _ -> ignore i
    x