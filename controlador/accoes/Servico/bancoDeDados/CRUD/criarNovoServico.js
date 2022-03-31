const Servico = require("../UserServico")

function criarNovoServico(user){
    const resultado =  await Servico.create(user)
}


module.exports = criarNovoServico