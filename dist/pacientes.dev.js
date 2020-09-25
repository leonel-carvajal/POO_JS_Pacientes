"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//Clase paciente
var Pacientes = function Pacientes() {
  var nombre = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var apellido = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var edad = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var fecha_nac = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var diagnostico = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
  var tratamiento = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";

  _classCallCheck(this, Pacientes);

  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.fecha_nac = fecha_nac;
  this.diagnostico = diagnostico;
  this.tratamiento = tratamiento;
}; //clase interfaz


var UI =
/*#__PURE__*/
function () {
  function UI() {
    _classCallCheck(this, UI);
  }

  _createClass(UI, [{
    key: "addPaciente",
    value: function addPaciente(paciente) {
      var pacientList = document.getElementById('pacient-list');
      var elemento = document.createElement('div');
      elemento.innerHTML = "\n        <div class=\"card text-left mb-4\" id=\"paciente\">\n            <div class=\"card-body bg-dark text-white\" id=\"paciente-cuerpo\"> \n                <strong>Nombre</strong>:".concat(paciente.nombre, "\n                <strong>Apellido</strong>:").concat(paciente.apellido, "\n                <strong>Edad</strong>:").concat(paciente.edad, "\n                <strong>Fecha Nacimiento</strong>:").concat(paciente.fecha, "\n                <strong>Tratamiento</strong>:").concat(paciente.tratamiento, "\n                <strong>Diagnostico</strong>:").concat(paciente.diagnostico, "\n                <a href=\"#\" class=\"btn btn-danger\" name=\"eliminar\">Eliminar<a>\n            </div>\n        </div>    \n        ");
      pacientList.appendChild(elemento);
    }
  }, {
    key: "resetForm",
    value: function resetForm() {
      var textos = document.querySelectorAll('input');
      var Arreglo = Array.from(textos);
      Arreglo[0].value = "";
      Arreglo[1].value = "";
      Arreglo[2].value = "";
      Arreglo[3].value = "";
      Arreglo[4].value = "";
      Arreglo[5].value = "";
    }
  }, {
    key: "deletePaciente",
    value: function deletePaciente(elemento) {
      if (elemento.name === 'eliminar') {
        elemento.parentElement.parentElement.parentElement.remove();
        this.showMessage('Paciente eliminado satisfactoriamente', 'info');
      }
    }
  }, {
    key: "showMessage",
    value: function showMessage(mensaje, CSSclase) {
      var div = document.createElement('div');
      div.className = "alert alert-".concat(CSSclase, " mt-1 text-center");
      div.appendChild(document.createTextNode(mensaje));
      var container = document.querySelector('.container');
      var app = document.querySelector('#app');
      container.insertBefore(div, app);
      setTimeout(function () {
        document.querySelector('.alert').remove();
      }, 2000);
    }
  }]);

  return UI;
}(); //Eventos


document.getElementById('pacient_form').addEventListener('submit', function (e) {
  var nombre = document.getElementById('name').value;
  var apellido = document.getElementById('apellido').value;
  var edad = document.getElementById('age').value;
  var fecha = document.getElementById('fecha_nac').value;
  var diagnostico = document.getElementById('diagnosis').value;
  var tratamiento = document.getElementById('tratamiento').value;
  var paciente = new Pacientes(nombre, apellido, edad, fecha, diagnostico, tratamiento);
  var ui = new UI();

  if (nombre == '' || apellido == '' || edad == '' || diagnostico == '' || tratamiento == '') {
    return ui.showMessage('Datos incompletos', 'danger');
  } else {
    ui.addPaciente(paciente);
    ui.resetForm();
    ui.showMessage('Paciente agregado Satisfactoriamente', 'success');
    e.preventDefault();
  }
});
document.getElementById('pacient-list').addEventListener('click', function (e) {
  var u = new UI();
  u.deletePaciente(e.target);
});