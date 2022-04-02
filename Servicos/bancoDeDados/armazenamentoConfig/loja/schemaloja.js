const {Schema} = require("mongoose")


const novoLojas = require("../../operacoesComDados/CRUD/Create")
const atualizarLojas = require("../../operacoesComDados/CRUD/Update")
const deletarLojas = require("../../operacoesComDados/CRUD/Delete")
const lerLojas = require("../../operacoesComDados/CRUD/Read")

const lojaSchema = new Schema({

    nome:{type:String, trim:false},
    dataDeCriacao : {type:Date, default: Date.now()},
    tipoDeProdutos:{type:[String], trim:false},
    localizacao:{type:String, trim:false}, 
    proprietario : {type:Schema.Types.ObjectId, ref: "Usuario"},
    URLFotoDePerfil:String


}, {timestamps:true})

lojaSchema.statics = {
    novoLojas,
    atualizarLojas, 
    deletarLojas,
    lerLojas
}



module.exports = lojaEsquema