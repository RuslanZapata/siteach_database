const db = require("../config/config");
const crypto = require('crypto');

const User = {};

User.getAll = () => {
    const sql = `select * from users`;

    return db.manyOrNone(sql);
};

User.create = (user) => {
    const sql = `insert into users(
        username,
        name,
        lastname,
        password
    )
    values($1,$2,$3,$4) returning id`;

    return db.oneOrNone(sql, [
        user.username,
        user.name,
        user.lastname,
        user.password
    ]);
}

module.exports = User;
