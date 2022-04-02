const {mongoose} = require("./conecao")
const userSchema = require("./schemaUser")

const User = mongoose.model("Usuario", userSchema)

module.exports = User