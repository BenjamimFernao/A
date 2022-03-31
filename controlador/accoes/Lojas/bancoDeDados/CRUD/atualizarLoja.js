const Loja = require("../LojaModel")

function atualizarLoja(_id, novosDados){
    const resultado =  await Loja.findByIdAndUpdate({_id}, novosDados)
}

module.exports = atualizarLoja