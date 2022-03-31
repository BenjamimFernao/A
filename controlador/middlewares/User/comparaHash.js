const bcript = require("bcryptjs")

function compararHashESenha(senha, hash){
    const resultado = await bcript.compare(senha, hash)

    return resultado
}

module.exports = compararHashESenha