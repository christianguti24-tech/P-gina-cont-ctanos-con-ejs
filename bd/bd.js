import mongoose from "mongoose";

export async function conectarBD() {
    try {
        await mongoose.connect('mongodb+srv://christianguti24_db_user:Mondongo@cluster0.c2tskpm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log("✅ Conexión establecida con Mongo Atlas");
    } catch (err) {
        console.log("❌ Error de conexión: " + err);
    }
}


export default conectarBD;
