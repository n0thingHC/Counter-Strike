const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;
const addImageBtnUrl = document.getElementById('add-image-btn-url');
const imageUrlInput = document.getElementById('image-url-input');
const addImageBtnFile = document.getElementById('add-image-btn-file');
const imageFileInput = document.getElementById('image-file-input');
let imageElement = null;

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

// Função para adicionar a imagem ao conteúdo (URL)
addImageBtnUrl.addEventListener('click', () => {
    imageUrlInput.style.display = 'block'; // Exibe o campo de URL da imagem
});

// Adiciona a imagem ao conteúdo quando o usuário colar a URL
imageUrlInput.addEventListener('change', () => {
    const imageUrl = imageUrlInput.value.trim();
    if (imageUrl) {
        if (!imageElement) {
            imageElement = document.createElement('img');
            imageElement.style.width = '100%';
            imageElement.style.height = 'auto';
            document.querySelector('main').appendChild(imageElement);
        }
        imageElement.src = imageUrl;
        imageUrlInput.value = ''; // Limpa o campo de URL após adicionar a imagem
        imageUrlInput.style.display = 'none'; // Oculta o campo de URL novamente
    }
});

// Função para adicionar a imagem ao conteúdo (Arquivo)
addImageBtnFile.addEventListener('click', () => {
    imageFileInput.style.display = 'block'; // Exibe o campo para selecionar arquivo
});

// Adiciona a imagem ao conteúdo quando o usuário selecionar um arquivo
imageFileInput.addEventListener('change', () => {
    const file = imageFileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            if (!imageElement) {
                imageElement = document.createElement('img');
                imageElement.style.width = '100%';
                imageElement.style.height = 'auto';
                document.querySelector('main').appendChild(imageElement);
            }
            imageElement.src = e.target.result; // Exibe o arquivo selecionado
        };
        reader.readAsDataURL(file);
        imageFileInput.value = ''; // Limpa o campo após adicionar a imagem
        imageFileInput.style.display = 'none'; // Oculta o campo novamente
    }
});
