const PubProduto = require("../PubModel")

function atualizarPubProduto(_id, novosDados){
    const resultado =  await PubProduto.findByIdAndUpdate({_id}, novosDados)
}

module.exports = atualizarPubProduto