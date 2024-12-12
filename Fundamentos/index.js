/// Funciones de primer orden y orden superior
// Función de primer orden
function add (x,y) {
	return x + y;
}

let resultado = add (5,6);
// console.log(resultado);

let func = add;
// console.log(func(5,6));

resultado = func(5,6);
// console.log(resultado);

// Función de oden superior
function operation (a,b,fn) {
	console.log('Aquí va el desarrollo de otro código')
	let res = fn(a,b)
	console.log(res)
}

operation(10, 2, func);



/// Funciones flecha
// Función flecha
let funcB = () => {
	console.log('Algo');
}

funcB();

let funcC = () => console.log('Algo');

funcC();

// Función de oden superior mandando una función flecha
function operation (a,b,fn) {
	console.log('Aquí va el desarrollo del código');
	let res = fn(a,b);
	console.log(res);
}

// Si solo es una linea
operation(10, 2, (x,y) => x * y);

// Si son varias lineas de código
operation(1, 2, (x, y) => {
	let z = x + y;
	return z * 2;
});


/// Iterando con el método forEach
// Usar una función anónima como argumento para el ForEach
const datos = ['elemento1', 'elemento2', 'elemento3'];

// Mostrar elementos en consola
datos.forEach(element => {
    console.log('Elemento: ' + element);
});

// Mostrar elementos en mayúsculas
datos.forEach(element => {
    console.log('Elemento: ' + element.toUpperCase());
});

// Mostrar elementos en minúsculas
datos.forEach(element => {
    console.log('Elemento: ' + element.toLowerCase());
});

// Ordenar un arreglo numérico de forma ascendente
const numeros = [3, 1, 2];
numeros.sort((a, b) => a - b);
console.log('Array ordenado: ' + numeros);



/// Transformando array con el método Map
// Con función anónima
const valores = [1,2,3,4,5];

const cuadrdos = valores.map(function (numero) {
	return numero * numero;
})

console.log(valores);
console.log(cuadrados);

// Ejemplo con función flecha
const cuadrdos_flecha = valores.map(numero => numero * numero);

console.log(cuadrados);



/// Reduciendo arrays con el método Reduce
// Método reduce y una función anónima
const numbers2 = [1,2,3,4,5];
const sum2 = numbers2.reduce(function (acculator, currentValue) {
	return acculator + currentValue;
}, 0)

console.log('Sumatoria: ' + sum2)

let initialValue = 10;

const numbers3 = [1,2,3,4,5];
const sum3 = numbers3.reduce(function (acculator, currentValue) {
	return acculator + currentValue;
}, initialValue)

console.log('Sumatoria: ' + sum3)

// Función flecha
const sum4 = numbers.reduce( (acculator, currentValue) => acculator + currentValue, initialValue)
console.log('Sumatoria: ' + sum4)



/// Introducción a las clases
class Bebida {
	// contructor
	constructor(nombre) {
		this.nombre = nombre;
	}
	
	// Método
	info() {
		return this.nombre;
	}
}

// Objeto
const miBebida = new Bebida('Jugo');
console.log(miBebida.info());

// Definición de una función que actua como un contructor de objetos
function miBebida2(nombre) {
	this.nombre = nombre;
	
	this.info = function () {
		return this.nombre
	}
}

const miOtraBebida = new miBebida2('Cafe');
console.log(miOtraBebida.info());



/// Explorando la herencia en Javascript
class Bebida {
	// contructor
	constructor(nombre) {
		this.nombre = nombre;
	}
	
	// Método
	info() {
		return this.nombre;
	}
}

// Herencia
class Cerveza extends Bebida {
	constructor (nombre, alcohol) {
		super(nombre);
		this.alcohol = alcohol;
	}
	info() {
		super.info();
		console.log('El contenido del alcohol es: ' + this.alcohol)
	}
}
const cerveza = new Cerveza('Quilmes', 4.9);
cerveza.info();
