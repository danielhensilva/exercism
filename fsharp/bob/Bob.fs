module Bob

open System.Text.RegularExpressions

let IsYell (input: string): bool =
  input = input.ToUpper() && Regex.IsMatch(input, "[A-Z]")

let IsQuestion (input: string): bool =
  input.EndsWith("?")

let IsNothing (input: string): bool = 
  input.Trim() = ""

let hey (input: string): string =
  if IsYell(input) then "Whoa, chill out!"
  else if IsQuestion(input) then "Sure."
  else if IsNothing(input) then "Fine. Be that way!"
  else "Whatever."