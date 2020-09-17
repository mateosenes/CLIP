var intentos = 4;
var correcto = "gato"
var confirmar = document.getElementById("confirmar");
var cerrar = document.getElementById("cerrar");
var notifi = document.getElementById("notifi");
var p = document.getElementById("contador");
var help = document.getElementById("help")
var finish = false;
p.innerHTML = intentos;

function quiz() {
    var respuesta = document.getElementById("inputquiz")
    
    if (respuesta.value == correcto) {
        notifi.style.color = "green";
        notifi.innerHTML = '<div class="alert alert-success" role="alert"> Felicidades adivinaste!! </div>';
        finish = true;
        confirmar.style.display = "none";
        cerrar.style.display = "block";
    } else if (intentos == 1 ) {
        notifi.style.color = "orange";
        notifi.innerHTML = '<div class="alert alert-warning" role="alert"> Agotaste el numero de intentos!! </div>';
        confirmar.style.display = "none";
        cerrar.style.display = "block";
        finish = true;
        p.innerHTML = 0;
    } else {
        notifi.style.color = "red";
        notifi.innerHTML = '<div class="alert alert-danger" role="alert"> Respuesta incorrecta, intente de nuevo </div>';
        intentos--;
        p.innerHTML = intentos;

    };
    console.log(intentos);
    console.log(respuesta.value);

    if (intentos == 3) {
        help.style.display = "flex";
        help.onclick = function() {
            alert("Si preguntas mi nombre, segunda letra anda siempre ambulante");
        }
    } else if (intentos == 2) {
        help.style.display = "flex";
        help.onclick = function() {
            alert("...La tercera y la cuarta se hallarán en total");
        }
    } 
    
    else {
        help.style.display = "none";
    } 
    

}

confirmar.onclick = function () { quiz() };
cerrar.onclick = function () {
    $('#modalquiz').modal("hide");
    if (finish == true ) {
        intentos = 4;
        notifi.innerHTML = "";
        document.getElementById("inputquiz").value = "";
        cerrar.style.display = "none";
        confirmar.style.display = "block";
        p.innerHTML = intentos;
    }
}

"¿Qué animal de buen olfato, rebuscador dentro de casa, rincón por rincón repasa y lame, si pilla, un plato."