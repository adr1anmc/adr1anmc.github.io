var zFondos150 = ["url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzlTQ003jK64TvCgrCaD3ABeG5U5E_kMum-A&usqp=CAU')","url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYPCp3UF6vSKtoxaiQhJnC_ZXzYYsah4-Q&usqp=CAU')","url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtxhYsw6qLHuk2hTlIZnBdkpHOCRx7JmkvNw&usqp=CAU')","url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI2tjNlfFWSb-gCOzEsqraoRMHXRjVUqClvg&usqp=CAU')"];
var zFondos600 = ["url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzlTQ003jK64TvCgrCaD3ABeG5U5E_kMum-A&usqp=CAU')","url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYPCp3UF6vSKtoxaiQhJnC_ZXzYYsah4-Q&usqp=CAU')","url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtxhYsw6qLHuk2hTlIZnBdkpHOCRx7JmkvNw&usqp=CAU')","url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI2tjNlfFWSb-gCOzEsqraoRMHXRjVUqClvg&usqp=CAU')"];

var imagenPrincipal = document.querySelectorAll(".imagen-principal")[0];
var secundario = document.querySelectorAll('[class *= "secundario-"]');

imagenPrincipal.style.backgroundImage =zFondos600[0];
secundario[0].style.backgroundImage =zFondos150[0];
secundario[1].style.backgroundImage =zFondos150[1];
secundario[2].style.backgroundImage =zFondos150[2];
secundario[3].style.backgroundImage =zFondos150[3];

secundario[0].addEventListener("mouseover",accion0);
secundario[1].addEventListener("mouseover",accion1);
secundario[2].addEventListener("mouseover",accion2);
secundario[3].addEventListener("mouseover",accion3);

function accion0(){imagenPrincipal.style.backgroundImage =zFondos600[0];}
function accion1(){imagenPrincipal.style.backgroundImage =zFondos600[1];}
function accion2(){imagenPrincipal.style.backgroundImage =zFondos600[2];}
function accion3(){imagenPrincipal.style.backgroundImage =zFondos600[3];}

function validarCorreo(correo){
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var valido = expReg.test(correo);

    if(valido == true){
        window.alert("Gracias por suscribirte!");
    } else{
        window.alert("El correo ingresado no es valido.");
    }
}