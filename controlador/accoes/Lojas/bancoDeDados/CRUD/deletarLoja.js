const Loja = require("../LojaModel")

async function deletarLoja(_id){
    const resultado = await Loja.deleteOne({_id})
    return resultado
}


module.exports = deletarLoja