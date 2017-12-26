module GradeSchool

let empty: Map<int, string list> =
    Map.empty

let roster (school: Map<int, string list>): (int * string list) list = 
    Map.toList school

let grade (number: int) (school: Map<int, string list>): string list = 
    let students = school.TryFind(number)
    match students with
        | None -> List.Empty
        | _ -> students.Value

let add (student: string) (number: int) (school: Map<int, string list>): Map<int, string list> = 
    let students = (student :: grade number school) |> List.sort
    let remaining = school.Remove number
    remaining.Add(number, students)