const db = require("../db");

exports.selectNotes = async () => {
  const result = await db.query(`SELECT * from notes`);
  if (result.rows.length === 0) {
    throw new Error("No notes found");
  }
  return result.rows;
};

exports.insertNote = async (note, date, tag) => {
  try {
    const result = await db.query(
      `INSERT into notes(note_text, note_date, note_tag) VALUES ($1, $2, $3) RETURNING * `,
      [note, date, tag]
    );
    return result.rows;
  } catch (error) {
    if (error.code === "22P02" || error.code === "22007") {
      throw new Error("Invalid parameter value or date format");
    }
    throw new Error("Error inserting note");
  }
};

exports.updateNote = async (note, date, tag, id) => {
  if (note === undefined || typeof date !== "number") {
    throw new Error("Bad request");
  }

  const result = await db.query(
    `UPDATE notes 
    SET note_text = $1, note_date = $2, note_tag = $3 WHERE note_id = $4 RETURNING *`,
    [note, date, tag, id]
  );
  if (result.rowCount === 0) {
    throw new Error("Note not found");
  }
  return result.rows[0];
};

exports.deleteNote = async (id) => {
  const result = await db.query(`SELECT * from notes WHERE note_id = $1`, [id]);
  if (result.rows.length === 0) {
    throw new Error("Note not found");
  }
  const deleteResult = await db.query(`DELETE from notes WHERE note_id = $1`, [
    id,
  ]);
  if (deleteResult.rowCount === 0) {
    throw new Error("Failed to delete note");
  }
  return deleteResult.rows;
};

exports.selectNoteByID = async (id) => {
  const result = await db.query(`SELECT * FROM notes WHERE note_id = $1`, [id]);
  if (result.rows.length === 0) {
    const err = new Error(`Note with ID ${id} not found`);
    err.id = id;
    throw err;
  }
  return result.rows[0];
};
