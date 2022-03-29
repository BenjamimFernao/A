const routerServicos = require("express").Router()

routerServicos.post("/", (req, res)=>{

    res.send({nome: "ben"})
})


module.exports = {routerServicos}