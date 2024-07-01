const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: bulling 
        alternativa: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "pergunta 2",
        alternativas: [
            "Aternativa 1"
            "Alternativa 2"
        ]
    }
];
        
let atual = 0;
let perguntaAtual;

function mostrarPerguntas() {
    perguntaAtual = perguntas [atual];
    caixaPerguntas.TEXT_NODE = perguntaAtual.enunciado;
}
mostrarPergunta()
