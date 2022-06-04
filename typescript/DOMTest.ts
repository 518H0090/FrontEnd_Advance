// DOM and Type Casting
const inputName = document.querySelector("#name") as HTMLInputElement;
const inputAge = document.querySelector("#age") as HTMLInputElement;
// const inputForm = document.querySelector("form");
const greeting = document.querySelector(".greeting") as HTMLDivElement;

interface Iperson {
  name: string;
  age: number;
}

class Person3 implements Iperson {
  constructor(public name: string, public age: number) {}

  greet() {
    return `Hi Hello ${this.name}  where you are ${this.age}`;
  }
}

// Nullable kiểm tra xem form có đó không
// inputForm?.addEventListener("submit", () => {

// });

// cách 2
// thêm ! sau để nói rằng nó sẽ có xuất hiện
const inputForm = document.querySelector("form")!;

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const person = new Person3(inputName.value, inputAge.valueAsNumber);
  greeting.innerText = person.greet();

  inputForm.reset();
});
