const mongoose = require("./conecao")
const {Schema} = require("mongoose")

const pedidoSchema = new Schema({

    nomeDoCliente: {type:String},
    nomesDasLojas : {type:[String]},
    produtosELojas : {type:Map},
    produtoEPreco: {type:Map},
    data : {type:Date, default:Date.now()},

})

module.exports = {pedidoSchema}