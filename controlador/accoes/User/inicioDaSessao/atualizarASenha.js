const bcript = require("bcryptjs")

const User = require("../bancoDeDados/UserModel")


function verificacaoDaSenha(senha){
    return {status: 1, motivo: "Correto"}
}


async function atualizarASenha (_id, novaSenha){

    const resultDaVerificao = verificacaoDaSenha(novaSenha)

    if(!resultDaVerificao.status){
        return resultDaVerificao
    }

    const hashedPassword = bcript.hash(novaSenha)
    const atualizadoNoBd = await User.findByIdAndUpdate({_id }, {senha: hashedPassword})

   if(atualizadoNoBd){
       return {status : 1, motivo: "Correto"}
   }else{
       return {status : 0, motivo: "Id não encontrado"}
   }
}

module.exports = atualizarASenha