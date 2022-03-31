const Pedido = require("../PedidoModel")

function criarNovoPedido(user){
    const resultado =  await Pedido.create(user)
}


module.exports = criarNovoPedido