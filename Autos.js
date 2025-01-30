class Car {
    constructor(name, detailsId, buttonId) {
        this.name = name;
        this.detailsId = detailsId;
        this.buttonId = buttonId;
    }

    
    toggleDetails() {
        const details = document.getElementById(this.detailsId);
        if (details.style.display === "block") {
            details.style.display = "none";
        } else {
            details.style.display = "block";
        }
    }

    
    attachEventListener() {
        const button = document.getElementById(this.buttonId);
        button.addEventListener("click", () => this.toggleDetails());
    }
}

class AutoWiki {
    constructor() {
        this.cars = [];
        this.initCars();
    }

    initCars() {
        this.cars.push(new Car('Ford Mustang', 'details-car1', 'car1'));
        this.cars.push(new Car('Chevrolet Camaro', 'details-car2', 'car2'));
        this.cars.push(new Car('Tesla Model 3', 'details-car3', 'car3'));
        this.cars.push(new Car('BMW M3', 'details-car4', 'car4'));
        this.cars.push(new Car('Audi R8', 'details-car5', 'car5'));
        this.cars.push(new Car('Mercedes-Benz S-Class', 'details-car6', 'car6'));
        this.cars.push(new Car('Honda Civic', 'details-car7', 'car7'));
        this.cars.push(new Car('Ferrari 488 GTB', 'details-car8', 'car8'));
        
        
        this.cars.forEach(car => car.attachEventListener());
    }
}


document.addEventListener("DOMContentLoaded", () => {
    new AutoWiki();
});
