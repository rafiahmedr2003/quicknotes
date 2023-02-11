const db = require("../db");

exports.selectNotes = () => {
  let queryStr = `SELECT * from notes`;

  return db.query(queryStr).then((result) => {
    return result.rows;
  });
};
