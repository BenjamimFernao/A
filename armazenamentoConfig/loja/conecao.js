const mongoose = require("mongoose")

mongoose.createConnection("mongodb://localhost:27017/Lojas")


module.exports = {mongoose}