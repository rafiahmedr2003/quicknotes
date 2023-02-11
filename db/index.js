const { Pool } = require("pg");
require("dotenv").config();

if (!process.env.PGDATABASE) {
  throw new Error("PGDATABASE not set");
}

const db = new Pool(); //connection to the database

module.exports = db;
