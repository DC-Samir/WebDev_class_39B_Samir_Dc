// Q5. Month Season
// Write a JavaScript program that takes a month number (1–12) and displays the corresponding season:

// Winter: 12, 1, 2
// Spring: 3, 4, 5
// Summer: 6, 7, 8
// Autumn: 9, 10, 11
// Use a switch statement. Display "Invalid month" for numbers outside 1–12.

let month = 3;

switch (month) {
    case 12||1||2:
        console.log("Winter");
        break;
    case 3||4||5:
        console.log("Spring");
        break;
    case 6||7||8:
        console.log("Summer");
        break
    case 9||10||11:
        console.log("Autum")
        break;
    default:
        console.log("Invalid month")

}