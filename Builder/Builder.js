/// Patrón Builder

// Sistema para una pizzeria
// Se utiliza el patrón Builder para crear pizzas con diferentes ingredientes y tamaños de forma flexible

// Flexible: Métodos para establecer el tipo de pizza, tamaño e ingredientes
class PizzaBuilder {
    constructor() {
        this.tipo = '';
        this.tamano = '';
        this.ingredientes = [];
    }

    setTipo(tipo) {
        this.tipo = tipo;
        // Retornar el this nos permite el encadenamiento de métodos
        return this;
    }

    setTamano(tamano) {
        this.tamano = tamano;
        // Retornar el this nos permite el encadenamiento de métodos
        return this;
    }

    agregarIngredientes(ingrediente) {
        this.ingrediente.push(ingrediente);
        // Retornar el this nos permite el encadenamiento de métodos
        return this;
    }

    // Build
    build() {
        // Aun no existe pizza
        return new Pizza(this.tipo, this.tamano, this.ingredientes)
    }
}

// Definimos la pizza
class Pizza {
    constructor(tipo, tamano, ingredientes) {
        this.tipo = tipo;
        this.tamano = tamano;
        this.ingredientes = ingredientes;
    }

    mostrar() {
        console.log(`Pizza ${this.tipo} - Tamaño: ${this.tamano}`);
        console.log('Ingredientes:');
        this.ingredientes.forEach((ingrediente) => {
            console.log('- ' + ingrediente);
        });
    }
}

const pizzaHawaiana = new PizzaBuilder()
    .setTipo('Hawaiana')
    .setTamano('Mediana')
    .agregarIngredientes('Pina')
    .agregarIngredientes('Jamón')
    .build()

pizzaHawaiana.mostrar();



/// Builder en un caso práctico

// Sistema de creación de informes para una empresa
// Generar informes con diferentes secciones: encabezado, contenido, pie de páginas
class ReporteBuilder {
    constructor() {
        this.encabezado = '';
        this.contenido = '';
        this.pieDePagina = '';
    }

    setEncabezado(encabezado) {
        this.encabezado = encabezado;
        return this;
    }

    setContenido(contenido) {
        this.contenido = contenido;
        return this;
    }

    setPieDePagina(pieDePagina) {
        this.pieDePagina = pieDePagina;
        return this;
    }

    // Su función principal es contruir una instancia completa del objeto que se está construyendo
    // Crear y retornar una nueva instancia de la clase reporte, pasando como argumentos los valores de la propiedad
    // Encapsula el proceso de construcción del objeto y proporciona una interfaz coherente
    // Permite ocultar detalles de construcción y configuración del objeto al cliente
    // lo que facilita la creación de objetos más complejos
    build() {
        return new Reporte(this.encabezado, this.contenido, this.pieDePagina);
    }
}

class Reporte {
    constructor(encabezado, contenido, pieDePagina) {
        this.encabezado = encabezado;
        this.contenido = contenido;
        this.pieDePagina = pieDePagina;
    }


    generarPDF() {
        console.log('Generando reporte en formato PDF...');
        console.log('Reporte en PDF generado correctamente');
    }

    generarHTML() {
        console.log('Generando reporte en formato HTML...');
        console.log('Reporte en HTML generado correctamente');
    }
}

// Instancia
const reporteBuilder = new ReporteBuilder()
    .setEncabezado('Encabezado del Reporte')
    .setContenido('Contenido del Reporte')
    .setPieDePagina('Pie de Pagina del Reporte')
    .build()

reporteBuilder.generarPDF();
reporteBuilder.generarHTML();