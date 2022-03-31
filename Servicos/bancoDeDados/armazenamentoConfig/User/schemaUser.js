const {Schema} = require("mongoose")
const bcript = require("bcryptjs")

const userSchema = new Schema({
    nome:{
            type:String,
            trim:false,
            default: ""
        },
    sobrenome: {
                type:String,
                 trim:false,
                 default: ""
                },
    telefone: {
                type:String,
                trim:false
            },
    dataDeNascimento: {
                type:Date,
                trim:false,
                default : new Date(20,20,20)
            },
    preferencias : {
                type: [String],
                trim:false,
                default: [""]
            },
    email:{
        type: String,
        trim: true,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    sessionId:{
        type: Number,
        default: ""
    }

}, {timestamps:true})




module.exports = userSchema