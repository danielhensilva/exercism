module OcrNumbers

let isNumberZero line1 line2 line3 =
    " _ " = line1 &&
    "| |" = line2 &&
    "|_|" = line3

let isNumberOne line1 line2 line3 =
    "   " = line1 &&
    "  |" = line2 &&
    "  |" = line3

let isNumberTwo line1 line2 line3 =
    " _ " = line1 &&
    " _|" = line2 &&
    "|_ " = line3

let isNumberThree line1 line2 line3 =
    " _ " = line1 &&
    " _|" = line2 &&
    " _|" = line3

let isNumberFour line1 line2 line3 =
    "   " = line1 &&
    "|_|" = line2 &&
    "  |" = line3

let isNumberFive line1 line2 line3 =
    " _ " = line1 &&
    "|_ " = line2 &&
    " _|" = line3

let isNumberSix line1 line2 line3 =
    " _ " = line1 &&
    "|_ " = line2 &&
    "|_|" = line3

let isNumberSeven line1 line2 line3 =
    " _ " = line1 &&
    "  |" = line2 &&
    "  |" = line3

let isNumberEight line1 line2 line3 =
    " _ " = line1 &&
    "|_|" = line2 &&
    "|_|" = line3

let isNumberNine line1 line2 line3 =
    " _ " = line1 &&
    "|_|" = line2 &&
    " _|" = line3

let parse line1 line2 line3 =     
    match 0 with
    | _ when  isNumberZero line1 line2 line3 -> "0"
    | _ when   isNumberOne line1 line2 line3 -> "1"
    | _ when   isNumberTwo line1 line2 line3 -> "2"
    | _ when isNumberThree line1 line2 line3 -> "3"
    | _ when  isNumberFour line1 line2 line3 -> "4"
    | _ when  isNumberFive line1 line2 line3 -> "5"
    | _ when   isNumberSix line1 line2 line3 -> "6"
    | _ when isNumberSeven line1 line2 line3 -> "7"
    | _ when isNumberEight line1 line2 line3 -> "8"
    | _ when  isNumberNine line1 line2 line3 -> "9"
    | _ -> "?" 

let convert (input: string) = 
    let mutable x = 0
    let mutable y = 0
    let mutable outputChars = ""
    let mutable outputLines = []

    let lines = input.Split('\n')

    while y < lines.Length do

        while x < lines.[y].Length do
            let line1 = lines.[y+0].[x..x+2]
            let line2 = lines.[y+1].[x..x+2]
            let line3 = lines.[y+2].[x..x+2]
            outputChars <- outputChars + parse line1 line2 line3
            x <- x + 3

        outputLines <- outputLines @ [outputChars]
        outputChars <- ""
        y <- y + 4
        x <- 0

    String.concat "," outputLines