
function Man(name, age) {
    this.name = name;
    this.age = age;
};

function Car(brand, color, price, owner) {
    this.brand = brand;
    this.color = color;
    this.price = price;
    this.owner = owner;
};

function initDataMan() {
    function getNameAndCheck() {
        man.name = prompt('Your man name');
        if (isNaN(Number(man.name)) === true) {
            return man.name;
        }
        getNameAndCheck();
    }
    getNameAndCheck();

    function getAgeAndCheck() {
        man.age = +prompt('Your man age(18-100)', '18');
        if (man.age >= 18 && man.age <= 100) {
            return man.age;
        }
        getAgeAndCheck();
    }
    getAgeAndCheck();

    console.log(man);
};

function initDataCar() {
    function getBrandAndCheck() {
        car.brand = prompt('Your car brand:');
        if (isNaN(Number(car.brand)) === true) {
            return car.brand;
        }
    }
    getBrandAndCheck();

    function getColorAndCheck() {
        car.color = prompt('Your car color:');
        if (isNaN(Number(car.brand)) === true) {
            return car.brand;
        }
    }
    getColorAndCheck();

    function getPriceAndCheck() {
        car.price = +prompt('Your car price(1000-100000', '1000');
        if (car.price >= 1000 && car.price <= 100000) {
            return car.price;
        }
        getPriceAndCheck()
    }
    getPriceAndCheck();

    function getOwner() {
        car.owner = man;
    };
    getOwner()

    console.log(car)
};

let man = new Man;
let car = new Car;