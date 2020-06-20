module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./sleepdiary.sqlite",
    },
  },
  production: {},
};
