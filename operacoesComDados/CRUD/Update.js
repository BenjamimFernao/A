async  function atualizarUm(dados, novosDados, proprietario){
    const result = await proprietario.updateOne(dados, novosDados)
    return result
}


async  function atualizarMuitos(dados, novosDados, proprietario){
    const result = await proprietario.updateMany(dados, novosDados,  proprietario)
    return result
}



async  function atualizarPorId(id, novosDados, proprietario){
    const result = await proprietario.findByIdAndUpdate(id, novosDados)
    return result
}

module.exports = {atualizarMuitos, atualizarPorId, atualizarUm}