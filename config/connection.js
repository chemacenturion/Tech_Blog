const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

// // insert deployed Heroku portion here
// // if (process.env.????????) {
// //     sequelize = new Sequelize(process.env.??????);
// } else {
//     sequelize new Sequelize(
//         process.env.DB_NAME,
//         process.env.DB_USER,
//         process.env.DB_PW,
//         {
//             host: 'localhost',
//             dialect: 'mysql',
//             port: 3301
//         }
//     );
// }

module.exports = sequelize