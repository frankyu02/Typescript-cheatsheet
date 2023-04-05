//we can create custom types using the 'type' keyword
//suppose we have a custom type RGB such that the value can only be red, blue or green (the strings)

type RGB = "red" | "blue" | "green";

let color: RGB;

color = "red"; //yes
color = "blue"; //yes
color = "yellow"; //no

//enums: Built in to the language however is a popular way to create custom types
enum Animals {
  dog,
  cat,
  parrot,
  rooster,
}
let animal: Animals = Animals.cat;
animal = 0; // note this is allowed only because enums paid keys to indexes under the hood

//types on objects
//we can use the 'interface' keyword to create objects with specific keywords

//declaration of Dog type
interface Dog {
  name: string;
  age: number;
}

//initialize an object as a Dog:
const Nana: Dog = {
  name: "Nana",
  age: 4,
};

const badDog: Dog = {
  name: "naughty",
  age: 5,
  friends: ["harpy"], //error here because Dog type does not have field 'friends'
};

//Flexible object types:
interface FlexibleDog {
  name: string;
  age: number; // these two parameters are required
  [key: string | number]: any; //types wrapped in square brackets indicate optional parameters. Here, we are allowing any string or number to be the key and can store any datatype
  mother?: string; //keys with a question mark are specific keys that are optional to include
  readonly home: string; // readonly keyword indicates that the particular key data cannot be updated
}
const flexible: FlexibleDog = {
  name: "flex",
  age: 11,
  friends: ["joe"], // now we can assign these params
  1: 200,
  home: "here",
};
flexible.home = "there"; // throws error because home is readonly
