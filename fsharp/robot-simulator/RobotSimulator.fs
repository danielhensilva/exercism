module RobotSimulator

type Bearing = 
    | North
    | East
    | South
    | West

type Robot = {
    bearing: Bearing;
    position: int * int;
}
     
let createRobot bearing coordinate = { 
    bearing = bearing
    position = coordinate
}

let turnLeft robot =
    let nextBearing = 
        match robot.bearing with
        | Bearing.East -> Bearing.North
        | Bearing.West -> Bearing.South
        | Bearing.North -> Bearing.West
        | Bearing.South -> Bearing.East
    createRobot nextBearing robot.position

let turnRight robot = 
    let nextBearing = 
        match robot.bearing with
        | Bearing.East  -> Bearing.South
        | Bearing.West  -> Bearing.North
        | Bearing.North -> Bearing.East
        | Bearing.South -> Bearing.West
    createRobot nextBearing robot.position

let advance robot = 
    let (x, y) = robot.position
    let nextPosition = 
        match robot.bearing with
        | Bearing.East -> (x+1, y)
        | Bearing.West -> (x-1, y)
        | Bearing.North -> (x, y+1)
        | Bearing.South -> (x, y-1)
    createRobot robot.bearing nextPosition

let move robot command =
    match command with
    | 'A' -> advance robot
    | 'L' -> turnLeft robot
    | 'R' -> turnRight robot
    | _ -> failwith "Unknown command"

let simulate robot instructions =
    let mutable movedRobot = robot
    let iterator command = movedRobot <- move movedRobot command
    instructions |> String.iter iterator
    movedRobot