const nameInput = document.querySelector('#name');
const paragrafo = document.getElementById('greetings');


const mensagemOla = () =>{
  const nome = nameInput.value;
  paragrafo.innerHTML = `Olá, ${nome}!`
}