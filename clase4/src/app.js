import express from "express";

/* Array de Productos */
const productos = [
    {id:1, nombre: "sanguche de milanesa", precio: 5500},
    {id:2, nombre: "sanguche de miga", precio: 1000},
    {id:3, nombre: "milanesa napolitana", precio: 6000},
    {id:4, nombre: "tortilla española", precio: 4500}
];

// Instanciar el Servidor
const app = express();

// Capturo los datos enviados en el Body de un Post
app.use(express.json()) //sin esto no capturo los datos by body


/* [METODO:GET] http://localhost:3000/?nombre=sanguche&apellido=guzman */
app.get('/', (req, res) => {
    //usando req.query
    const nombre = req.query.nombre
    const apellido = req.query.apellido
    res.send({mensaje: "los productos", data: productos, nombre: nombre, apellido: apellido});
});


/* [METODO:GET] http://localhost:3000/1||2||3||etc */
app.get('/:id', (req, res) => {
    //opcion 1: usando req.params
    const id = req.params.id
    const producto = productos.find(item => item.id == id);
    res.send(producto);
});


/* [METODO:POST] http://localhost:3000/ */
app.post('/', (req, res) => {
    //opcion 2: usando req.body
    const id = productos.length+1;
    const nombre = req.body.nombre;
    const precio = req.body.precio;
    const producto = {
        id,nombre,precio
    };
    productos.push(producto);
    res.send(producto);
});

app.listen('3000', () => {
    console.log("server andando pa");
});