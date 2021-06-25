window.onload = function() {
    var formulario = document.getElementById("formulario");
    // console.log("enviado formulario");
    function enviar(objeto){
        console.log("conectar base de datos")
        console.log(objeto);
        return enviarInformacionApi();
    }



    formulario.onsubmit(e) = function() {
        e.preventDefault();//para que no se comporte como siempre
        var nombre = document.getElementById("nombre");
        var apellido = document.getElementById("apellido");
        var calle = document.getElementById("calle");

var usuario = {"nombre": nombre.value, "apellido": apellido.value, "calle": calle.value};
enviar(usuario);
   
    }
};




