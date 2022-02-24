const express = require("express")
const router = express.Router()

const {criarLoja} = require("../operacoesComDados/CRUD/Create")

router.post("/novaLoja", (req, res)=>{

    const dados = {}

    const temp = criarLoja(dados)
    res.send({temp})
})