const mongoose = require("./conecao")
const {Schema} = require("mongoose")

const novoPedidos = require("../../operacoesComDados/CRUD/Create")
const atualizarPedidos = require("../../operacoesComDados/CRUD/Update")
const deletarPedidos = require("../../operacoesComDados/CRUD/Delete")
const lerPedidos = require("../../operacoesComDados/CRUD/Read")

const pedidoEsquema = new Schema({

    Cliente: {type:Schema.Types.ObjectId, ref:"Usuario"},
    Lojas : {type:[String]},
    Produtos : {type:[String]},
    LojaEProdutos : {type:Map},
    MensagemAdicional : String,
    data : {type:Date, default:Date.now()},
  

}, {timestamps: true})


pedidoEsquema.statics = {

    novoPedidos,
    atualizarPedidos,
    deletarPedidos,
    lerPedidos
}



module.exports = pedidoEsquema