const mongoose = require("mongoose")

mongoose.createConnection("mongodb://localhost:27017/Publicacoes")

module.exports = mongoose