const PubServicos = require("../PubModel")

function atualizarPubServicos(_id, novosDados){
    const resultado =  await PubServicos.findByIdAndUpdate({_id}, novosDados)
}

module.exports = atualizarPubServicos