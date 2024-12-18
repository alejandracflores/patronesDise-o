/// Decarator con Typescript
// Aplicación de manejo de rutas para un sistema de navegación
// Se desea garantizar que ciertas rutas solo sean accesibles para usuarios que estén autenticados
// Utilizar un decorator para verificar la autenticación antes de acceder a las ciertas rutas

// Da error por el tipo de configuración de ts
// function VerificarAutenticacion (target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
//     const metodoOriginal = descriptor.value;
//     descriptor.value = function () {
//         if (estaAutenticado()) {
//             return metodoOriginal.call(this);
//         }
//         else {
//             console.log('Acceso no autorizado. Debes iniciar sesión')
//         }
//     }

//     return descriptor;
// }

// class Ruta {
//     constructor() {

//     }
//     @VerificarAutenticacion;
//     acceder(): void {
//         console.log('Accediendo a la ruta...');
//     }
// }


// function estaAutenticado(): boolean {
//     return true;
// }

// const ruta = new Ruta();

// ruta.acceder();

class Ruta {
    acceder(): void {
        console.log('Accediendo a la ruta...');
    }
}

// Clase decoradora
class VerificarAutenticacion {
    private ruta: Ruta;

    // Acceder a una ruta específica
    constructor(ruta: Ruta) {
        this.ruta = ruta;
    }

    // Decorador para verificar la autenticación
    // Toma una instancia de ruta en su constructor y añade la lógica adicional
    acceder(): void {
        if (estaAutenticado()) {
            this.ruta.acceder();
        } else {
            console.log('Acceso no autorizado. Debes iniciar sesión');
        }
    }
}

function estaAutenticado(): boolean {
    return true;
}

// Se crea la instancia
const rutaDecorada = new VerificarAutenticacion(new Ruta());

rutaDecorada.acceder();