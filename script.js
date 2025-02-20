function mostrarSecao(secaoId) {
  document.querySelectorAll('.container').forEach(secao => {
    secao.style.display = 'none';
  });
  document.getElementById(secaoId).style.display = 'block';
}

// Exibe a primeira seção ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  mostrarSecao('turbo-roda');
});
