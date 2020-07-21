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

const createUserTable = db.schema.hasTable("users").then((exists) => {
  if (!exists) {
    return db.schema.createTable("users", (table) => {
      table.increments("id");
      table.timestamp("created_at").defaultTo(db.fn.now());
      table.timestamp("updated_at").defaultTo(db.fn.now());
      table.string("email").unique().notNullable();
      table.string("password");
      table.string("salt");
      table.string("name");
      table.string("verified");
    });
  } else {
    console.log("Table users already exists");
  }
});

const createDataTable = db.schema.hasTable("data").then((exists) => {
  if (!exists) {
    return db.schema.createTable("data", (table) => {
      table.increments("id");
      table.integer("userId");
      table.timestamp("created_at").defaultTo(db.fn.now());
      table.timestamp("updated_at").defaultTo(db.fn.now());
      table.integer("energy");
      table.integer("feeling");
      table.integer("total_sleep");
      table.integer("deep_sleep");
      table.string("activities");
      table.string("adjustments");
      table.string("day").defaultTo(db.fn.now());
    });
  } else {
    console.log("Table data already exists");
  }
});

// --------------------------
// RUN
// --------------------------

Promise.all([createUserTable, createDataTable]);

console.log(`FINISHED: seed-db.js NODE_ENV=${environment}`);
