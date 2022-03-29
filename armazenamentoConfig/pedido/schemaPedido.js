const mongoose = require("./conecao")
const {Schema} = require("mongoose")

const novoPedidos = require("../../operacoesComDados/CRUD/Create")
const atualizarPedidos = require("../../operacoesComDados/CRUD/Update")
const deletarPedidos = require("../../operacoesComDados/deletarProdutos")
const lerPedidos = require("../../operacoesComDados/CRUD/Read")

const pedidoEsquema = new Schema({

    nomeDoCliente: {type:String},
    nomesDasLojas : {type:[String]},
    produtosELojas : {type:Map},
    produtoEPreco: {type:Map},
    data : {type:Date, default:Date.now()},

})


pedidoEsquema.statics = {

    novoPedidos,
    atualizarPedidos,
    deletarPedidos,
    lerPedidos
}



module.exports = pedidoEsquema