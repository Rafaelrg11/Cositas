const usuario = document.getElementById('username');
const contraseña = document.getElementById('password');
const button = document.getElementById('loginButton');
const admins = [
    {
        usuario: "admin",
        contraseña: "admin"
    }, {
        usuario: "admin2",
        contraseña: "admin2"
    }
];

button.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        usuario: usuario.value,
        contraseña: contraseña.value
    }
    console.log(data)
    let esAdmin = validAdministrator(data);
    if (esAdmin) {
        location.href = "home.html"
    }
    console.log(esAdmin)
})

function validAdministrator(data) {

    let esAdmin = false

    admins.forEach(admin => {
        admin.usuario
        admin.contraseña
        if (data.usuario == admin.usuario && data.contraseña == admin.contraseña) {
            esAdmin = true
        }
        console.log(admin)
    });
    return esAdmin
}


