import configs from "~/knexfile";
import knex from "knex";

const envConfig = configs[process.env.NODE_ENV];

console.log("Setting up database: ", envConfig);

const db = knex(envConfig);
