const Pedido = require("../PedidoModel")

async function deletarPedido(_id){
    const resultado = await Pedido.deleteOne({_id})
    return resultado
}


module.exports = deletarPedido