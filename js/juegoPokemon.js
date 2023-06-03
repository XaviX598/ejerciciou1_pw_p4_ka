var intento = 0;

const verificarOpcion = (nombreOpcion) => {
        if (nombreOpcion == 'excadrill') {
            document.getElementById('labelRespuesta').innerHTML = 'Felicitaciones, has seleccionado la opcion correcta';
            var imagen = document.getElementById('imagenNegro');
            imagen.src = "../img/imagenColor.jpg";
            var txtIni = document.getElementById('textoInicial');
            txtIni.classList.toggle('txtCorrecto');
            var botones = document.getElementsByClassName('btn_opciones');
            comprobar(intento);
            intento++;
            for (var i = 0; i < botones.length; i++) {
                botones[i].disabled = true;
            }
        } else {
            document.getElementById('labelRespuesta').innerHTML = 'Pokemon incorrecto, intentalo nuevamente';
            document.getElementById('imagenNegro').src = "../img/imagenColor.jpg";
            var txtIni = document.getElementById('textoInicial');
            txtIni.classList.toggle('txtIncorrecto');
            var botones = document.getElementsByClassName('btn_opciones');
            comprobar(intento);
            intento++;
        }
};

function comprobar(intento) {
    if (intento == 0) {
        document.getElementById('puntos').innerHTML = '5';
        document.getElementById('intento').innerHTML = '1';
        intento++;
    } else if (intento == 1) {
        document.getElementById('puntos').innerHTML = '3';
        document.getElementById('intento').innerHTML = '2';
        intento++;
    } else if (intento == 2) {
        document.getElementById('puntos').innerHTML = '1';
        document.getElementById('intento').innerHTML = '2';
        intento++;
        reiniciar()
    }
}

function reiniciar() {
    location.reload();
}




