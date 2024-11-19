let sorteados = []
console.log(sorteados)

function adicionar() {
  let nomeAmigo = document.getElementById('nome-amigo').value;


  if (!isNaN(nomeAmigo) || nomeAmigo == '') {

    document.getElementById('modal_titulo').innerHTML = 'Informe um nome Válido!'
    document.getElementById('modal_titulo').className = 'modal-header text-primary text'

    //dialog de erro
    $('#informacao').modal('show')

    return
  }

  if (/[#@$%!&*_=+'"{}<>,.;:]/.test(nomeAmigo) || /[1234567890]/.test(nomeAmigo)) {

    document.getElementById('modal_titulo').innerHTML = `Informe Caracteres não especiais!!`
    document.getElementById('modal_titulo').className = 'modal-header text-primary text'

    //dialog de erro
    $('#informacao').modal('show')

    return
  }

  document.getElementById('nome-amigo').value = ''

  let lista = document.getElementById('lista-amigos');


  if (lista.textContent == '') {

    lista.textContent = nomeAmigo.toLowerCase()

    sorteados.push(nomeAmigo)
  } else {

    if (sorteados.includes(nomeAmigo)) {

      alert('Esse nome já foi adicionado')
      return
    }
    sorteados.push(nomeAmigo)

    lista.textContent = lista.textContent + ', ' + nomeAmigo.toLowerCase()
  }

}

function sortear() {

  if (sorteados.length < 4) {

    document.getElementById('modal_titulo').innerHTML = `Adicione Quatro Amigos!!`
    document.getElementById('modal_titulo').className = 'modal-header text-primary text'

    //dialog de erro
    $('#informacao').modal('show')

    return
  }

  embaralhar(sorteados)

  let sorteio = document.getElementById('lista-sorteio');

  for (let i = 0; i < sorteados.length; i++) {

    if (i == sorteados.length - 1) {
      sorteio.innerHTML = sorteio.innerHTML + sorteados[i] + ' --> ' + sorteados[0] + '<br>';
    } else {
      sorteio.innerHTML = sorteio.innerHTML + sorteados[i] + ' --> ' + sorteados[i + 1] + '<br>';
    }
  }
}





//* embaralhar array
function embaralhar(lista) {

  for (let indice = lista.length; indice; indice--) {

    const indiceAleatorio = Math.floor(Math.random() * indice);

    // atribuição via destructuring
    [lista[indice - 1], lista[indiceAleatorio]] =
      [lista[indiceAleatorio], lista[indice - 1]];
  }
}

function reiniciar() {
  sorteados = []

  document.getElementById('lista-amigos').innerHTML = ''
  document.getElementById('lista-sorteio').innerHTML = ''


}