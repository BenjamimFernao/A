const User = require("../UserModel")

function atualizarUsuario(_id, novosDados){
    const resultado =  await User.findByIdAndUpdate({_id}, novosDados)
}

module.exports = atualizarUsuario