const {Schema} = require("mongoose")

const lojaSchema = new Schema({

    nome:{type:String, trim:false},
    dataDeCriacao : {type:Date, trim:false},
    tipoDeProdutos:{type:[String], trim:false},
    localizacao:{type:String, trim:false}

})



module.exports = {lojaSchema}