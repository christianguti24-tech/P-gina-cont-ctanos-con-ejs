import Contactanos from "../models/contactanos.js";

export async function contactanosNuevo({ nombre, edad }) {
  try {
    const contactanosObj = new Contactanos({ nombre, edad });
    const respuestaMongo = await contactanosObj.save();
    console.log("✅ Registro guardado en Mongo:", respuestaMongo);
  } catch (err) {
    console.log("❌ Error al guardar:", err);
  }
}

export async function mostrarContactos() {
  try {
    const contactosMongo = await Contactanos.find(); // obtenemos todos
    console.log("✅ Contactos obtenidos:", contactosMongo.length);
    return contactosMongo; // ⚠️ importante: devolver los datos
  } catch (err) {
    console.log("❌ Error al obtener contactos:", err);
    return [];
  }
}
