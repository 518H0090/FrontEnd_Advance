// Interface
interface Iperson {
  name: string;
  age: number;
}

let Mike: Iperson = {
  name: "Mike",
  age: 34,
};

// Class
class Person implements Iperson {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Person2 implements Iperson {
  constructor(public name: string, public age: number) {}
}
