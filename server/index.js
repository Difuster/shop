require('dotenv').config(); // подключаем файл .env, где хранятся все переменные конфигурации
const express = require('express');
const sequelize = require('./db'); // импорт экземпляра класса Sequelize с конфигурацией
const models = require('./models/models'); // импорт моделей таблицы из папки models
const cors = require('cors'); // cors используется для отправки запросов с браузера
const fileUpload = require('express-fileupload');
const router = require('./routes/index'); // импорт основного роутера, который связывает все остальные
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const path = require('path');

// process.env.PORT - обращение к переменной конфигурации в файле .env
const PORT = process.env.PORT || 5000;

const app = express();
// Регистрация разных пакетов происходит через метод use
app.use(cors()); // указываем приложению использовать cors
app.use(express.json()); // позволяет приложению парсить json-формат
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router); // подключаем роутер к приложению, первым параметром указываем url,
// по которому роутер должен обрабатываться, вторым параметром указываем сам роутер

// Обработка ошибок, последний Middleware
app.use(errorHandler);

const start = async () => {
    try {
        await sequelize.authenticate(); // устанавливается подключение к БД, 
        //объект sequelize уже содержит конфигурацию подключения, которую мы определили в файле bd.js
        await sequelize.sync(); // метод sync сверяет БД со схемой БД
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}


start();
