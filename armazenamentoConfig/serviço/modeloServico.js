const mongoose = require("./conexao")
const SchemaServicos =  require("./schemaServicos")



const Servicos = mongoose.model("Servicos", SchemaServicos)


module.exports = Servicos