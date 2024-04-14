// function geraDicas() {

//   let inputUser = parseInt(document.getElementById('input').value);
//   let divResultado = document.getElementById('resultado');
//   divResultado.style.display = 'block';
//   let resultado = '';

//   for (let i = 0; i < palpites.length; i++) {

//     if(palpites[i].numero == inputUser) {
//       resultado += '<p style="color:green" ><strong>Parabéns!</strong> Você acertou o número alvo! '+ alvo + ' </p>';
//     }else {

//       if (palpites[i].numero < inputUser) {
//         resultado += '<p>O número alvo é menor que '+ palpites[i].numero +' </p>';
//       } else {
//         resultado += '<p>O número alvo é maior que '+ palpites[i].numero +' </p>';
//       }
//     }
//   }

//   divResultado.innerHTML = resultado;
// }

function geraDicas() {
  let inputUser = parseInt(document.getElementById('input').value);
  let divResultado = document.getElementById('resultado');
  divResultado.style.display = 'block';
  let resultado = '';
  let tentativas = palpites.length;

  if (inputUser == alvo) {
    resultado += '<p style="color:green"><strong>Parabéns!</strong> Você acertou o número alvo! ' + alvo + '</p><br>';
    resultado += '<p style="color:green"><strong>Tentativas</strong> ' + tentativas + '</p>';
    let denovo = document.getElementById('denovo');
    let play = document.getElementById('play');
    denovo.style.display = 'block'
    play.style.display = 'none'
  } else {
    if (inputUser < alvo) {
      resultado += '<p>O número alvo é maior que ' + inputUser + '</p>';
    } else {
      resultado += '<p>O número alvo é menor que ' + inputUser + '</p>';
    }
  }
  divResultado.innerHTML = resultado;
}
