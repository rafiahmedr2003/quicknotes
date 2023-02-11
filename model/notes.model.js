const db = require("../db");

exports.selectNotes = () => {
  let queryStr = `SELECT * from notes`;

  return db.query(queryStr).then((result) => {
    return result.rows;
  });
};

exports.insertNote = (note, date, tag) => {
  return db
    .query(
      `INSERT into notes(note_text, note_date, note_tag) VALUES ($1, $2, $3) RETURNING * `,
      [note, date, tag]
    )
    .then((result) => {
      return result.rows;
    });
};
