module BeerSong

let capital (text: string) =
    text.[..0].ToUpper() + text.[1..]

let bottles (n: int) =
    match n with
    | -1 -> "99 bottles of beer"
    | 0 -> "no more bottles of beer"
    | 1 -> "1 bottle of beer"
    | _ -> string n + " bottles of beer"

let action (n: int) = 
    match n with
    | 0 -> "Go to the store and buy some more"
    | 1 -> "Take it down and pass it around"
    | _ -> "Take one down and pass it around"

let verse (n: int) = 
    (bottles n |> capital) + " on the wall, " + 
    bottles n + ".\n" + 
    action n + ", " +
    bottles(n-1) + " on the wall.\n"

let verses (stop: int) (start: int): string = 
    ( [start..stop] 
        |> List.rev 
        |> List.map verse 
        |> String.concat "\n"
    ) + "\n"    

let sing: string = 
    verses 99 0