document.addEventListener("DOMContentLoaded", function () {

    const galeriaImagenes = document.getElementById("galeria-imagenes");
    const imagenPrincipal = document.getElementById("imagenPrincipal");
    const contenedorMiniaturas = document.getElementById("contenedorMiniaturas");
    const botonAnterior = document.getElementById("botonAnterior");
    const botonSiguiente = document.getElementById("botonSiguiente");

    const imagenes = ["img/lobo.jpg", "img/lobo2.jpg", "img/lobo3.jpg", "img/lobo4.jpg", "img/lobo5.jpg"];

    let imagenActual = 0; 

    function actualizarImagen() {
        imagenPrincipal.src = imagenes[imagenActual];
    }

    function clicMiniatura(index) {
        imagenActual = index;
        actualizarImagen();
    }

    function clicAnterior() {
        if (imagenActual > 0) {
            imagenActual--;
        } else {
            imagenActual = imagenes.length - 1;
        }
        actualizarImagen();
    }

    function clicSiguiente() {
        if (imagenActual < imagenes.length - 1) {
            imagenActual++;
        } else {
            imagenActual = 0;
        }
        actualizarImagen();
    }

    contenedorMiniaturas.addEventListener("click", function (event) {
        if (event.target.tagName === "IMG") {
            clicMiniatura(Array.from(contenedorMiniaturas.children).indexOf(event.target));
        }
    });

    botonAnterior.addEventListener("click", clicAnterior);
    botonSiguiente.addEventListener("click", clicSiguiente);
    actualizarImagen();
});
