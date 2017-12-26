module KinderGartenGarden

type Plant =
    | Clover = 'C'
    | Grass = 'G'
    | Radishes = 'R'
    | Violets = 'V'

type ChildPlants = {
    Child: string
    Plants: Plant list
}
    
let defaultChildren: string list = [
    "Alice";
    "Bob";
    "Charlie";
    "David";
    "Eve";
    "Fred";
    "Ginny";
    "Harriet";
    "Ileana";
    "Joseph";
    "Kincaid";
    "Larry";
]

let selectPlantsFromRow (childIndex: int) (row: string): string =
    let first = childIndex * 2
    let last = first + 1
    if row.Length > last then 
        row.[first..last]
    else
        ""

let selectPlantsFromSills (childIndex: int) (sills: string): string =
    sills.Split('\n')
    |> Array.map (fun row -> selectPlantsFromRow childIndex row)
    |> String.concat ""

let createChildPlants (child: string) (childIndex: int) (sills: string): ChildPlants =
    let plants = selectPlantsFromSills childIndex sills
    let parsedPlants = [ 
        for plant in plants do
        yield LanguagePrimitives.EnumOfValue plant 
    ]
    { Child = child; Plants = parsedPlants }

let garden (children: string list) (windowSills: string): ChildPlants list = 
    let sortedChildren = List.sort children
    [0..sortedChildren.Length-1] |> List.map (fun childIndex ->
        let child = sortedChildren.[childIndex]
        createChildPlants child childIndex windowSills
    ) 
        
let defaultGarden (windowSills: string): ChildPlants list =
    garden defaultChildren windowSills

let lookupPlants (child: string) (childPlantsMap: ChildPlants list): Plant list =
    let predicate x = x.Child = child
    let selecteds = List.filter predicate childPlantsMap
    match selecteds with
    | [] -> []
    | _ -> selecteds.Head.Plants