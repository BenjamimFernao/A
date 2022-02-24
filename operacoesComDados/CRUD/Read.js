async function procurar(dados, proprietario){
    const result =  await proprietario.find(dados)
    return result
}

async function procurarId(id, proprietario){
    const result =  await proprietario.findById(id)
    return result
}





module.exports ={procurar, procurarId}