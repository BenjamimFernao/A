const usuarioAtualizarSenha = require("./accoes/User/inicioDaSessao/atualizarASenha")
const logar = require("./accoes/User/inicioDaSessao/logar")
const comparaHash = require("./middlewares/User/comparaHash")
const hashearSenha = require("./middlewares/User/hashDaSenha")

const {criarNovoUsuario, atualizarUsuario, deletarUsuario, lerUsuario} =  require("./accoes/User/bancoDeDados/CRUD/moduloCRUD")
const {criarNovaLoja, atualizarLoja, lerLoja, deletarLoja} = require("./accoes/Lojas/bancoDeDados/CRUD/moduloCRUD")
const {criarNovoServico, atualizarServico, lerServico, deletarServico} = require("./accoes/Servico/bancoDeDados/CRUD/moduloCRUD")
const {criarNovoPedido, atualizarPedido, lerPedido, deletarPedido} = require("./accoes/Pedidos/bancoDeDados/CRUD/moduloCRUD")

function controller(){
    this.user = {
        usuarioAtualizarSenha,
        logar,
        comparaHash,
        hashearSenha,

        criarNovoUsuario,
        atualizarUsuario,
        deletarUsuario,
        lerUsuario
    }


    this.loja = {
        criarNovaLoja,
        atualizarLoja,
        deletarLoja,
        lerLoja
    }

    this.servico = {
        criarNovoServico,
        atualizarServico,
        lerServico,
        deletarServico

    }

    this.pedido = {
        lerPedido,
        atualizarPedido,
        criarNovoPedido,
        deletarPedido
    }

    this.produto = {}
}

const singleController = new controller

module.exports = singleController