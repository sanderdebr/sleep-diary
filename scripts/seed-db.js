require("dotenv").config();
import configs from "~/knexfile";
import knex from "knex";

const environment = process.env.NODE_ENV || "development";
const envConfig = configs[process.env.NODE_ENV || "development"];

console.log(`SETUP: database`, envConfig);

const db = knex(envConfig);

console.log(`RUNNING: seed-database.js NODE_ENV=${environment}`);

// --------------------------
// SCRIPTS
// --------------------------

const createUserTable = db.schema.debug().createTable("users", (table) => {
  table.increments("id");
  table.timestamp("created_at").defaultTo(db.fn.now());
  table.timestamp("updated_at").defaultTo(db.fn.now());
  table.string("email").unique().notNullable();
  table.string("password").nullable();
  table.string("salt").nullable();
  table.json("data").nullable();
});

// --------------------------
// RUN
// --------------------------

Promise.all([createUserTable]);

console.log(`FINISHED: seed-db.js NODE_ENV=${environment}`);
