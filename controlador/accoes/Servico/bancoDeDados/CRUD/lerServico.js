const Servico = require("../ServicoModel")

function lerServico(_id){
    const resultado =  await Servico.findOne({_id})

    return resultado
}


module.exports = lerServico