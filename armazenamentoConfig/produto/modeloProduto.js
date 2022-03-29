const {mongoose} = require("./conecao")
const produtoEsquema = require("./schemaProduto")

const Produto = new mongoose.model("Produto", produtoEsquema)

module.exports = Produto