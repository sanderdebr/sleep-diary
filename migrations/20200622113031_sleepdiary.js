const { v4: uuidv4 } = require("uuid");

//TODO add timestamps

exports.up = async (knex) => {
  return knex.schema.debug().createTable("users", (table) => {
    table.uuid("id").notNullable().primary().defaultTo(uuidv4());
    table.timestamp("created_at").notNullable().defaultTo(new Date());
    table.timestamp("updated_at").notNullable().defaultTo(new Date());
    table.string("email").unique().notNullable();
    table.string("password").nullable();
    table.string("salt").nullable();
    table.json("data").nullable();
  });
};

exports.down = function (knex) {};
