const Pedido = require("../PedidoModel")

function atualizarPedido(_id, novosDados){
    const resultado =  await Pedido.findByIdAndUpdate({_id}, novosDados)
}

module.exports = atualizarPedido