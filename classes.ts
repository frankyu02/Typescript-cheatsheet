// generic classes:
class A {
  name: string;
  id: number;
  constructor(name: string, id: number) {
    this.id = id;
    this.name = name;
  }
}

//inheritance can be implented
class AB extends A {
  somethingnew: any;
  constructor(name: string, id: number, somethingnew: any) {
    super(name, id);
    this.somethingnew = somethingnew;
  }
}

//We can also use interfaces to give a class a specific type
interface B {
  id: string;
  position: string;
  print(): void;
}

class InterfacedClass implements B {
  //notice how every property in the interface is implemented in the new class.
  id: string;
  position: string;
  print(): void {
    console.log("hellO");
  }
  constructor(id: string, position: string) {
    this.id = id;
    this.position = position;
  }
  // also note that you must implement everything in the implement however you can add anything else you may need
  somethingElse: any = "eek";
  dontPrint(): void {
    return;
  }
}

class BA extends InterfacedClass {
  blah: string;
  constructor(id: string, position: string, blah: string) {
    super(id, position);
    this.blah = blah;
  }
}
