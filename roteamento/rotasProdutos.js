const express = require("express")
const router = express.Router()

const {criarProduto} = require("../operacoesComDados/CRUD/Create")

router.post("/novoProduto", (req, res)=>{

    const dados = {}

    const temp = criarProduto(dados)
    res.send({temp})
})