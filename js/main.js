carreras.forEach(item => {
    let div = document.createElement("div");
    div.innerHTML = `
        <div>
        <h2>Id: ${item.id}</h2>
        <p>Distancia: ${item.distancia}</p>
        <p>Nombre: ${item.nombre}</p>
        <p>Lugar: ${item.lugar}</p>
        <b>$${item.precio}<b>
        </div>
        <img src="${item.img} "/>
        <hr/<
    `;
    document.body.append(div);
    
});

let Micuenta;
let usuarioStorage = sessionStorage.getItem("Micuenta");
if (usuarioStorage){
    Micuenta = usuarioStorage;
    alert(`Bienvenido a Event|races`);
}else {
    Micuenta = prompt("Ingrese su usuario");
    alert(`Bienvenido ${Micuenta}`);
    sessionStorage.setItem("Micuenta", Micuenta);
}

localStorage.setItem("carrito", JSON.stringify(carreras));

//boton para eliminar el carrito
let eliminar = document.getElementById("eliminar");
let carrito;

//traemos el carrito del storage
let carritoStorage = localStorage.getItem("carrito");

//si hay carrito lo seteamos si no lo inicializamos como arreglo vacío y mostramos mensaje cporrespondiente
if (carritoStorage) {
    carrito = JSON.parse(carritoStorage);
} else {
    carrito = [];
    let div = document.createElement("div");
    div.innerHTML = "Carrito Vacío";

    document.body.append(div);
}

carrito.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = `
    <h2>Id: ${item.id}</h2>
    <p>Nombre: ${item.nombre}</p>
    <b>$${item.precio}</b>
  `;

    document.body.append(div);
});

//agregamos el evento al boton para eliminar el carrito
eliminar.addEventListener("click", () => {
    localStorage.clear();
    alert("Carrito eliminado");
    location.reload();
});

// main.js

const cart = [];
let cuentaCarrito = document.getElementById("cuenta-carrito");

document.addEventListener("DOMContentLoaded", () => {
    // Attach event listeners to the "Agregar al Carrito" buttons
    for (let i = 1; i <= 12; i++) {
        const agregarButton = document.getElementById(`agregar${i}`);
        agregarButton.addEventListener("click", () => {
            addToCart(i);
        });
    }
});

function addToCart(eventId) {
    const event = carreras.find((item) => item.id === eventId);
    if (event) {
        cart.push(event);
        cuentaCarrito.textContent = cart.length;
        // Optionally, you can update the cart display or show a confirmation message here
    }
}

    



