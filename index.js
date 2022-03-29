require("dotenv").config()

const express = require("express")
const cors = require("cors")
const app = express()

const routerPedidos = require("./roteamento/Pedidos/rotaPedido")
const routerUser = require("./roteamento/User/rotasUsers")
const routerLojas = require("./roteamento/Lojas/rotasLojas")
const routerProdutos = require("./roteamento/Produtos/rotasProdutos")
const routerServicos = require("./roteamento/Serviços/rotasServiços")


app.use(express.json({}))
app.use(express.urlencoded({extended:true}))

app.use(routerPedidos)
app.use(routerUser)
app.use(routerProdutos)
app.use(routerLojas)
app.use(routerServicos)

app.use(cors())


app.get("/", (req, res)=>{
    res.send("Benjamim Fernao")
})

const port = process.env.PORT | 3400
app.listen(port, ()=> console.log(`Servidor aberto na porta ${port}`))