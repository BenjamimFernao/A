const esquemaPub = require("./esquemaPub")

const mongoose = require("./conexao")
const PublicacaoModel = mongoose.model("PublicacaoDoPrestadorDeServicos", esquemaPub)


module.exports = PublicacaoModel