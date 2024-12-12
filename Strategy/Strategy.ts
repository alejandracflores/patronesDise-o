/// Strategy en Typescript
// Definición de la interfaz de la estrategia
interface Estrategia {
    realizar(monto:number): void;
}

// Implementación de la clase EstrategiaRegular
class EstrategiaRegular implements Estrategia {
    private impuesto: number = 0.16;

    realizar(monto: number): void {
        const impuesto = monto * this.impuesto;
        const total = monto + impuesto;
        console.log(`Venta Regular - Monto: ${monto}, Impuesto: ${impuesto}, Total: ${total}`);
    }
}

// Definición de la clase Contexto
class Contexto {
    private estrategia: Estrategia;

    constructor(estrategia: Estrategia) {
        this.estrategia = estrategia;
    }

    realizarAccion(monto:number): void {
        this.estrategia.realizar(monto);
    }
}

// Creación de la instancia contexto y ejecución de la acción
const estrategiaRegular: Estrategia = new EstrategiaRegular();
const contexto: Contexto = new Contexto(estrategiaRegular);
contexto.realizarAccion(100);