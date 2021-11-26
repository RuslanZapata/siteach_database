const db = require("../config/config");
const crypto = require('crypto');

const User = {};

User.getAll = () => {
    const sql = `select * from users`;

    return db.manyOrNone(sql);
};

User.findById = (idUser, callback) => {
    const sql = `select
                    username, 
                    name, 
                    lastname, 
                    password, 
                    session_token 
                from users
                where idUser = $1 `;

    return db.oneOrNone(sql, idUser).then(user => { callback(null, user) });
}

User.findByUserName = (username) => {
    const sql = `select
                    username, 
                    name, 
                    lastname, 
                    password, 
                    session_token 
                from users
                where username = $1 `;

    return db.oneOrNone(sql, username);
}

User.create = (user) => {
    const myPasswordHashed = crypto.createHash('md5').update(user.password).digest('hex');
    user.password = myPasswordHashed;

    const sql = `insert into users(
                    username,
                    name,
                    lastname,
                    password
                )
                values($1,$2,$3,$4) returning idUser`;

    return db.oneOrNone(sql, [
        user.username,
        user.name,
        user.lastname,
        user.password
    ]);
}

User.isPasswordMatched = (userPassword, hash) => {
    const myPasswordHashed = crypto.createHash('md5').update(userPassword).digest('hex');

    if (myPasswordHashed === hash) {
        return true;
    }

    return false;
}

module.exports = User;
