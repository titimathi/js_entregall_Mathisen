const carreras = [
    {
        id: 1,
        nombre: "New Balance MDQ",
        distancia: "21k",
        lugar: "Mar del Plata ",
        precio: 10000,
        img: "./img/carreras/1.jpg",
    },
    {
        id: 2,
        nombre: "New Balance Trail  ",
        distancia: "30",
        lugar: "Tandil",
        precio: 25000,
        img: "./img/carreras/2.webp",
    },
    {
        id: 3,
        nombre: "Circuito de las Estaciones",
        distancia: "6k",
        lugar: "Vicente Lopez",
        precio: 6000,
        img: "./img/carreras/4.webp",
    },
    {
        id: 4,
        nombre: "Circuito de las Estaciones",
        distancia: "10k",
        lugar: "Vicente Lopez",
        precio: 7500,
        img: "./img/carreras/4.webp"
    },
    {
        id: 5,
        nombre: "10k Axion 2023",
        distancia: "10k",
        lugar: "Campana",
        precio: 5000,
        img: "./img/carreras/5.jpg",
    },
    {
        id: 6,
        nombre: "Carrera Montagne 2023",
        distancia: "15k",
        lugar: "Palermo",
        precio: 4500,
        img: "./img/carreras/6.jpg",
    },
    {
        id: 7,
        nombre: "El Cruce Saucony 2023",
        distancia: "70k",
        lugar: "Bariloche",
        precio: 27600,
        img: "./img/carreras/7.jpg",
    },
    {
        id: 8,
        nombre: "Epic Patagonia 2024",
        distancia: "70k",
        lugar: "Villa la Angostura",
        precio: 84750,
        img: "./img/carreras/8.jpg",
    },
    {
        id: 9,
        nombre: "Epic Patagonia 2024",
        distancia: "50k",
        lugar: "Villa la Angostura",
        precio: 77550,
        img: "./img/carreras/8.jpg",
    },
    {
        id: 10,
        nombre: "Epic Patagonia 2024",
        distancia: "21k",
        lugar: "Villa la Angostura",
        precio: 44500,
        img: "./img/carreras/8.jpg",
    },
    {
        id: 11,
        nombre: "Adventure Race Tandil",
        distancia: "29k",
        lugar: "Tandil",
        precio: 24200,
        img: "./img/carreras/11.jpg",
    },
    {
        id: 12,
        nombre: "Raid Columbia 2024",
        distancia: "60k",
        lugar: "Salta",
        precio: 100100,
        img: "./img/carreras/12.jpg",
    }
];
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

carreras.forEach(item => {
    const boton = document.getElementById(`compras${item.id}`);
    boton.addEventListener("click",() => ¨{
        swal.fire({
            title: 'agregar al carrito',
            text: 'Compraste ${item.nombre}. ${producto.descripcion}',
            imageUrl: item.img;
            Im
        });

    });
});

    



