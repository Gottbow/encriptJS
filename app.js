var llave = document.getElementById('llave');
var texto = document.getElementById('texto');
var resultado = document.getElementById('resultado');
var boton = document.getElementById('boton');

boton.addEventListener('click', function (ev) {
    var valorLlave = llave.value
    console.log(valorLlave);

    var valorTexto = texto.value
    console.log(valorTexto);

    encriptar('ABC', 3);
})
 setTimeout(function () {
    var contenedor = document.getElementById('contenedor_carga');

    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';

}, 2000) 

function encriptar(texto, llave = false) {

    var longitudTexto = texto.length
    console.log(longitudTexto);

    if (llave !== false && llave >= 1 && llave <= 10) {

        for (var i = 0; i < longitudTexto; i++) {

            var resultado = '';
            var cadena = texto.charCodeAt(i)
            resultado = resultado + (cadena + llave);
            console.log(resultado)
        }
    } else {
        alert('LLAVE INVÁLIDA')
        return
    }
}