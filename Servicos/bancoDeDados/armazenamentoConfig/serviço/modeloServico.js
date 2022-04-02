const mongoose = require("./conexao")
const SchemaServicos =  require("./schemaServicos")



const Servicos = mongoose.model("PrestadorDeServicos", SchemaServicos)


module.exports = Servicos