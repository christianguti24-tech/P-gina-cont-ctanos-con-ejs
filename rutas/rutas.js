import { Router } from "express";
const router = Router()

router.get("/", (req, res)=>{
    res.render("Index")
})

router.get("/contactanos", (req, res)=>{
    res.render("Contactanos")
})
export default router