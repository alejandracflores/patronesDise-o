/// Patrón Observer

// Escenario: Tenemos una aplicación de clima que muestra la temperatuva actual en diferentes ciudades.
// Queremos que cuando la temperatura cambie en algunas ciudades, automáticamente se actualice la interfaz de usuario.

// Sujeto
class WeatherData {
    constructor() {
        this.temperatura = 0;
        this.observadores = [];
    }

    agregarObservador(observador) {
        this.observadores.push(observador);
    }

    eliminarObservador(observador) {
        const index = this.observadores.indexOf(observador);
        if (index !== -1) {
            this.observadores.splice(index, 1);
        }
    }

    notificarObservadores() {
        this.observadores.forEach((observador, index) => {
            observador.actualizar(this.temperatura);
        })
    }

    cambiarTemperatura(nuevaTemperatura) {
        this.temperatura = nuevaTemperatura;
        this.notificarObservadores();
    }
}

// Observador
class Display {
    constructor(ciudad) {
        this.ciudad = ciudad;
    }

    actualizar(temperatura) {
        console.log(`La temperatura eactual en ${this.ciudad} es ${temperatura}°C`);
    }
}

const weatherData = new WeatherData();
const display1 = new Display('Ciudad A');
const display2 = new Display('Ciudad B');

weatherData.agregarObservador(display1);
weatherData.agregarObservador(display2);

weatherData.cambiarTemperatura(23);
weatherData.cambiarTemperatura(22);
weatherData.cambiarTemperatura(11);