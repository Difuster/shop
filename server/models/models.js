const sequelize = require('../db');
const {DataTypes} = require('sequelize'); // с помощью DataTypes описываются типы полей в схемах БД


// Создаем модели БД для каждой таблицы:
// у объекта sequelize, который импортирован из файла db.js вызываем метод define
// первым параметром передаем название модели, вторым - поля модели с конфигурацией
const User = sequelize.define('user', {
  // DataTypes.INTEGER означает, что тип данных будет число
  // primaryKey означает, что значение уникально
  // autoIncrement означает, что значение будет автоматически увеличиваться на 1 
  // в соответствии с последним значением в таблице
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  email: {type: DataTypes.STRING, unique: true},
  password: {type: DataTypes.STRING}, 
  // defaultValue устанавливает значение по дефолту
  // в нашем случае значение может быть либо USER либо ADMIN
  role: {type: DataTypes.STRING, defaultValue: "USER"}
})

// Внешние ключи в моделях не указываются, Sequelize формирует их автоматически
// после того как мы установим двухсторонние связи

const Basket = sequelize.define('basket', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketDevice = sequelize.define('basket_device', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Device = sequelize.define('device', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false},
  price: {type: DataTypes.INTEGER, allowNull: false},
  rating: {type: DataTypes.INTEGER, defaultValue: 0},
  img: {type: DataTypes.STRING, allowNull: false},
})

const Type = sequelize.define('type', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Brand = sequelize.define('brand', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Rating = sequelize.define('rating', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  rate: {type: DataTypes.INTEGER, allowNull: false},
})

const DeviceInfo = sequelize.define('device_info', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  title: {type: DataTypes.STRING, allowNull: false},
  description: {type: DataTypes.STRING, allowNull: false},
})

const TypeBrand = sequelize.define('type_brand', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

// Двухсторонняя установка связей
// hasOne указывает, что один User может иметь одну корзину
// Basket.belongsTo(User) указывает обратную связь и указывает на то,
// что одна корзина может принадлежать одному User
User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

Type.hasMany(Device)
Device.belongsTo(Type)

Brand.hasMany(Device)
Device.belongsTo(Brand)

Device.hasMany(Rating)
Rating.belongsTo(Device)

Device.hasMany(BasketDevice)
BasketDevice.belongsTo(Device)

Device.hasMany(DeviceInfo, {as: 'info'});
DeviceInfo.belongsTo(Device)

// Когда связь в обе стороны происходит через belongsToMany
// необходимо указать промежуточную таблицу и указать ее в объекте через поле through
// в этом случае { through: TypeBrand } - таблица TypeBrand реализована выше
Type.belongsToMany(Brand, { through: TypeBrand })
Brand.belongsToMany(Type, { through: TypeBrand })

module.exports = {
  User,
  Basket,
  BasketDevice,
  Device,
  Type,
  Brand,
  Rating,
  TypeBrand,
  DeviceInfo
}
