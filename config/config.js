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


const typeConfig = process.env.NODE_ENV

const getConfig = () => {
    return typeConfig === 'production' ? {
        host: "ec2-3-230-199-240.compute-1.amazonaws.com",
        port: 5432,
        database: "decb260rupl2mc",
        user: "rxcigiflrqaqlx",
        password: "0fb05aa39767ccdfe9f6e4a32c68014f178b7af2fa5fd6b1f6b599ae2de7666d",
        "ssl": {
            "rejectUnauthorized": false,
        },
    } : {
        host: "127.0.0.1",
        port: 5432,
        database: "siteach_database",
        user: "postgres",
        password: "22191407ELleon",

    }
}

const databaseConfig = getConfig();

const db = pgp(databaseConfig);
module.exports = db;
