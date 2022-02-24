const mongoose = require("./conecao")
const {Schema} = require("mongoose")

const produtoSchema = new Schema({
        nome:{type:String},
        tipoDeProduto:{type:String},
        preco: {type:Number},
        quantidadeEmStock: {type: Number}
})


module.exports = {produtoSchema}