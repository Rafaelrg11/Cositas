let saveData = [];

let idForUpdate = 0;

function clear() {

    let nombre = document.getElementById('nombres').value = "";
    let apellido = document.getElementById('apellidos').value = "";
    let telefono = document.getElementById('telefono').value = "";
    let correo = document.getElementById('correo').value = "";
    let genero = document.getElementById('genero').value = ""
    jsonData()
}

function validacionDeDatos() {

    let nombre = document.getElementById('nombres');
    let apellido = document.getElementById('apellidos');
    let telefono = document.getElementById('telefono');
    let correo = document.getElementById('correo');
    let genero = document.getElementById('genero');

    let id = 1
    if (saveData.length !== 0)
        id = saveData[saveData.length - 1].id + 1

    let datos = { id, nombre: nombre.value, apellido: apellido.value, correo: correo.value, telefono: telefono.value, genero: genero.value };
    saveData.push(datos)
    mostrarDatosGuardados();
    clear()



}

function loadData(id) {

    console.log("hola soy el id => ", id);

    const index = saveData.findIndex((item) => item.id === id)

    const individualData = saveData[index];

    console.log(individualData);

    idForUpdate = id;

    document.getElementById('nombres').value = individualData.nombre;
    document.getElementById('apellidos').value = individualData.apellido;
    document.getElementById('telefono').value = individualData.telefono;
    document.getElementById('correo').value = individualData.correo;
    document.getElementById('genero').value = individualData.genero;
    viewButtonUpdate()

}

function mostrarDatosGuardados() {

    let dataTable = document.getElementById("tabla-data")

    let dataRow = ""

    for (let i = 0; i < saveData.length; i++) {
        dataRow += `
            <tr id="row-${saveData[i].id}">
                <td>${saveData[i].nombre}</td>
                <td>${saveData[i].apellido}</td>
                <td>${saveData[i].telefono}</td>
                <td>${saveData[i].correo}</td>
                <td>${saveData[i].genero}</td>
                <td>
                    <button onClick="loadData(${saveData[i].id})">Ver</button>
                </td>
            </tr>`

    }

    dataTable.innerHTML = dataRow;
    ViewButtonSaveAfterUpdate()

}

function updateData() {

    let nombre = document.getElementById('nombres');
    let apellido = document.getElementById('apellidos');
    let telefono = document.getElementById('telefono');
    let correo = document.getElementById('correo');
    let genero = document.getElementById('genero');
    let datos = { id: idForUpdate, nombre: nombre.value, apellido: apellido.value, correo: correo.value, telefono: telefono.value, genero: genero.value };
    const index = saveData.findIndex((item) => item.id === idForUpdate)
    saveData[index] = datos
    mostrarDatosGuardados();
    clear()
}

function deleteData() {

    let nombre = document.getElementById('nombres');
    let apellido = document.getElementById('apellidos');
    let telefono = document.getElementById('telefono');
    let correo = document.getElementById('correo');
    let genero = document.getElementById('genero');
    const index = saveData.findIndex((item) => item.id === idForUpdate)
    saveData.splice(index, 1)
    mostrarDatosGuardados()
    clear()

}

function viewButtonSave() {

    const saveGuardar = document.getElementById("guardar")
    const saveActualizar = document.getElementById("actualizar")
    const saveEliminar = document.getElementById("eliminar")

    saveGuardar.style.display = "block"
    saveActualizar.style.display = "none"
    saveEliminar.style.display = "none"

}

function viewButtonUpdate() {

    const saveGuardar = document.getElementById("guardar")
    const saveActualizar = document.getElementById("actualizar")
    const saveEliminar = document.getElementById("eliminar")

    saveGuardar.style.display = "none"
    saveActualizar.style.display = "block"
    saveEliminar.style.display = "block"

}

function ViewButtonSaveAfterUpdate() {

    const saveGuardar = document.getElementById("guardar")
    const saveActualizar = document.getElementById("actualizar")
    const saveEliminar = document.getElementById("eliminar")

    saveGuardar.style.display = "block"
    saveActualizar.style.display = "none"
    saveEliminar.style.display = "none"

}


function jsonData() {
    const saveDataJson = JSON.stringify(saveData);
    localStorage.setItem('dataJson', saveDataJson);
    preLoad()
}

function preLoad() {

    const arrayJson = JSON.parse(localStorage.getItem("dataJson"))
    console.log(arrayJson)
    saveData = arrayJson || [];
    mostrarDatosGuardados();
}

