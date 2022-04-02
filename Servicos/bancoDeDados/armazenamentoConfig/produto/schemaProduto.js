const mongoose = require("./conecao")
const {Schema} = require("mongoose")

const novoProduto = require("../../operacoesComDados/CRUD/Create")
const atualizarProduto = require("../../operacoesComDados/CRUD/Update")
const deletarProdutos = require("../../operacoesComDados//CRUD/Delete")
const lerProdutos = require("../../operacoesComDados/CRUD/Read")

const esquemaProduto = new Schema({
        nome:{type:String},
        tipoDeProduto:{type:String},
        preco: {type:Number},
        quantidadeEmStock: {type: Number},
        quantidadeVendida:{type:Number},
        lojaPertencente:{type: Schema.Types.ObjectId, ref:"Loja"},
        URLFotosDoProduto:[String]
}, {timestamps:true})

esquemaProduto.statics = {

        novoProduto,
        atualizarProduto,
        deletarProdutos,
        lerProdutos
        
}

module.exports = esquemaProduto