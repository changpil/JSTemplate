function Car(id) {
    this.carId = id
}
Car.prototype.start = function () {
    console.log('start a car: ' + this.carId);
};
let cars = [];
for (let i = 1; i < 10; i++) {
    cars[i] = new Car(i);
    cars[i].start();
}

let result = cars.every(car => car.carId > 0);
console.log(result);


console.log(1 > null);
console.log(0 == null);
console.log(0 >= null);


// Error
// let result1 = cars.find(car => car.carId > 1);
// console.log(result1);

let carIds = [
    { carId: 1, style: 'convertible' },
    { carId: 2, style: 'sedan' },
    { carId: 3, style: 'suv' },
];


result = carIds.find(car => car.carId > 2);
console.log(result);

result = carIds.find(car => car.carId > 21);
console.log(result);

console.log(window);
console.log(location.href);
{
    let el = document.getElementById("first");
    console.log(el);

    let els = document.getElementsByClassName("p1");
    console.log(els);


    let elp = document.getElementsByTagName("p");
    console.log(elp);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
{
    let el = document.getElementById("first");
    el.style.color = "blue";
    el.setAttribute("foo", "fooValue");
    console.log(el);
    el.classList.add('p2');
    console.log(el);
    el.classList.add('p23');
    console.log(el);
}