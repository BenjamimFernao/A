const express = require("express")
const routerProdutos = express.Router()
const cors = require("cors")

const produto = require("../../armazenamentoConfig/produto/modeloProduto")

const multer = require("multer")

const upload = multer({dest: __dirname + "/up"})

routerProdutos.use(cors())

routerProdutos.post("/novoProduto", (req, res)=>{

    const {nome, preco} = req.body


    const dados = {nome, preco}

    const temp = {}
    res.send({temp})
})

routerProdutos.post("/adicionarFotoDoProduto",upload.single("produto"), (req, res)=>{
    res.send("ok")
})





module.exports = routerProdutos