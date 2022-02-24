async function criarProp(dados, proprietario){

    const novoProp =  await proprietario.create(dados)
    return novoProp
    
    }


module.exports = {criarProp}