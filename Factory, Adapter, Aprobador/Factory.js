/// Factory

// Clase de productos que nosotros queremos crear
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrarInfo() {
        console.log(`Producto: ${this.nombre}, Precio: ${this.precio}`);
    }
}

// Clase definida para crear productos
// Definimos una fabrica para crear productos
// Clase abstracta que define la interfaz para crear productos
class FabricaProductos {
    crearProducto(nombre, precio) {
        throw new Error('Este metodo debe ser implementado por la clase hija');
    }
}

// Definimos una clase concreta de la fabrica (FabricaSimple)
// Clases concretas que heredan la clase FabricaProductos y proporcionan la implementación específica para crear productos
class FabricaSimple extends FabricaProductos {
    crearProducto(nombre, precio) {
        return new Producto(nombre, precio);
    }
}

// Definimos una clase concreta de la fabrica (FabricaDescuento)
// Clases concretas que heredan la clase FabricaProductos y proporcionan la implementación específica para crear productos
class FabricaDescuento extends FabricaProductos {
    crearProducto(nombre, precio) {
        const precioConDescuento = precio - 10;
        return new Producto(nombre, precioConDescuento);
    }
}

const fabricaSimple = new FabricaSimple();

const producto1 = fabricaSimple.crearProducto('Producto1', 200);
producto1.mostrarInfo();

const fabricaDescuento = new FabricaDescuento();

const producto2 = fabricaDescuento.crearProducto('Producto2', 200);
producto2.mostrarInfo();

// Se utiliza el patrón para crear productos utilizando diferentes fábricas (con o sin descuento)
// Sin preocuparnos por los detalles de la creación
// Cada fábrica tiene su propia lógica de creación y devuelve el producto correspondiente