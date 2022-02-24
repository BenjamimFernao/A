const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/Clientes")


module.exports = {mongoose}