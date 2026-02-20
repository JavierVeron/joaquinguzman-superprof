import express from "express";

const app = express();
app.use(express.json());

let agentes = [{id: 1,nombre:"jett", rol:"duelista", nacionalidad:"corea del sur"}];

app.get("/api/valorant/", (req, res) => {
    res.json(agentes);
    console.log("agentes del valo");
});

app.get("/api/valorant/:id", (req, res) => {
    const id = req.params.id;
    const agente = agentes.find(item => item.id == id);
    res.send(agente);
});

/* {
    metodo post
  "nombre": "sage",
  "rol": "centinela",
  "nacionalidad": "china"
} */

app.post("/api/valorant/", (req, res) => {
    const id = agentes.length+1;
    const nombre = req.body.nombre;
    const rol = req.body.rol;
    const nacionalidad = req.body.nacionalidad;
    const agente = {
        id,nombre,nacionalidad,rol
    };
    agentes.push(agente);
    res.send(agente);
});

app.delete("/api/valorant/:id", (req, res) => {
    const id = req.params.id;
    agentes = agentes.filter(item => item.id != id);//filter lo que hace es filtrar los objetos del array que sean distintos del id que le pasa el usuario
    res.json({estado: "borrado"});
});

app.put("/api/valorant/:id", (req, res) => {
    const id = req.params.id;
    const agente = agentes.find(item => item.id == id);
    agente.nombre = req.body.nombre;
    agente.nacionalidad = req.body.nacionalidad;
    agente.rol = req.body.rol;
    res.send(agente);
});

app.listen('3000', () => {
    console.log("server prendido");
});