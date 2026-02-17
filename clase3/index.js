// Promesas
// Promesas son funciones que devuelven valores y tienen estados
// Tienen 3 estados, "pendiente" => (pending) => estado por defecto
// Si se cumple => pasa al estado "completado" (fullfilled)
// Si se rechaza => pasa al estado "rechazado" (rejected)

// Ejemplo #1
/* const promesa = () => {
    return new Promise((resolve, rejected) => {
        //console.log("Estoy dentro de la promesa");

        const producto = {id:1, nombre:"Coca Cola", precio:4000}
        const productos = [
            {id:1, nombre:"Coca Cola", precio:4000},
            {id:2, nombre:"Coca Cola Zero", precio:3800}
        ]
        
        //resolve("Vamos al Cine"); // Forzando a que se cumpla la promesa (fullfilled)
        rejected("No, no puedo ir al Cine!"); // Forzando a que se rechace la promesa (rejected)
    })
}

console.log(promesa()); */


/* const cupon = (codigo) => {
    return new Promise((resolve, rejected) => {
        if (codigo == "CUPON10") {
            resolve("FELICITACIONES! TENES UN 10% DE DESCUENTO!")
        } else {
            rejected("ERROR! CUPON INVÁLIDO!")
        }
    })
}

cupon("CUPON10")
.then(resultado => { // Cuando la promesa se completa
    console.log("Promesa completada!");
    alert(resultado);
})
.catch(error => { // Cuando la promesa se rechaza
    console.log("Promesa rechazada!");
    alert(error);
}) */


// Fetch: Función que sirve acceder a contenidos de terceros (consumo de APIS)
// APIS DE PRUEBA:
// API #1: https://jsonplaceholder.typicode.com/
// API #2: https://fakestoreapi.com/

fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log(error);
})


// Emmet

// div#contenido => <div id="contenido"></div>

// button.boton => <button class="boton"></button>

/* table>tr>td*3 => <table>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </table> */

    /* ul>li*3 => <ul>
<li></li>
<li></li>
<li></li>
</ul> */

/* ol>li*3 => <ol>
<li></li>
<li></li>
<li></li>
</ol> */

/* p#parrafo.campo*2 =>
    <p id="parrafo" class="campo"></p>
    <p id="parrafo" class="campo"></p> */

