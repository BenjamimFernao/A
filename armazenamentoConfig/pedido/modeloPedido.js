const {mongoose} = require("./conecao")
const {pedidoSchema} = require("./schemaPedido")

const Pedido = new mongoose.model("Pedido", pedidoSchema)

module.exports = {Pedido}