/// Patrón Decorator
// Aplicación de creación de pasteles

// Clase Base: Pastel
class Pastel {
    obtenerDescripcion() {
        return 'Pastel Básico';
    }

    obtenerCosto() {
        return 10;
    }
}

// Decorador Base: DecoradorPastel
// Actua como una clase base para todos los decoradores
// Hereda de pastel
class DecoradorPastel extends Pastel {
    constructor(pastel) {
        super();
        this.pastel = pastel;
    }

    obtenerDescripcion() {
        return this.pastel.obtenerDescripcion();
    }

    obtenerCosto() {
        return this.pastel.obtenerCosto();
    }
}


// Decorador: CremaBatida
class CremaBatida extends DecoradorPastel {
    obtenerDescripcion() {
        return `${this.pastel.obtenerDescripcion()}, crema batida, `
    }

    obtenerCosto() {
        return this.pastel.obtenerCosto() + 3;
    }
}

// Decorador: Chocolate
class Chocolate extends DecoradorPastel {
    obtenerDescripcion() {
        return `${this.pastel.obtenerDescripcion()}, chocolate`
    }

    obtenerCosto() {
        return this.pastel.obtenerCosto() + 2;
    }
}

// Decorador: Frutas
class Frutas extends DecoradorPastel {
    obtenerDescripcion() {
        return `${this.pastel.obtenerDescripcion()}, frutas`
    }

    obtenerCosto() {
        return this.pastel.obtenerCosto() + 1;
    }
}

// Creamos un pastel básico y aplicamos decoradores
// Cada decorador modifica la descripción y el precio (sobrescribiendo)
const pastelBasico = new Pastel();
const pastelDecorado = new CremaBatida(new Chocolate(new Frutas(pastelBasico)))

console.log(pastelDecorado.obtenerDescripcion());
console.log(pastelDecorado.obtenerCosto());