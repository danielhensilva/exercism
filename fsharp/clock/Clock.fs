module Clock

type Clock = {
    Minutes: int
}

let rec normalize (clock: Clock): Clock =
    // yesterday
    if clock.Minutes < 0 then
        { Minutes = clock.Minutes + (24 * 60) } |> normalize
    // tomorrow    
    else if clock.Minutes >= (24 * 60) then
        { Minutes = clock.Minutes % (24 * 60) } |> normalize
    // today    
    else
        clock

let mkClock (hours: int) (minutes: int): Clock =
    { Minutes = hours * 60 + minutes } |> normalize

let add (minutes: int) (clock: Clock): Clock =
    { Minutes = clock.Minutes + minutes } |> normalize

let subtract (minutes: int) (clock: Clock): Clock =
    { Minutes = clock.Minutes - minutes } |> normalize

let display (clock: Clock): string =
    let hours = clock.Minutes / 60
    let minutes = clock.Minutes % 60
    sprintf "%02i:%02i" hours minutes