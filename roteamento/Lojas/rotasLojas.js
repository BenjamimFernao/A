const express = require("express")
const routerLojas = express.Router()
const cors = require("cors")

const Loja = require("../../armazenamentoConfig/loja/modeloLoja")

routerLojas.use(cors())

routerLojas.post("/novaLoja", (req, res)=>{

    const dados = {}

    const temp = {}
    res.send({temp})
})


module.exports = routerLojas