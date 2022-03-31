const PubUser = require("../PubUserModel")

function criarNovaPubUser(user){
    const resultado =  await PubUser.create(user)
}


module.exports = criarNovaPubUser