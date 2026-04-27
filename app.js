'use strict'

const getDadosCep = async function (cep) {
    let url = `https://brasilapi.com.br/api/cep/v1/${cep}`
    let response = await fetch(url)
    let dados = await response.json()

    return dados

}

const preencerFormulario = async function () {
    let nome = document.getElementById('nome').value
    let cep = document.getElementById('cep').value

    let dadosCep = await getDadosCep(cep)

    let endereco = document.getElementById('endereco').value = dadosCep.street
    let bairro = document.getElementById('bairro').value = dadosCep.neighborhood
    let cidade = document.getElementById('cidade').value = dadosCep.city
    let estado = document.getElementById('estado').value = dadosCep.state
    
    

}

document.getElementById('cep').addEventListener('focusout', preencerFormulario)