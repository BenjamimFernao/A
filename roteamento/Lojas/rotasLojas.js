const express = require("express")
const routerLojas = express.Router()

const {criarLoja} = require("../../operacoesComDados/CRUD/Create")

routerLojas.post("/novaLoja", (req, res)=>{

    const dados = {}

    const temp = criarLoja(dados)
    res.send({temp})
})


module.exports = {routerLojas}