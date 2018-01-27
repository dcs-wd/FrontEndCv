var form = document.getElementsByName("contacto")[0];

var nombreInput = document.getElementById("nombre");
var apellidosInput = document.getElementById("apellidos");
var emailInput = document.getElementById("email");
var ejercitoInput = document.getElementById("ejercito");
var fechaInput = document.getElementById("fecha");
var submitButton = document.getElementById("enviar");

var misionInput = {
  misions1: document.getElementById("tipo_mision_1"),
  misions2: document.getElementById("tipo_mision_2"),
  misions3: document.getElementById("tipo_mision_3")
};

form.addEventListener("submit", function(event) {
  if (nombreInput.checkValidity() === false) {
    alert("Tienes que escribir tu nombre");
    nombreInput.focus();
    event.preventDefault();
    return false;
  }

  if (apellidosInput.checkValidity() === false) {
    alert("Tienes que escribir tu apellidos");
    apellidosInput.focus();
    event.preventDefault();
    return false;
  }

  var regex = /[A-Za-z0-9\.\+]+@[A-Za-z0-9]+\.[A-Za-z0-9\.]+/;
  var resultEmailValidation = regex.test(emailInput.value);

  if (resultEmailValidation === false) {
    alert("Tienes que escribir un email correcto");
    emailInput.focus();
    event.preventDefault();
    return false;
  }

  if (misionInput.misions1.checkValidity() === false) {
    alert("Tienes que seleccionar el tipo de mision");
    event.preventDefault();
    return false;
  }

  if (ejercitoInput.checkValidity() === false) {
    alert("Tienes que seleccionar tamaño del ejercito");
    ejercitoInput.focus();
    event.preventDefault();
    return false;
  }

  submitButton.setAttribute("disabled", "");
  event.preventDefault();

  setTimeout(function() {
    form.reset();
    sendNotification("Formulario recibido", "Gracias por participar");
    submitButton.removeAttribute("disabled");
  }, 1000);
});
