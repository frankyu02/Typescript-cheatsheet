// implicit type declaration:
let number = 23; // the code automatically assigns the variable to be an int
number = "hello"; // does not allow you to assign string to int

// explicit type declaration:

let val: number; // explicitly declaire this variable to be a number.

let valAny; // by default, variables that don't explicitly have a type or isint assigned is assigned as 'any'

valAny = 3;
valAny = ":hello";

//Variables can have multiple potential types:
//use Union Operator:
let stringOrNumber: number | string;
stringOrNumber = 3; //number
stringOrNumber = "hello"; //string
stringOrNumber = false; //boolean is not ok
