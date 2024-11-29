// Alternar entre os temas (Claro / Escuro)
const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

// Verifica se o usuário tem preferência de tema salva no localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    toggleButton.classList.add('dark-mode'); // Adiciona a classe ao botão para refletir o estado do tema
}

// Alterna o tema entre claro e escuro
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode'); // Alterna a classe no body
    toggleButton.classList.toggle('dark-mode'); // Alterna a classe no botão
    const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme); // Salva a preferência do usuário no localStorage
});
