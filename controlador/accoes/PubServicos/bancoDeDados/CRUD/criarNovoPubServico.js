const PubServicos = require("../PubModel")

function criarNovaPubServicos(user){
    const resultado =  await PubServicos.create(user)
}


module.exports = criarNovaPubServicos