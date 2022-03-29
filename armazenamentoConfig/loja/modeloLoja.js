const {mongoose} = require("./conecao")
const lojaEsquema = require("./schemaloja")

const Loja = new mongoose.model("Loja", lojaEsquema)

module.exports = Loja