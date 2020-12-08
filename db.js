require("dotenv").config();

import configs from "~/knexfile";
import knex from "knex";

const envConfig = configs[process.env.NODE_ENV];
const db = knex(envConfig);

console.log(envConfig, db);

module.exports = db;
