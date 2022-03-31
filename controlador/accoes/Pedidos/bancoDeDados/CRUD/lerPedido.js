
const Pedido = require("../PedidoModel")

function lerPedido(_id){
    const resultado =  await Pedido.findOne({_id})

    return resultado
}


module.exports = lerPedido