// Получаем переменные окружения из Cloudflare Pages
window.env = {
    NAME: '',
    PHONE: ''
};

// Функция для загрузки переменных окружения
async function loadEnvVariables() {
    try {
        const response = await fetch('/_vars');
        const data = await response.json();
        window.env.NAME = data.NAME || '';
        window.env.PHONE = data.PHONE || '';
        
        // Обновляем элементы на странице
        const whatsappElement = document.getElementById('whatsapp');
        const numAndNameElement = document.getElementById('numAndName');
        
        if (whatsappElement) {
            whatsappElement.textContent = `ватсап +${window.env.PHONE}`;
        }
        
        if (numAndNameElement) {
            numAndNameElement.textContent = `${window.env.NAME} +${window.env.PHONE}`;
        }

        return data; // Возвращаем данные для возможности ожидания загрузки
    } catch (error) {
        console.error('Ошибка при загрузке переменных окружения:', error);
        throw error;
    }
}

// Экспортируем функцию для использования в других скриптах
window.loadEnvVariables = loadEnvVariables;

// Загружаем переменные при загрузке страницы
document.addEventListener('DOMContentLoaded', loadEnvVariables); 