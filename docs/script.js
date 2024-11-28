// script.js

function toggleMenu() {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("show");
}
const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

// Verifica se o usuário tem preferência salva
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    toggleButton.classList.add('dark-mode'); // Adiciona a classe ao botão
}

// Alterna entre os temas
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    toggleButton.classList.toggle('dark-mode'); // Alterna a classe do botão
    const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme); // Salva a preferência do usuário
});