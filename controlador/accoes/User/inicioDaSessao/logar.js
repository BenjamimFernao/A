// Color nas actions do controller!

const bcript = require("bcryptjs")
const User = require("../../../../Servicos/bancoDeDados/armazenamentoConfig/User/modeloUser")

async function logar (email, senha){
    
    const user = await  User.findOne({email})
   
    if(user){
            const eNossoUsuario = await bcript.compare(senha, user.senha)
            if(eNossoUsuario){
                // a analisar o metodo aleatorio
                const hashSession =  "SSDHIJHSA()="
                user.sessionId = hashSession
                await User.findOneAndUpdate({_id_ : user._id}, {sessionId: hashSession})
                return{
                    status : 1,
                    motivo:"Credencias corretos",
                    ...user
                }
                
    
            }else{
                return {motivo : "Senha incorreta", status: 0}
            }
    
        }else{
            return {motivo : "Email ou Senha incorreta", status: 0}
        }
    }
    
    

module.exports = logar