const {Schema, SchemaType} = require("mongoose")

const esquemaPub = new Schema({
    conteudoDoPost: {
        required: true,
        type:String
    },
    nomeDaMultimedia:{
        type:String
    },
    urlMultimedia:{
        type:String
    },
    PrestadorDeServico :{
        type: Schema.Types.ObjectId,
        ref:"PrestadorDeServico"
    }
})


module.exports = esquemaPub