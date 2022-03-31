const User = require("../UserModel")

async function deletarConta(_id){
    const resultado = await User.deleteOne({_id})
    return resultado
}


module.exports = deletarConta