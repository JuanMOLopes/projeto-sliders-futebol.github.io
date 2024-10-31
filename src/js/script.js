
const imagens = document.querySelectorAll("#slider img"); // Pegando todas as imagens pelo query selector all

let imagemAtual = 0; //A imagem atual é definida como 0

// Trocar o estilo da imagem (display none) para ela aparecer
function mostrarImagem(index) {
    imagens.forEach(img => img.style.display = "none");

    imagens[index].style.display = "block";
}

function proximaImagem(){
    // pegando o index (índice da imagem (como se fosse um array)) e somando 1 -> próxima imagem
    imagemAtual = (imagemAtual + 1) % imagens.length;
    mostrarImagem(imagemAtual);
}

function imagemAnterior(){
    // pegando o index (índice da imagem (como se fosse um array)) e subtraindo 1 -> imagem anterior
    imagemAtual = (imagemAtual - 1 + imagens.length) % imagens.length;
    mostrarImagem(imagemAtual);
}

mostrarImagem(imagemAtual);

let intervalo = setInterval(proximaImagem, 5000);

mostrarImagem(imagemAtual);

const botaoProximo = document.getElementById("nextBtn"); //pegar o botão de próximo pelo id
const botaoAnterior = document.getElementById("prevBtn"); //pegar o botão de anterior pelo id

// evento para o botao de passar
botaoProximo.addEventListener("click", ()=> {
    proximaImagem();
})

// evento para o botao anterior
botaoAnterior.addEventListener("click", ()=> {
    imagemAnterior();
})