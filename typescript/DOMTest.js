"use strict";
// DOM and Type Casting
const inputName = document.querySelector("#name");
const inputAge = document.querySelector("#age");
// const inputForm = document.querySelector("form");
const greeting = document.querySelector(".greeting");
class Person3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hi Hello ${this.name}  where you are ${this.age}`;
    }
}
// Nullable kiểm tra xem form có đó không
// inputForm?.addEventListener("submit", () => {
// });
// cách 2
// thêm ! sau để nói rằng nó sẽ có xuất hiện
const inputForm = document.querySelector("form");
inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const person = new Person3(inputName.value, inputAge.valueAsNumber);
    greeting.innerText = person.greet();
    inputForm.reset();
});
