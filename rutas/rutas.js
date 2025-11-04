import { Router } from "express";
import { contactanosNuevo, mostrarContactos } from "../bd/contactanosBD.js";

const router = Router();

// Página principal
router.get("/", (req, res) => {
  const nombre = "Pato Donald";
  const grupo = "DS01SM-24";
  const desayunos = ["Queso", "Nueces", "Cereal", "Mango"];
  res.render("index", { nombre, grupo, desayunos });
});

// Ruta de ejemplo
router.get("/abc/:nombre", (req, res) => {
  const nombre = req.params.nombre;
  console.log(nombre);
  res.render("otro");
});

// Página de contacto
router.get("/contactanos", (req, res) => {
  res.render("contactanos");
});

// Enviar formulario de contacto
router.post("/contactanos", async (req, res) => {
  const { nombre, edad } = req.body;
  console.log(nombre, edad);
  await contactanosNuevo({ nombre, edad });
  res.redirect("/mostrarContactos");
});

// ✅ Mostrar contactos (solo una vez)
router.get("/mostrarContactos", async (req, res) => {
  const contactosMongo = await mostrarContactos();
  res.render("mostrarContactos", { contactosMongo });
});

// ✅ Usuarios
router.get("/usuarios", (req, res) => {
  res.render("usuarios");
});

export default router;
