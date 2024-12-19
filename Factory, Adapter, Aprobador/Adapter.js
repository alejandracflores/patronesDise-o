/// Adapter

// Escenario: tenemos una aplicación que reproduce archivos multimedia
// Pero solo es compatible con el formato MP3
// Queremos que nuestra aplicación pueda reproducir archivos de otros formatos

class AdapterAAC {
    constructor(aacPlayer) {
        this.aacPlayer = aacPlayer;
    }

    reproducirArchivoAAC(nombreArchivo) {
        this.aacPlayer.playAAC(nombreArchivo);
    }
}

class ReproductorMP3 {
    reproducirArchivoMP3(nombreArchivo) {
        console.log('Reproduciendo archivo MP3: ', nombreArchivo);
    }
}

class ReproductorAAC {
    playAAC(nombreArchivo) {
        console.log('Reproduciendo archivo AAC: ', nombreArchivo);
    }
}

const reproductorMP3 = new ReproductorMP3();

const reproductorAAC = new ReproductorAAC();

const adaptadorAAC = new AdapterAAC(reproductorAAC);

reproductorMP3.reproducirArchivoMP3('cancion.mp3');
adaptadorAAC.reproducirArchivoAAC('cancion.AAC');