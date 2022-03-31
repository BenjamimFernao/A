const Loja = require("../UserModel")

function lerLoja(_id){
    const resultado =  await Loja.findOne({_id})

    return resultado
}


module.exports = lerLoja