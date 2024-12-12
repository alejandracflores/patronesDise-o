/// Strategy en JS
class Context {
    constructor(strategy) {
        this.strategy = strategy;
    }

    // Método para establecer/cambiar la estrategia en tiempo de ejecución
    setStrategy(strategy) {
        this.strategy = strategy;
    }

    // Método para utilizar la estrategia actual para realizar una operacion
    executeStrategy() {
        return this.strategy.execute();
    }
}

class Strategy {
    execute() {
        throw new Error('Metodo execue debe ser implementado por una estrategia completa');
    }
}

class ConcretStrategy1 {
    execute() {
        return 'Ejecutando la estrategia concreta 1';
    }
}

class ConcretStrategy2 {
    execute() {
        return 'Ejecutando la estrategia concreta 2';
    }
}

class ConcretStrategy3 {
    execute() {
        return 'Ejecutando la estrategia concreta 3';
    }
}

// Ejecución inicial
const context = new Context(new ConcretStrategy1());
console.log(context.executeStrategy());

// Cambio de estrategia en tiempo de ejecución
context.setStrategy(new ConcretStrategy2);
console.log(context.executeStrategy());

// Cambio de estrategia nuvamente en tiempo de ejecución
context.setStrategy(new ConcretStrategy3);
console.log(context.executeStrategy());



/// Aplicación en un caso real
class Contexto2 {
    constructor(estrategia2) {
        this.estrategia2 = estrategia2;
    }

    realizarAccion(monto) {
        this.estrategia2.realizar(monto);
    }
}

// Definición de la clase EstrategiaRegular

class EstrategiaRegular {
    constructor() {
        this.impuesto = 0.16;
    }

    realizar(monto) {
        const impuesto = monto * this.impuesto;
        const total = monto + impuesto;
        console.log(`Venta Regular - Monto: ${monto}, Impuesto: ${impuesto}, Total: ${total}`);
    }
}

const estrategiaRegular = new EstrategiaRegular();
const contexto2 = new Contexto2(estrategiaRegular);
contexto2.realizarAccion(100);