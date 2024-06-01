const elementoResposta = document.querySelector("#resposta");
const inputPergunta = document.querySelector("#inputPergunta");

const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Sem duvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não sao taes boas.",
  "Sim.",
  "Concentre-se e tente novamente.",
  "Sinais apontam que sim.",
  "Não.",
];


// Botão fazer pergunta 
function fazerPergunta() {
  
   elementoResposta.style.opacity = 1;
  
  if (inputPergunta.value == "") {
    alert("Digite sua pergunta");
    return;
  }

  const pergunta = `<div>${inputPergunta.value}</div>`;

  //gerar numero aleatorio
  const totalRespostas = respostas.length;
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas);

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio];

  // sumir resposta depois de 3s
  setTimeout(function () {
    elementoResposta.style.opacity = 0;
  }, 3000);
}
