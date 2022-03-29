const express = require("express")
const routerProdutos = express.Router()

const {criarProduto} = require("../../operacoesComDados/CRUD/Create")

const multer = require("multer")

const upload = multer({dest: __dirname + "/up"})

routerProdutos.post("/novoProduto", (req, res)=>{

    const {nome, preco} = req.body


    const dados = {nome, preco}

    const temp = criarProduto(dados)
    res.send({temp})
})

routerProdutos.post("/adicionarFotoDoProduto",upload.single("produto"), (req, res)=>{
    res.send("ok")
})





module.exports = {routerProdutos}