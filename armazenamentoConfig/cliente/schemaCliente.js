
const {Schema} = require("mongoose")

const clienteSchema = new Schema({
    nome:{
            type:String,
            trim:false
        },
    sobrenome: {
                type:String,
                 trim:false
                },
    telefone: {
                type:Number,
                trim:false
            },
    dataDeNascimento: {
                type:Date,
                trim:false
            },
    preferencias : {
                type: [String],
                trim:false
            },

    restricaoOrcamentaria: {
                type:Number,
                trim:false
            }

})

module.exports = {clienteSchema}