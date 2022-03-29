const mongoose = require("./conecao")
const {Schema} = require("mongoose")

const novoProduto = require("../../operacoesComDados/CRUD/Create")
const atualizarProduto = require("../../operacoesComDados/CRUD/Update")
const deletarProdutos = require("../../operacoesComDados/deletarProdutos")
const lerProdutos = require("../../operacoesComDados/CRUD/Read")

const esquemaProduto = new Schema({
        nome:{type:String},
        tipoDeProduto:{type:String},
        preco: {type:Number},
        quantidadeEmStock: {type: Number}
})

esquemaProduto.statics = {

        novoProduto,
        atualizarProduto,
        deletarProdutos,
        lerProdutos
        
}

module.exports = esquemaProduto