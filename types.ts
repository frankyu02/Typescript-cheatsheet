//The Types:
//declared as let varName : type

// boolean
// Number: any number including int, float, double, hex etc
// string
// type[]: array declaration. Replace type with an actual data type
// [type, ...] tuple declaration. Specifies an array with fixed number of elements. Can have multiple types in a single declaration. i.e [string, number, string, bool] will create a 4 tuple
// can use [type?] to indicate that it does not need to be initialized necessarily with a value present
// unknown: can be assigned anything. Any variable that is not any cannot be assigned unknown
// undefined: can only be undefined
//null: can only be null

//Unknown VS Any:
let varAny: any = 1;
let varUnknown: unknown = 10;

let test1: number = varAny; // we can assign any to test1 because it can be anything
let test2: number = varUnknown; // we cannot assign type unknown to test2

//type Assertion: type recasting basically

let cid: any = 22;
let cid2 = <number>cid;
let cid3 = cid as number;

let cid4 = <string>cid;
cid4 = 22; // throws error because cid3 is now casted as a string

type peter = number | string;
