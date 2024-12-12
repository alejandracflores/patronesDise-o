/// Observadores en un chat
// Contexto: Chat en tiempo real entre varios usuarios, donde se notifique a todos los usuarios cuando uno mande mensaje

// Definimos una clase sujeto (CanalChat)
class CanalChat {
    constructor() {
        this.usuarios = [];
        this.mensajes = [];
    }

    agregarUsuario(usuario) {
        this.usuarios.push(usuario);
    }

    eliminarUsuario(usuario) {
        const index = this.usuarios.indexOf(usuario);
        if (index !== -1) {
            this.usuarios.splice(index, 1);
        }
    }

    enviarMensaje(mensaje, remitente) {
        this.mensajes.push({mensaje, remitente});
        this.notificarUsuarios(mensaje, remitente);
    }

    notificarUsuarios(mensaje, remitente) {
        this.usuarios.forEach((usuario) => {
            if (usuario !== remitente) {
                usuario.recibirMensaje(mensaje, remitente.nombre);
            }
        })
    }
}

class Usuario {
    constructor(nombre) {
        this.nombre = nombre;
    }

    recibirMensaje(mensaje, remitente) {
        console.log(`${this.nombre} recibio mensaje de ${remitente}: ${mensaje}`);
    }

    enviarMensaje(mensaje, canal) {
        canal.enviarMensaje(mensaje, this);
    }
}

// Creamos una instancia del CanalChat
const canalChat = new CanalChat();

// Creamos una instancia de los usuarios
const usuario1 = new Usuario('Alejandra');
const usuario2 = new Usuario('Antonio');
const usuario3 = new Usuario('Frida');

// Agregamos usuarios al canal
canalChat.agregarUsuario(usuario1);
canalChat.agregarUsuario(usuario2);
canalChat.agregarUsuario(usuario3);

// Usuario 1 envia mensaje al canal
usuario1.enviarMensaje('Hola a todos', canalChat);
usuario2.enviarMensaje('Cómo están?', canalChat);