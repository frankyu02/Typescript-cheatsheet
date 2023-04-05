// we have a custom class vector. T indicates that there is no pre-defined type to it
class vector<T> {
  constructor(public vale: T) {}
}

let x: vector<number>; // creates a new instance of a vector passing in the type as number
//can also implicitly call them:
let z = new vector("hello"); //creates a new string vector
