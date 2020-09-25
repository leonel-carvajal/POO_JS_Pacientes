//Clase paciente
class Pacientes {
    constructor(nombre = "", apellido = "", edad = 0, fecha_nac = 0, diagnostico = "", tratamiento = "") {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.fecha_nac = fecha_nac;
        this.diagnostico = diagnostico;
        this.tratamiento = tratamiento;
    }
}
//clase interfaz
class UI {
    addPaciente(paciente) {
        const pacientList = document.getElementById('pacient-list')
        const elemento = document.createElement('div')
        elemento.innerHTML = `
        <div class="card text-left mb-4" id="paciente">
            <div class="card-body bg-dark text-white" id="paciente-cuerpo"> 
                <strong>Nombre</strong>:${paciente.nombre}
                <strong>Apellido</strong>:${paciente.apellido}
                <strong>Edad</strong>:${paciente.edad}
                <strong>Fecha Nacimiento</strong>:${paciente.fecha}
                <strong>Tratamiento</strong>:${paciente.tratamiento}
                <strong>Diagnostico</strong>:${paciente.diagnostico}
                <a href="#" class="btn btn-danger" name="eliminar">Eliminar<a>
            </div>
        </div>    
        `;
        pacientList.appendChild(elemento)

    }
    resetForm() {
        const textos = document.querySelectorAll('input')
        const Arreglo = Array.from(textos)
        Arreglo[0].value = ""
        Arreglo[1].value = ""
        Arreglo[2].value = ""
        Arreglo[3].value = ""
        Arreglo[4].value = ""
        Arreglo[5].value = ""

    }
    deletePaciente(elemento) {
        if (elemento.name === 'eliminar') {
            elemento.parentElement.parentElement.parentElement.remove()
            this.showMessage('Paciente eliminado satisfactoriamente', 'info')
        }


    }
    showMessage(mensaje, CSSclase) {
        const div = document.createElement('div')
        div.className = `alert alert-${CSSclase} mt-1 text-center`
        div.appendChild(document.createTextNode(mensaje))
        const container = document.querySelector('.container')
        const app = document.querySelector('#app')
        container.insertBefore(div, app);
        setTimeout(() => {
            document.querySelector('.alert').remove()
        }, 2000)
    }
}

//Eventos
document.getElementById('pacient_form').addEventListener('submit', (e) => {
    const nombre = document.getElementById('name').value
    const apellido = document.getElementById('apellido').value
    const edad = document.getElementById('age').value
    const fecha = document.getElementById('fecha_nac').value
    const diagnostico = document.getElementById('diagnosis').value
    const tratamiento = document.getElementById('tratamiento').value

    const paciente = new Pacientes(nombre, apellido, edad, fecha, diagnostico, tratamiento)
    const ui = new UI();

    if (nombre == '' || apellido == '' || edad == '' || diagnostico == '' || tratamiento == '') {
      return  ui.showMessage('Datos incompletos', 'danger')
    } else {
        ui.addPaciente(paciente)
        ui.resetForm()
        ui.showMessage('Paciente agregado Satisfactoriamente', 'success')
        e.preventDefault()

    }
})
document.getElementById('pacient-list').addEventListener('click', (e) => {
    const u = new UI()
    u.deletePaciente(e.target)
})