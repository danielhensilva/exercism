// This file was auto-generated based on version 1.2.1 of the canonical data.

module CollatzConjectureTests

open FsUnit.Xunit
open Xunit

open CollatzConjecture

[<Fact>]
let ``Zero steps for one`` () =
    steps 1 |> should equal (Some 0)

[<Fact>]
let ``Divide if even`` () =
    steps 16 |> should equal (Some 4)

[<Fact>]
let ``Even and odd steps`` () =
    steps 12 |> should equal (Some 9)

[<Fact>]
let ``Large number of even and odd steps`` () =
    steps 1000000 |> should equal (Some 152)

[<Fact>]
let ``Zero is an error`` () =
    steps 0 |> should equal None

[<Fact>]
let ``Negative value is an error`` () =
    steps -15 |> should equal None
