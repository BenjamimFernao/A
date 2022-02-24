const express = require("express")
const app = express()

const {routerPedidos} = require("./roteamento/rotaPedido")


app.use(routerPedidos)




app.get("/", (req, res)=>{
    res.send("Olá mundo")
})

const port = process.env.PORT | 3000
app.listen(port, ()=> console.log(`Servidor aberto na porta ${port}`))