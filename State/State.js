/// Patrón State

// Aplicación de reproducción de música que tiene diferentes estados
// Como una reproducción tiene pausa y pausa el detenido

// Actúa como un contexto que mantiene una instancia del estado artual del reproductor de música
class ReproductorMusica {
    constructor() {
        this.estado = new EstadoDetenido();
    }

    cambiarEstado(estado) {
        this.estado = estado;
    }

    reproducir() {
        this.estado.reproducir();
    }

    pausar() {
        this.estado.pausar();
    }

    detener() {
        this.estado.detener();
    }
}

// Representa las operaciones comunes para los diferentes estados del reproductor
class EstadoReproductor {
    reproducir() {
        throw new Error('Este métodos debe ser implementado por las clases hijas.')
    }

    pausar() {
        throw new Error('Este métodos debe ser implementado por las clases hijas.')
    }

    detener() {
        throw new Error('Este métodos debe ser implementado por las clases hijas.')
    }
}

class EstadoReproduccion extends EstadoReproductor {
    reproducir() {
        console.log('El reproductor ya está en estado de reproducción.');
    }

    pausar() {
        console.log('Pausando la reproducción.');
        reproductorMusica.cambiarEstado(new EstadoPausa());
    }

    detener() {
        console.log('Deteniendo la reproducción.');
        reproductorMusica.cambiarEstado(new EstadoDetenido());
    }
}

class EstadoPausa extends EstadoReproductor {
    reproducir() {
        console.log('Reanudando la reproducción');
        reproductorMusica.cambiarEstado(new EstadoReproduccion());
    }

    pausar() {
        console.log('El reproductor ya está en estado de pausa');
    }

    detener() {
        console.log('Deteniendo la reproducción.');
        reproductorMusica.cambiarEstado(new EstadoDetenido());
    }
}

class EstadoDetenido extends EstadoReproductor {
    reproducir() {
        console.log('Iniciando la reproducción');
        reproductorMusica.cambiarEstado(new EstadoReproduccion());
    }

    pausar() {
        console.log('El reproductor ya está detenido. No se puede pausar.');
    }

    detener() {
        console.log('El reproductor ya está detenido.');
    }
}

const reproductorMusica = new ReproductorMusica();

reproductorMusica.reproducir();
reproductorMusica.reproducir();
reproductorMusica.pausar();
reproductorMusica.pausar();
reproductorMusica.detener();
reproductorMusica.detener();
reproductorMusica.pausar();



/// State en una escena de juego

// Definamos la clase Contexto (Escena del juego)
class EscenaJuego {
    constructor() {
        this.estado = new EstadoInicio();
    }

    cambiarEstado(estado) {
        this.estado = estado;
    }

    ejecutar(estado) {
        this.estado.ejecutar();
    }
}

// Definamos la clase Estado (Esado Escena)
class EstadoEscena {
    ejecutar() {
        throw new Error('Este método debe ser implementado por clases hijas');
    }
}

class EstadoInicio extends EstadoEscena {
    ejecutar() {
        console.log('Iniciando la escena del juego');
        // Cambiar al estado del juego
        escenaJuego.cambiarEstado(new EstadoJugando());
    }
}

class EstadoJugando extends EstadoEscena {
    ejecutar() {
        console.log('Jugando la escena del juego');
        // Cambiar al estado finalizado
        escenaJuego.cambiarEstado(new EstadoFinalizado());
    }
}

class EstadoFinalizado extends EstadoEscena {
    ejecutar() {
        console.log('Escena del juego finalizada');
        // Cambiar al estado inicial
        escenaJuego.cambiarEstado(new EstadoInicio());
    }
}

const escenaJuego = new EscenaJuego();
escenaJuego.ejecutar();
escenaJuego.ejecutar();
escenaJuego.ejecutar();
escenaJuego.ejecutar();
