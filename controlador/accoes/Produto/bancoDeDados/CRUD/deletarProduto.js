const Produto = require("../ProdutoModel")

async function deletarProduto(_id){
    const resultado = await Produto.deleteOne({_id})
    return resultado
}


module.exports = deletarProduto