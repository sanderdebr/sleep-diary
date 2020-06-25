require("dotenv").config();
const { v4: uuidv4 } = require("uuid");
const configs = require("../knexfile");

const environment =
  process.env.NODE_ENV !== "local-production" ? "development" : "production";
const envConfig = configs[environment];

console.log(`SETUP: database`, envConfig);

//TODO add timestamps

exports.up = async (knex) => {
  const db = knex(envConfig);
  return db.schema.debug().createTable("users", (table) => {
    table.uuid("id").notNullable().primary().defaultTo(uuidv4());
    table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
    table.timestamp("updated_at").notNullable().defaultTo(knex.fn.now());
    table.string("email").unique().notNullable();
    table.string("password").nullable();
    table.string("salt").nullable();
    table.json("data").nullable();
  });
};

exports.down = function (knex) {};
