const express = require("express")
const routerPedidos = express.Router()

const Pedido = require("../../armazenamentoConfig/pedido/modeloPedido")
const cors = require("cors")

routerPedidos.use(cors())

routerPedidos.post("/novoPedido", (req, res)=>{

    const dados = {}

    const temp = {}
    res.send({temp})
})


routerPedidos.get("/enviarPedido", (req, res)=>{
    
    const dados = {}
    const temp = {}

    res.send({temp})
})


routerPedidos.post("/deletePedido", (req, res)=>{

    const dados = {}
    const temp = {}

    res.send({temp})
})


routerPedidos.post("/atualizarPedido", (req, res)=>{

    const dados = {}
    const temp = {}

    res.send({temp})
})

module.exports = routerPedidos


