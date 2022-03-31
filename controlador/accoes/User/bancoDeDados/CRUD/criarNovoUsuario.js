const User = require("../UserModel")

function criarNovoUsuario(user){
    const resultado =  await User.create(user)
}


module.exports = criarNovoUsuario