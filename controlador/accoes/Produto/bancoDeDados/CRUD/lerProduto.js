const Produto = require("../ProdutoModel")

function lerProduto(_id){
    const resultado =  await Produto.findOne({_id})

    return resultado
}


module.exports = lerProduto