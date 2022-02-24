const {mongoose} = require("./conecao")
const {produtoSchema} = require("./schemaProduto")

const Produto = new mongoose.model("Produto", produtoSchema)

module.exports = {Produto}