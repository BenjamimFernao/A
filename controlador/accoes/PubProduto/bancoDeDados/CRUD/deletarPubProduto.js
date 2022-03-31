const PubProduto = require("../PubModel")

async function deletarPubProduto(_id){
    const resultado = await PubProduto.deleteOne({_id})
    return resultado
}


module.exports = deletarPubProduto