function abrirAlerta() {
    // Função a ser chamada quando a página for carregada completamente
    alert("A página foi carregada!");
}

// Adicionando um ouvinte de evento para quando a página for carregada
document.addEventListener("DOMContentLoaded", abrirAlerta);

