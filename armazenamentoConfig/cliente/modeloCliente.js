const {mongoose} = require("./conecao")
const {clienteSchema} = require("./schemaCliente")

const Cliente = mongoose.model("Cliente", clienteSchema)

module.exports = {Cliente}