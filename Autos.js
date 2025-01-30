class Car {
    constructor(name, detailsId, buttonId) {
        this.name = name;
        this.detailsId = detailsId;
        this.buttonId = buttonId;
    }

    toggleDetails() {
        const details = document.getElementById(this.detailsId);
        
        // Ocultar todos los detalles antes de mostrar el seleccionado
        const allDetails = document.querySelectorAll('.car-details');
        allDetails.forEach(detail => {
            if (detail !== details) {
                detail.style.display = 'none';
            }
        });

        // Cambiar visibilidad con efecto de transición
        if (details.style.display === "block") {
            details.style.opacity = "0";
            setTimeout(() => (details.style.display = "none"), 300);
        } else {
            details.style.display = "block";
            setTimeout(() => (details.style.opacity = "1"), 10);
        }

        // Cambiar los colores del botón de manera más suave
        const button = document.getElementById(this.buttonId);
        button.style.backgroundColor = details.style.display === "block" ? "#80c6b5" : "#a3cbe3"; // Colores más suaves
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
        
        this.cars.forEach(car => car.attachEventListener());
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new AutoWiki();
});
