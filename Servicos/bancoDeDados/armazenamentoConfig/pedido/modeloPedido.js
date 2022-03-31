const {mongoose} = require("./conecao")
const pedidoEsquema = require("./schemaPedido")

const Pedido = new mongoose.model("Pedido", pedidoEsquema)

module.exports = Pedido