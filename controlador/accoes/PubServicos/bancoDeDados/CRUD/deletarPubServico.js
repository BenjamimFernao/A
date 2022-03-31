const PubServicos = require("../PubModel")

async function deletarPubServicos(_id){
    const resultado = await PubServicos.deleteOne({_id})
    return resultado
}


module.exports = deletarPubServicos