const express = require("express")
const routerUser = express.Router()
const cors = require("cors")

const controlador = require("../../controlador/Controlador")


routerUser.use(cors())

routerUser.post("/novoUser", async (req, res)=>{


    const {email, senha, telefone} = req.body

    if(email == "" || senha == "" || telefone == ""){
        console.log("erro")
        res.send({status: 0})
    }else{
        const user = {email, senha, telefone}

        
        const temp = await User.criarNovoUsuario(user)
        console.log("ok")
        res.send({status : 1})
    
    }
    
})


routerUser.post("/loginUser", async (req, res)=>{
        if(req.body.email == "" || req.body.senha == ""){
            res.send({status:3})
        }else{
            const {email, senha} = req.body
            const resposta = await User.logar(email, senha)
            console.log(resposta.status)
            res.send(resposta)
        }
        
})


routerUser.post("/novaSenha", async (req, res)=>{

    const {id, novaSenha} = req.body
    const resposta = await controlador.user.usuarioAtualizarSenha(id, novaSenha)
    res.send(resposta)
})



module.exports = routerUser