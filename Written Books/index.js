document.addEventListener("DOMContentLoaded", function() {
    // Iniciar a transição após 1 segundo (1000 milissegundos)
    setTimeout(function() {
        var entrada = document.getElementById('entrada');
        // Mudar a opacidade durante a transição
        entrada.style.opacity = '1';
        // Redirecionar para a outra página após 1 segundo (1000 milissegundos)
        setTimeout(function() {
            window.location.href = './usuario/index.html';
        }, 1000);
    }, 1000);
});