const perguntas = [
  {
    pergunta: "Qual o jogador brasileiro com mais gols na copa do mundo?.",
    opcao: [
      "1. Neymar JR",
      "2. 'Pelé'",
      "3. 'Messi'",
      "4. 'Ronaldo Fenômeno'"
    ],
    resposta: "1. Neymar JR",
  },
  {
    pergunta: "Qual o time em que Jude Bellingham estava antes do Real Madrid?.",
    opcao: [
      "1. Borussia Dortmund",
      "2. Barcelona",
      "3. Milan",
      "4. Bayern München",
    ],
    resposta: "1. Borussia Dortmund",
  },
  {
    pergunta: "Qual foi o primeiro time do Lionel Messi?.",
    opcao: [
      "1. Barcelona",
      "2. Barcelona C",
      "3. Newll's Old Boys",
      "4. PSG",
    ],
    resposta: "3. Newll's Old Boys",
  },
  {
    pergunta: "Quem foi o artilheiro da Champions League 2022 23?.",
    opcao: [
      "1. Mbappé",
      "2. Lionel Messi",
      "3. Halland",
      "4. Neymar JR",
    ],
    resposta: "3. Halland",
  },
  {
    pergunta:
      "Qual time ganhou mais Champions League na história?.",
    opcao: [
      "1. Bayern de Munique", 
      "2. Real Madrid", 
      "3. Milan", 
      "4. Liverpool"
    ],
    resposta: "2. Real Madrid",
  },
  {
    pergunta:
      "Quem é o artilheiro do FC Barcelona?",
    opcao: [
      "1. Luis Suárez",
      "2. Lionel Messi",
      "3. Rivaldo",
      "4. Neymar JR",
    ],
    resposta: "2. Lionel Messi",
  },
  {
    pergunta:
      "Qual jogador é apelidado de donatello",
    opcao: [
      "1. Kanté", 
      "2. De Bruyne", 
      "3. Halland", 
      "4. Mbappé",
    ],
    resposta: "4. Mbappé",
  },
];

let inicio = document.getElementById("inicio"),
  fim = document.getElementById("fim"),
  caixa = document.getElementById("caixa"),
  resultado = document.getElementById("resultado-text"),
  h2 = document.getElementById("pergunta-caixa"),
  pontuacao = 0,
  indice = 0,
  opcoes;

function esconder() {
  inicio.style.display = "none";
  caixa.style.display = "none";
}

function tabuleiro() {
  let perg = perguntas[indice];
  h2.innerHTML = `${perg.pergunta} (Pontuação atual: ${pontuacao})`;
  opcoes = perg.opcao;
  for (let i = 0; i < opcoes.length; i++) {
    document.getElementById("opcao" + i).innerHTML = opcoes[i];
  }
}

function correta(opcao) {
  return opcao.innerText === perguntas[indice].resposta;
}

document.getElementById("bt-inicio").addEventListener("click", () => {
  indice = 0;
  pontuacao = 0;
  esconder();
  caixa.style.display = "block";
  tabuleiro();
});

document.getElementById("opcoes").addEventListener("click", verificar);

function verificar(d) {
  const opcaoClicada = d.target;
  resultado.style.display = "block";

  if (correta(opcaoClicada)) {
    pontuacao++;
  }

  indice++;

  if (indice < perguntas.length) {
    tabuleiro();
  } else {
    fimQuiz();
  }
}

function tabuleiro() {
  let perg = perguntas[indice];
  h2.innerHTML = `${perg.pergunta} (Pontuação atual: <id="pontuacao-text">${pontuacao}</id=>)`;
  opcoes = perg.opcao;
  for (let i = 0; i < opcoes.length; i++) {
    document.getElementById("opcao" + i).innerHTML = opcoes[i];
  }
}

function verificar(d) {
  const opcaoClicada = d.target;
  resultado.style.display = "block";

  if (correta(opcaoClicada)) {
    pontuacao++;
    document.getElementById("pontuacao").innerText = pontuacao;
    document.getElementById(`Resposta correta! Pontuação atual: ${pontuacao}`);
  } else {
    document.getElementById(`Resposta incorreta. Pontuação atual: ${pontuacao}`);
  }

  indice++;

  if (indice < perguntas.length) {
    tabuleiro();
  } else {
    fimQuiz();
  }
}

function fimQuiz() {
  esconder();
  fim.style.display = "flex";
  resultado.innerHTML = `Sua pontuação é: ${pontuacao}`;

  chamaCard();
}


function chamaCard(){
  
  Swal.fire({
    title: "PARABÉNS🎉",
    text: "✨Você completou o nosso quiz✨",
    
    imageWidth: 280,
     imageHeight: 280,
     imageAlt: "Gif Mbappe",
     imageUrl: "https://media.tenor.com/cdtU93iZYs4AAAAM/neymar.gif",
    confirmButtonText: "Jogar Novamente",
  }).then((result) => {
    
    if (result.isConfirmed) {
      location.replace("quiz.html");
    }
   });
}





