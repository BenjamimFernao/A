const PubProduto = require("../PubModel")

function lerPubProduto(_id){
    const resultado =  await PubProduto.findOne({_id})

    return resultado
}


module.exports = lerPubProduto