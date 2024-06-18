require("dotenv").config();

module.exports = {
    host: "192.168.115.163",
    port: 3306,
    user: "atavism",
    database: "master",
    password: "atavism",
    secretOrKey: process.env.TOKEN_SECRET,
};
