const {mongoose} = require("./conecao")
const {lojaSchema} = require("./schemaloja")

const Loja = new mongoose.model("Loja", lojaSchema)

module.exports = {Loja}