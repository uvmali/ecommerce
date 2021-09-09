const Sequelize = require('sequelize');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'nodetutorial',
//     password: 'apple@17'
// });

const sequelize = new Sequelize('node_complete', 'root', 'mytest@1998',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;