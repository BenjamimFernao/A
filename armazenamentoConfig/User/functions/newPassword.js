const bcript = require("bcryptjs")

async function newPassword (id, newPassword){
    const user = await this.findOneAndUpdate({_id: id}, {senha : hashedPassword})
    return true
}

module.exports = newPassword