const express = require("express")
const router = express.Router()

const {criarCliente} = require("../operacoesComDados/CRUD/Create")

router.post("/novoCliente", (req, res)=>{

    const dados = {}

    const temp = criarCliente(dados)
    res.send({temp})
})