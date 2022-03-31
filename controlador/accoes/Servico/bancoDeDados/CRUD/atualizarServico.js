const Servico = require("../ServicoModel")

function atualizarServico(_id, novosDados){
    const resultado =  await Servico.findByIdAndUpdate({_id}, novosDados)
}

module.exports = atualizarServico