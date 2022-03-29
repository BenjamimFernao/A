async function criarProp(dados){

    const novoProp =  await this.create(dados)
    
    return novoProp
    
    }


module.exports = criarProp