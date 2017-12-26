module SpaceAge

type Planet = 
  | Earth
  | Mercury
  | Venus
  | Mars
  | Jupiter
  | Saturn
  | Uranus
  | Neptune

let earthYearInSeconds = 31557600m

let getOrbitalPeriodInEarthYears (planet: Planet): decimal =
  match planet with
    | Earth   -> 1.00000000m
    | Mercury -> 0.24084670m
    | Venus   -> 0.61519726m
    | Mars    -> 1.88081580m
    | Jupiter -> 11.8626150m
    | Saturn  -> 29.4474980m
    | Uranus  -> 84.0168460m
    | Neptune -> 164.791320m

let spaceAge (planet: Planet) (seconds: decimal): decimal =
  let earthYears = seconds / earthYearInSeconds
  let planetYears = earthYears / getOrbitalPeriodInEarthYears planet
  System.Math.Round(planetYears, 2)