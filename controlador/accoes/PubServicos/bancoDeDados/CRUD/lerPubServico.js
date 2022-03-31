const PubServicos = require("../PubModel")

function lerPubServicos(_id){
    const resultado =  await PubServicos.findOne({_id})

    return resultado
}


module.exports = lerPubServicos