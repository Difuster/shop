const Router = require('express'); // подключаем класс Router из express.js
const router = new Router(); // получаем экземпляр класса Router
// подключаем все подроутеры
const deviceRouter = require('./deviceRouter');
const userRouter = require('./userRouter');
const brandRouter = require('./brandRouter');
const typeRouter = require('./typeRouter');


// указываем основному router использовать подроутеры с помощью метода use объекта router
// первым параметром передаем путь подроутера, а вторым сам подроутер
router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/brand', brandRouter);
router.use('/device', deviceRouter);

module.exports = router;
