const PubUser = require("../PubUserModel")

async function deletarPubUser(_id){
    const resultado = await PubUser.deleteOne({_id})
    return resultado
}


module.exports = deletarPubUser