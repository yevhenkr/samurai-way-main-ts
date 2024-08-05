// Импортируем createProxyMiddleware из http-proxy-middleware
const { createProxyMiddleware } = require('http-proxy-middleware');

// Экспортируем функцию, которая настраивает прокси
module.exports = function(app) {
    // Устанавливаем прокси для запросов, начинающихся с '/api'
    app.use(
        '/api',
        createProxyMiddleware({
            // Целевой сервер, на который будут перенаправляться запросы
            target: 'https://social-network.samuraijs.com',
            // Разрешаем изменение происхождения (origin) запроса
            changeOrigin: true,
            // Перезаписываем путь запроса, убирая '/api'
            pathRewrite: {
                '^/api': '', // Например, '/api/1.0/auth/me' становится '/1.0/auth/me'
            },
        })
    );
};
