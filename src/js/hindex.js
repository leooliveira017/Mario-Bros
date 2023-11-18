
console.log('mostrar o document', document);

const botaoTrailer = document.querySelector(".botao");

const modal = document.querySelector(".modal");

botaoTrailer.addEventListener("click", () => {
    modal.classList.add("aberto");
});

const botaoFecharModal = document.querySelector(".fechar-modal");

botaoFecharModal.addEventListener("click", () => {
    
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});

const video = document.getElementById("video");
