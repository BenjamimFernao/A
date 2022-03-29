const express = require("express")
const routerPedidos = express.Router()

const {Pedido} = require("../../armazenamentoConfig/pedido/modeloPedido")
const {criarProp} = require("../../operacoesComDados/CRUD/Create")
const {procurar, procurarId} = require("../../operacoesComDados/CRUD/Read")
const {eliminarPorId, eliminarMuitos, eliminarUm} = require("../../operacoesComDados/CRUD/Delete")
const {atualizarMuitos, atualizarPorId, atualizarUm} = require("../../operacoesComDados/CRUD/Update")



routerPedidos.post("/novoPedido", (req, res)=>{

    const dados = {}

    const temp = criarProp(dados, Pedido)
    res.send({temp})
})


routerPedidos.get("/enviarPedido", (req, res)=>{
    
    const dados = {}
    const temp = procurar(dados, Pedido)

    res.send({temp})
})


routerPedidos.post("/deletePedido", (req, res)=>{

    const dados = {}
    const temp = eliminarPorId(dados, Pedido)

    res.send({temp})
})


routerPedidos.post("/atualizarPedido", (req, res)=>{

    const dados = {}
    const temp = atualizarPorId(dados, Pedido)

    res.send({temp})
})

module.exports = {routerPedidos}


