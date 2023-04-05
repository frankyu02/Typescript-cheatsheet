//generic template:
// function funcName(varName:type, ...): functionReturnType {}

function add(x: number, y: number): number {
  return x + y;
}

function badadd(x: number, y: number): number {
  return x + y + "hello"; //now there is an error because the return is specified as a number but returns a string
}

//once again anything not explicitly or implicitly given a type is automatically set as any

//interface with functions:
interface someFunc {
  (x: number, y: number): number;
}
//typically used for arrow functions
const sub: someFunc = (x: number, y: number): number => {
  return x - y;
};

//Function Types:
//every type listed in types.ts AND...
// void: returns undefined i.e no actual return value
// never: should never return and thereful either terminates with error or never finishes executing
