async  function eliminarUm(dados, proprietario){
    const result = await proprietario.deleteOne(dados)
    return result
}

async  function eliminarMuitos(dados, proprietario){
    const result = await proprietario.deleteMany(dados)
    return result
}


async  function eliminarPorId(id, proprietario){
    const result = await proprietario.findByIdAndDelete(id)
    return result
}


module.exports = {eliminarMuitos, eliminarUm, eliminarPorId}
