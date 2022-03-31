const PubUser = require("../PubUserModel")

function lerPubUser(_id){
    const resultado =  await PubUser.findOne({_id})

    return resultado
}


module.exports = lerPubUser