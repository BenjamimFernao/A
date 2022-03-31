const usuarioAtualizarSenha = require("./accoes/User/inicioDaSessao/atualizarASenha")
const logar = require("./accoes/User/inicioDaSessao/logar")
const comparaHash = require("./middlewares/User/comparaHash")
const hashearSenha = require("./middlewares/User/hashDaSenha")

const {criarNovoUsuario, atualizarUsuario, deletarUsuario, lerUsuario} =  require("./accoes/User/bancoDeDados/CRUD/moduloCRUD")
const {criarNovaLoja, atualizarLoja, lerLoja, deletarLoja} = require("./accoes/Lojas/bancoDeDados/CRUD/moduloCRUD")
const {criarNovoServico, atualizarServico, lerServico, deletarServico} = require("./accoes/Servico/bancoDeDados/CRUD/moduloCRUD")
const {criarNovoPedido, atualizarPedido, lerPedido, deletarPedido} = require("./accoes/Pedidos/bancoDeDados/CRUD/moduloCRUD")
const {criarNovoProduto, lerProduto, atualizarProduto, deletarProduto} = require("./accoes/Produto/bancoDeDados/CRUD/moduloCRUD")
const {criarNovoPubProduto, deletarPubProduto, lerPubProduto, atualizarPubProduto} = require("./accoes/PubProduto/bancoDeDados/CRUD/moduloCRUD")
const {criarNovoPubUser, deletarPubUser, lerPubUser, atualizarPubUser} = require("./accoes/PubUser/bancoDeDados/CRUD/moduloCRUD")
const {criarNovoPubServico, deletarPubServico, lerPubServico, atualizarPubServico} = require("./accoes/PubServicos/bancoDeDados/CRUD/moduloCRUD")


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

    this.produto = {
        criarNovoProduto,
        atualizarProduto,
        deletarProduto,
        lerProduto

    }

    this.pubProduto = {
        criarNovoPubProduto,
        deletarPubProduto,
        atualizarPubProduto,
        lerPubProduto
    }

    this.pubUser = {
        criarNovoPubUser,
        deletarPubUser,
        lerPubUser,
        atualizarPubUser
    }

    this.pubServico = {
        criarNovoPubServico,
        deletarPubServico,
        atualizarPubServico,
        lerPubServico
        
    }
}

const singleController = new controller

module.exports = singleController