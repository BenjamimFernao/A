const PubProduto = require("../PubModel")

function criarNovaPubProduto(user){
    const resultado =  await PubProduto.create(user)
}


module.exports = criarNovaPubProduto