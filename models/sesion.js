const db = require("../config/config");
const crypto = require('crypto');

const Sesion = {};

// Sesion.getAll = () => {
//     const sql = `select * from users`;

//     return db.manyOrNone(sql);
// };

// Sesion.findById = (idUser, callback) => {
//     const sql = `select
//                     username, 
//                     name, 
//                     lastname, 
//                     password, 
//                     session_token 
//                 from users
//                 where idUser = $1 `;

//     return db.oneOrNone(sql, idUser).then(user => { callback(null, user) });
// }

// Sesion.findByUserName = (username) => {
//     const sql = `select
//                     username, 
//                     name, 
//                     lastname, 
//                     password, 
//                     session_token 
//                 from users
//                 where username = $1 `;

//     return db.oneOrNone(sql, username);
// }

Sesion.create = (sesion) => {
    // const myPasswordHashed = crypto.createHash('md5').update(sesion.password).digest('hex');
    // sesion.password = myPasswordHashed;

    const sql = `insert into sesion(
                    idUser,
                    fecha,
                    starthora
                )
                values($1,now(),now()) returning idUser`;

    return db.oneOrNone(sql, [
        sesion.idUser,
    ]);
}


Sesion.createCierre = (sesion) => {
    // const myPasswordHashed = crypto.createHash('md5').update(sesion.password).digest('hex');
    // sesion.password = myPasswordHashed;

    const sql = `insert into sesion(
                    idUser,
                    fecha,
                    closinghora
                )
                values($1,now(),now()) returning idUser`;

    return db.oneOrNone(sql, [
        sesion.idUser,
    ]);
}


Sesion.update = (sesion) => {

    const sql = `update sesion set closinghora = now()
                where idSession = $1
                returning idUser`;

    return db.oneOrNone(sql, [
        sesion.idSession,
    ]);
}
// Sesion.isPasswordMatched = (userPassword, hash) => {
//     const myPasswordHashed = crypto.createHash('md5').update(userPassword).digest('hex');

//     if (myPasswordHashed === hash) {
//         return true;
//     }

//     return false;
// }

module.exports = Sesion;
