const bcript = require("bcryptjs")

async function logar (email, senha){
    
    const user = await  this.findOne({email})
   
    if(user){
            const eNossoUsuario = await bcript.compare(senha, user.senha)
            if(eNossoUsuario){
                // a analisar o metodo aleatorio
                const hashSession =  "SSDHIJHSA()="
                this.sessionId = hashSession
                return{
                    status : 2,
                    hashSession,
                    ...user
                }
                
    
            }else{
                return {erro : "Senha incorreta", status: 1}
            }
    
        }else{
            return {erro : "Email ou Senha incorreta", status: 0}
        }
    }
    
    

module.exports = logar