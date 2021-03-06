
class ZebraPuzzle {

//    1. There are five houses.
//    2. The Englishman lives in the red house.
//    3. The Spaniard owns the dog.
//    4. Coffee is drunk in the green house.
//    5. The Ukrainian drinks tea.
//    6. The green house is immediately to the right of the ivory house.
//    7. The Old Gold smoker owns snails.
//    8. Kools are smoked in the yellow house.
//    9. Milk is drunk in the middle house.
//    10. The Norwegian lives in the first house.
//    11. The man who smokes Chesterfields lives in the house next to the man with the fox.
//    12. Kools are smoked in the house next to the house where the horse is kept.
//    13. The Lucky Strike smoker drinks orange juice.
//    14. The Japanese smokes Parliaments.
//    15. The Norwegian lives next to the blue house.

}

class Rule() {

}

data class House(
    var order: Int?,
    var cigarettes: Cigarettes?,
    var color: Color?,
    var drink: Drink?,
    var nationality: Nationality,
    var pet: Pet
)

enum class Color {
    BLUE,
    GREEN,
    IVORY,
    RED,
    YELLOW,
}

enum class Nationality {
    ENGLISHMAN,
    JAPANESE,
    NORWEGIAN,
    SPANIARD,
    UKRAINIAN,
}

enum class Pet {
    DOG,
    FOX,
    HORSE,
    SNAILS,
    ZEBRA,
}

enum class Drink {
    COFFEE,
    MILK,
    ORANGE_JUICE,
    TEA,
    WATER,
}

enum class Cigarettes {
    CHESTERFIELDS,
    KOOLS,
    LUCKY_STRIKE,
    OLD_GOLD,
    PARLIAMENTS,
}