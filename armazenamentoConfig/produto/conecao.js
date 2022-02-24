const mongoose = require("mongoose")

mongoose.createConnection("mongodb://localhost:27017/Produtos")


module.exports = {mongoose}