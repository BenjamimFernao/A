const User = require("../UserModel")

function lerUsuario(_id){
    const resultado =  await User.findOne({_id})

    return resultado
}


module.exports = lerUsuario