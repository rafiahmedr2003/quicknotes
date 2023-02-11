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

exports.updateNote = (note, date, tag, id) => {
  if (note === undefined || typeof date !== "number") {
    return Promise.reject({
      status: 400,
      msg: "bad request",
      detail: "invalid data type, please enter a valid data type",
    });
  }

  return db
    .query(
      `UPDATE notes 
    SET note_text = $1, note_date = $2, note_tag = $3 WHERE note_id = $4 RETURNING *`,
      [note, date, tag, id]
    )
    .then((result) => {
      return result.rows[0];
    });
};

exports.deleteNote = (id) => {
  return db
    .query(`SELECT * from notes WHERE note_id = $1`, [id])
    .then((result) => {
      if (!result.rows.length) {
        return Promise.reject({
          status: 404,
          msg: `you cant delete a note that doesn't exist!`,
          detail: "please try again",
        });
      } else {
        db.query(`DELETE from notes WHERE note_id = $1`, [id]).then(
          (result) => {
            return result.rows;
          }
        );
      }
    });
};
