enum ManuFacturer {
  TESLA = 1,
  AUDI = 3,
  MERCEDES = 100,
  VOLVO = 200,
  BMW = 10,
}

const myCar = {
  year: 2021,
  make: ManuFacturer.VOLVO,
};

console.log(myCar.make);
console.log(String(ManuFacturer.VOLVO));
