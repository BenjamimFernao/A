const routerServicos = require("express").Router()
const cors = require("cors")

const Servicos = require("../../armazenamentoConfig/serviço/modeloServico")


routerServicos.use(cors())





routerServicos.post("/", (req, res)=>{

    res.send({nome: "ben"})
})


module.exports = routerServicos