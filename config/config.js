const promise = require("bluebird");
const options = {
    promiseLib: promise,
    query: (e) => { },
};

const pgp = require("pg-promise")(options);
const types = pgp.pg.types;
types.setTypeParser(1114, function (stringValue) {
    return stringValue;
});

const databaseConfig = {
    host: "127.0.0.1",
    port: 5432,
    database: "siteach_database",
    user: "postgres",
    password: "22191407ELleon",
};

const db = pgp(databaseConfig);
module.exports = db;
