function enviarDenuncia(){
    let nombre = document.getElementById("nombreDenuncia").value;
    let grado = document.getElementById("gradoDenuncia").value;
    let grupo = document.getElementById("grupoDenuncia").value;
    let lugar = document.getElementById("lugar").value;
    let suceso = document.getElementById("suceso").value;

    if(nombre.length == 0 || grado.length == 0 || grupo.length == 0 || lugar.length == 0 || suceso.length == 0){
        window.alert("Alguno de los campos no ha sido llenado. Por favor llena todos los campos.");
    }else{window.alert("Se ha enviado tu denuncia, pronto resivirás una respuesta.")}
}