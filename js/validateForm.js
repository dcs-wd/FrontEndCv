var form = document.getElementsByName("contacto")[0];

var nombreInput = document.getElementById("nombre");
var apellidosInput = document.getElementById("apellidos");
var emailInput = document.getElementById("email");
var ejercitoInput = document.getElementById("telf");
var fechaInput = document.getElementById("comtentario");
var submitButton = document.getElementById("enviar");

var radioInput = {
  radio1: document.getElementById("Label1"),
  radio1: document.getElementById("Label2"),
  radio1: document.getElementById("Label3"),
  radio1: document.getElementById("LabelOthers")
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
