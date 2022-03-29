const mongoose = require("mongoose")

mongoose.createConnection("mongodb://localhost:27017/Pedidos")


module.exports = mongoose;