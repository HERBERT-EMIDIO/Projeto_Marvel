/* 
Objetivo - 1 --> Seleção dos Personagens
----colocar classe selecionada
----retirar a classe anteriormente selecionada
*/
const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
    personagem.addEventListener("mouseenter", () => {

        //linha de código que não permitirá selecionar o mesmo personagem
        const idSelecionado = personagem.attributes.id.value;
        if (idSelecionado === 'ultron') return;

        /*
        Objetivo - 2 --> Trocar o nome do personagem grande 
        ----alterar imagem do personagem selecionado 1
        ----alterar o nome do personagem selecionado 1 
        */
        const personagemSelecionado = document.querySelector(".selecionado");
        personagemSelecionado.classList.remove("selecionado");

        personagem.classList.add("selecionado");



        const imagemJogador1 = document.getElementById('Personagem-jogador-1');
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

        const nomeJogador1 = document.getElementById('nome-jogador-1');

        const nomeSelecionado = personagem.getAttribute('data-name');

        nomeJogador1.innerHTML = nomeSelecionado;


    });
});