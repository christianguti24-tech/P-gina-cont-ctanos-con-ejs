import express from "express";
import ejs from "ejs";
import rutas from "./rutas/rutas.js";
import { conectarBD } from "./bd/bd.js";

const app = express();

// Conecta la base de datos
conectarBD();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", rutas);

// Página 404
app.use((req, res, next) => {
    res.status(404).render("404");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Servidor en http://localhost:" + PORT);
});
