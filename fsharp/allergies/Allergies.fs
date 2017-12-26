module Allergies

open System
open System.Linq

type Allergen =
    | Eggs = 1
    | Peanuts = 2
    | Shellfish = 4
    | Strawberries = 8
    | Tomatoes = 16
    | Chocolate = 32
    | Pollen = 64
    | Cats = 128

let allergicTo allergen codedAllergies = 
    let allergenCode = LanguagePrimitives.EnumToValue allergen
    let isAllergic = codedAllergies &&& allergenCode = allergenCode
    isAllergic

let allergies codedAllergies = 
    let mutable collection: Allergen list = []
    for value in Enum.GetValues(typeof<Allergen>) do
        let allergen = enum<Allergen> (value :?> int)
        if allergicTo allergen codedAllergies 
            then collection <- collection @ [allergen]
    collection