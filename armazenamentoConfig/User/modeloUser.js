const {mongoose} = require("./conecao")
const userSchema = require("./schemaUser")

const User = mongoose.model("User", userSchema)

module.exports = {User}