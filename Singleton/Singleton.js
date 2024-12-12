/// Implementación
class Singleton {
	constructor() {
		// Aquí tendríamos la lógica del Singleton
		// Si no hay una instancia devolver la instancia
		if (Singleton.instance) {
			return Singleton.instance;
		}
		
		console.log('Se ha creado una nueva instancia de Singleton');
		
		Singleton.instance = this;
	}
	
	// Si existe una la retorna si no la crea
	// Define un método estático para comprobar si ya tiene un valor
	static getInstance() {
		if(Singleton.instance) {
			return Singleton.instance;
		}
		
		return new Singleton();
	}
}

// Creamos un objeto Singleton
const singleton1 = new Singleton();

// Intentamos crear otro objeto Singleton
const singleton2 = new Singleton();

console.log(singleton === singleton);



/// Singleton para bases de datos
class DatBase {
	constructor() {
		if(DataBase.instance)	{
			return DataBase.instance;
		}
		
		console.log('Se ha creado una nueva Instance de DataBase');
		
		// Simulación de conexión
		
		this.host = 'localhost';
		this.username = 'admin';
		this.password = 'password';
		
		DataBase.instance = this;
	}
	
	query(sql) {
		console.log(`Ejecutando la consulta: $(sql)`);
	}
}

const db1 = new DataBase();
const db2 = new DataBase();

console.log(db1 === db2);

db1.query('SELECT * FROM users');
db2.query('UPDATE products SET price = 10');