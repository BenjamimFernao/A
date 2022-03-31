const {Schema} = require("mongoose")

const novoServico = require("../../operacoesComDados/CRUD/Create")
const atualizarServicos = require("../../operacoesComDados/CRUD/Update")
const deletarServicos = require("../../operacoesComDados/CRUD/Delete")
const lerServicos = require("../../operacoesComDados/CRUD/Read")

const esquemaServicos = new Schema({
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

esquema.statics = {
    
    novoServico,
    lerServicos,
    deletarServicos,
    atualizarServicos
}


module.exports = esquemaServicos