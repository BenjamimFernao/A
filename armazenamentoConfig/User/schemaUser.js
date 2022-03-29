const {Schema} = require("mongoose")
const bcript = require("bcryptjs")

const newPassword = require("./functions/newPassword")
const logar = require("./functions/logar")
const criarNovoUsuario = require("../../operacoesComDados/CRUD/Create")

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


userSchema.pre("save", async function (next){

    let senha = this.senha
    if(this.isModified("senha")){
        const hash = await bcript.hash(senha, 8 )
        this.senha = hash
        
    }

    next()
})

userSchema.statics = {
    newPassword,
    logar,
    criarNovoUsuario ,

}

module.exports = userSchema