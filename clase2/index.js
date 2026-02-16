// Repaso de funciones
// Opción #1 => utilizando la palabra reservada function
/* function saludar(nombre, apellido) {
    console.log("Hola, " + nombre + " " + apellido);
} */

// Opción #2 => función anónima (no lleva nombre)
/* const saludar = function(nombre, apellido) {
    console.log("Hola, " + nombre + " " + apellido);
} */

// Opción #3 => función flecha o arrow function (versión simplificada)
/* const saludar = (nombre, apellido) => {
    console.log("Hola, " + nombre + " " + apellido);
}

saludar("Joaquin", "Guzman"); */


// 3 Formas de asginar una función a un elemento HTML
const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
console.log(boton1);
boton1.title = "hola, me llamo Joaquin!"
boton2.title = "Hola, hoy es lunes!"


// Opción #1 => mediante el Evento addEventListener
boton1.innerHTML = "Mostrar Mensaje" // Propiedad (se asignan valores)

// Defino directamente la función anónima
/* boton1.addEventListener("click", function() { // Método (se ejecutan con paréntesis y posiblemente hay que pasar parámetros)
    alert("Hola a Todos!");
});  */

// Defino directamente la función flecha en el Evento Click
/* boton1.addEventListener("click", () => { // Método (se ejecutan con paréntesis y posiblemente hay que pasar parámetros)
    alert("Hola a Todos!");
}); */

// Defino la función en una constante y la asigno en el evento Click
/* const saludar = () => { // Método (se ejecutan con paréntesis y posiblemente hay que pasar parámetros)
    alert("Hola a Todos!");
}

boton1.addEventListener("click", saludar);
boton2.addEventListener("click", saludar); */


// Opción #2 => utilizando la propiedad onclick
// Defino directamente la función anónima
/* boton1.onclick = function() { // Método (se ejecutan con paréntesis y posiblemente hay que pasar parámetros)
    alert("Hola a Todos!");
};  */

// Defino directamente la función flecha en el Evento Click
/* boton1.onclick = () => { // Método (se ejecutan con paréntesis y posiblemente hay que pasar parámetros)
    alert("Hola a Todos!");
}; */

// Defino la función en una constante y la asigno en el evento Click
const saludar = () => { // Método (se ejecutan con paréntesis y posiblemente hay que pasar parámetros)
    alert("Hello World!");
}

/* boton1.onclick = saludar;
boton2.onclick = saludar; */


// Repaso de Objetos y Arrays
// Objetos (tiene clave y valor, y se definen con llaves)
/* const producto = {id:1, nombre:"Coca Cola", precio:4000};
console.log(producto);
console.log(producto.nombre); // Acceder a la propiedad
producto.precio = 5000; // Modificar el valor de la propiedad
console.log(producto); */

// Arrays (tienen posiciones, comienzan de la posicion 0, y son independientes; se definen con corchetes)
const nombres = ["Juan", "Maria", "Joaquin"];
console.log(nombres);
console.log(nombres[0]);

// Arrays de Objetos
const productos = [
    {id:1, nombre:"Coca Cola", precio:4000},
    {id:2, nombre:"Coca Cola Zero", precio:3900},
    {id:3, name:"Pepsi", price:3900},
    {id:4, nombre:"Pepsi Max", precio:3800},
    "Pepsi Zero"
]
console.log(productos);
productos[3].precio = 3500;
console.log(productos[1].nombre + " $" + productos[1].precio);
console.log(productos[2].name + " $" + productos[2].price);
console.log(productos[4].nombre + " $" + productos[4].precio); // acá falla porque es un string, no es un objeto


/* localStorage.setItem("nombre", "Joaquin") // Crear localStorage
console.log(localStorage.getItem("nombre")) // Recuperar localStorage */

// Defino un objeto
const producto = {id:1, nombre:"Coca Cola", precio:4000};
//localStorage.setItem("producto", producto); // NO FUNCIONA => Guarda el objeto en la localStorage como [Object:Object] 
localStorage.setItem("producto", JSON.stringify(producto)); // FUNCIONA => Guarda el objeto en formato JSON

//const productoLS = localStorage.getItem("producto"); // NO FUNCIONA => Porque accedo al valor de la localStorage como un String
const productoLS = JSON.parse(localStorage.getItem("producto")); // FUNCIONA => Convierto el valor de la localStorage como un Objeto
console.log(productoLS);
console.log(productoLS.nombre);


