const Servico = require("../ServicoModel")

async function deletarServico(_id){
    const resultado = await Servico.deleteOne({_id})
    return resultado
}


module.exports = deletarServico