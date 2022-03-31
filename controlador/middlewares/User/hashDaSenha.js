const bcript = require("bcryptjs")

function hashDaSenha(senha){
    const hash = await bcript.hash(senha)

    return hash
}

module.exports = hashDaSenha