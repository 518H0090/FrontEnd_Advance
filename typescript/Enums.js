"use strict";
var ManuFacturer;
(function (ManuFacturer) {
    ManuFacturer[ManuFacturer["TESLA"] = 1] = "TESLA";
    ManuFacturer[ManuFacturer["AUDI"] = 3] = "AUDI";
    ManuFacturer[ManuFacturer["MERCEDES"] = 100] = "MERCEDES";
    ManuFacturer[ManuFacturer["VOLVO"] = 200] = "VOLVO";
    ManuFacturer[ManuFacturer["BMW"] = 10] = "BMW";
})(ManuFacturer || (ManuFacturer = {}));
const myCar = {
    year: 2021,
    make: ManuFacturer.VOLVO,
};
console.log(myCar.make);
console.log(String(ManuFacturer.VOLVO));
