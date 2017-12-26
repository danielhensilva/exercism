module TwoFer

let getResponse (input: string option): string =
  match input with
  | None -> "One for you, one for me."
  | _ -> "One for " + input.Value + ", one for me."