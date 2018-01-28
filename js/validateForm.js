// Funciones para mostrar Otros y contar palabras textarea
$(document).ready(function() {
  $('input[type="radio"]').click(function() {
    if ($(this).attr("id") === "LabelOthers") {
      $("#other").show();
    } else {
      $("#other").hide();
    }
  });

  $("#comtentario").on("keyup", function() {
    var words = this.value.match(/\S+/g).length;

    if (words > 150) {
      var trimmed = $(this)
        .val()
        .split(/\s+/, 150)
        .join(" ");
      $(this).val(trimmed + " ");
    } else {
      $("#display_count").text(words);
      $("#word_left").text(150 - words);
    }
  });
});

var form = document.getElementsByName("contact")[0];
var nombreInput = document.getElementById("nombre");
var apellidosInput = document.getElementById("apellidos");
var emailInput = document.getElementById("email");
var numberInput = document.getElementById("telf");
var radioInput = {
  radio1: document.getElementById("Label1"),
  radio1: document.getElementById("Label2"),
  radio1: document.getElementById("Label3"),
  radio1: document.getElementById("LabelOthers")
};
var submitButton = document.getElementById("enviar");

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

  var emailRegex = /[A-Za-z0-9\.\+]+@[A-Za-z0-9]+\.[A-Za-z0-9\.]+/;
  var resultEmailValidation = emailRegex.test(emailInput.value);

  if (resultEmailValidation === false) {
    alert("Tienes que escribir un email correcto");
    emailInput.focus();
    event.preventDefault();
    return false;
  }

  var numberRegex = /[0-9]+/;
  var resultNumberValidation = numberRegex.test(numberInput.value);

  if (resultNumberValidation === false && numberInput.length() === 9) {
    alert("Tienes que escribir un teléfono correcto");
    numberInput.focus();
    event.preventDefault();
    return false;
  }

  if (radioInput.radio1.checkValidity() === false) {
    alert("Tienes que seleccionar una opción");
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
