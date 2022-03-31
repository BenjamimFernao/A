const PubUser = require("../PubUserModel")

function atualizarPubUser(_id, novosDados){
    const resultado =  await PubUser.findByIdAndUpdate({_id}, novosDados)
}

module.exports = atualizarPubUser