const {Schema} = require("mongoose")

const esquema = new Schema({
    nomeDoServico:{
        type: String,
        required: true,
        trim: true,
    },
    usuario:{type: Schema.Types.ObjectId, ref:"User" },
    dataDeNascimento:{
        type: Date,
        required: true
    },
    profissao:{
        type: String,
        required: true,
        trim: false,  
    },
    descricao:{
        type: String,
        required: true
    }
})


module.exports = esquema