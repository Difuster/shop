const Router = require('express'); // подключаем класс Router из express.js
const router = new Router(); // получаем экземпляр класса Router
const userController = require('../controllers/userController'); // импортируем объект userController
const authMiddleware = require('../middleware/authMiddleware');


// методы для работы с user
router.post('/registration', userController.registration); // используем меоды объекта userController
router.post('/login', userController.login);
router.get('/auth', authMiddleware, userController.check);

module.exports = router;
