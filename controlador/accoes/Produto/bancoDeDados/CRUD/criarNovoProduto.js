const Produto = require("../ProdutoModel")

function criarNovoProduto(user){
    const resultado =  await Produto.create(user)
}


module.exports = criarNovoProduto