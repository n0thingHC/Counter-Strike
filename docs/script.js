const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;
const addImageBtnUrl = document.getElementById('add-image-btn-url');
const imageUrlInput = document.getElementById('image-url-input');
const addImageBtnFile = document.getElementById('add-image-btn-file');
const imageFileInput = document.getElementById('image-file-input');
let imageElement = null;

const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    toggleButton.classList.add('dark-mode'); 
}

// Alterna entre os temas
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    toggleButton.classList.toggle('dark-mode');
    const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme); 
});

// Função para adicionar a imagem ao conteúdo (URL)
addImageBtnUrl.addEventListener('click', () => {
    imageUrlInput.style.display = 'block'; 
});


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
        imageUrlInput.value = ''; 
        imageUrlInput.style.display = 'none'; 
    }
});


addImageBtnFile.addEventListener('click', () => {
    imageFileInput.style.display = 'block'; // Exibe o campo para selecionar arquivo
});


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
            imageElement.src = e.target.result; 
        };
        reader.readAsDataURL(file);
        imageFileInput.value = ''; 
        imageFileInput.style.display = 'none'; 
    }
});
