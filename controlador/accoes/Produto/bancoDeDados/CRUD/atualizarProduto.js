const Produto = require("../ProdutoModel")

function atualizarProduto(_id, novosDados){
    const resultado =  await Produto.findByIdAndUpdate({_id}, novosDados)
}

module.exports = atualizarProduto