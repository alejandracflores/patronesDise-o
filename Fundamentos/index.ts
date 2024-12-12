/// Clases avanzadas en Typescript
// Clase
class Persona {
	// Atributo privado y de tipo string
	private nombre: string;
	
	// Constructor
	constructor(nombre:string) {
		this.nombre = nombre;
	}
	
	// Devolver un string con el nombre
	getInfo(): string {
		// Concatenar
		return `Nombre ${this.nombre}`;
	}
}

// Crear la instancia y pasarle los argumentos
const persona = new Persona('John Doe');
console.log(persona.getInfo());



/// Herencia y polimorfismo
class Bebida {
	constructor(public nombre:string) {}
	
	info(): string {
		return `Bebida ${this.nombre}`;
	}
}

class Cerveza extends Bebida {
	constructor(nombre: string, public alcohol: number) {
        super(nombre);
    }    
	
	info(): string {
		return `${super.info()} Alcohol ${this.alcohol}%`;
	}
}

const miCerveza = new Cerveza('Corona', 1.2);
console.log(miCerveza.info());


/// Implementando interfaces en Typescript
interface Animal {
	// Puede ser de cualquier tipo
	emitirSonido(): void;
	mostrarEdad(): number;
}

class Perro implements Animal {
	private nombre: string;
	private edad: number;
	
	constructor(nombre:string, edad:number) {
		this.nombre = nombre;
		this.edad = edad;
	}
	
	emitirSonido(): void {
		console.log('Sonido: Guau!')
	}
	
	mostrarEdad(): number {
		return this.edad;
	}
}

interface Animal {
	// Puede ser de cualquier tipo
	emitirSonido(): void;
	mostrarEdad(): number;
}

class Gato implements Animal {
	private nombre: string;
	private edad: number;
	
	constructor(nombre:string, edad:number) {
		this.nombre = nombre;
		this.edad = edad;
	}
	
	emitirSonido(): void {
		console.log('Sonido: Miau!')
	}
	
	mostrarEdad(): number {
		return this.edad;
	}
}

const animales: Animal[] = [
	new Perro ('Firulais', 5),
	new Gato ('Garfield', 5),
]

for (const animal of animales) {
	animal.emitirSonido();
	console.log('Edad', animal.mostrarEdad());
	console.log('........................');
}