/// Aprobador o Cadena

// Sistema de aprobación de solicitud de vacaciones en una empresa.
// Diferentes niveles de autoridad cada nivel tiene un limite máximo de días de vacaciones que se puede aprobar
// Si la solicitud excede el límite de un nivel, debe pasar al siguiente nivel de aprobación.

class Aprobador {
    constructor(nombre, limite) {
        this.nombre = nombre;
        this.limite = limite;
        this.siguienteAprobador = null;
    }

    establecerSiguienteAprobador(aprobador) {
        this.siguienteAprobador = aprobador;
    }

    aprobarSolicitud(solicitud) {
        if(solicitud.dias <= this.limite) {
            console.log(`${this.nombre} aprobo la solicitud de vacaciones`);
        } else if (this.siguienteAprobador) {
            this.siguienteAprobador.aprobarSolicitud(solicitud);
        } else {
            console.log('Ningun aprobador pudo manejar la solicitud de vacaciones');
        }
    }
}

// Creamos instancias de los aprobadores
const supervisor = new Aprobador('Supervisor', 5);
const gerente = new Aprobador('Gerente', 10);
const director = new Aprobador('Director', 15);


// Establecer la cadena de responsabilidad
supervisor.establecerSiguienteAprobador(gerente);
gerente.establecerSiguienteAprobador(director);

// Solicitud de vacaciones
const solicitud = {dias: 12};

// Iniciar solicitud
supervisor.aprobarSolicitud(solicitud);