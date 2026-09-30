// Saudações que o botão mostra, uma de cada vez.
// Para acrescentar outra, é só adicionar uma linha nesta lista.
const saudacoes = [
  { texto: "Olá, mundo!", idioma: "pt-BR" },
  { texto: "Hello, world!", idioma: "en" },
  { texto: "¡Hola, mundo!", idioma: "es" },
  { texto: "Ciao, mondo!", idioma: "it" },
  { texto: "Hallo, Welt!", idioma: "de" },
  { texto: "こんにちは、世界！", idioma: "ja" },
];

const titulo = document.getElementById("saudacao");
const botao = document.getElementById("botao-saudacao");
let atual = 0;

botao.addEventListener("click", () => {
  // Vai para a próxima saudação e, depois da última, volta para a primeira.
  atual = (atual + 1) % saudacoes.length;
  titulo.textContent = saudacoes[atual].texto;
  titulo.lang = saudacoes[atual].idioma;
});

// Mostra o ano atual no rodapé.
document.getElementById("ano").textContent = new Date().getFullYear();
