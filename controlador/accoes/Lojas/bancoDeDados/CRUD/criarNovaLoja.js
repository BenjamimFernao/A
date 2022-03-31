const Loja = require("../LojaModel")

function criarNovaLoja(user){
    const resultado =  await Loja.create(user)
}


module.exports = criarNovaLoja