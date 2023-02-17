const errorHandler = (err, req, res, next) => {
  console.error(err);
  let status = 500;
  let message = "Internal server error";

  if (err instanceof SyntaxError) {
    status = 400;
    message = "Bad JSON";
  } else if (err instanceof TypeError) {
    status = 400;
    message = "Invalid input type";
  } else if (err.code === "22P02" || err.code === "22007") {
    status = 400;
    message = "Invalid parameter value or date format";
  } else if (err.message === "Note not found" && err.id !== undefined) {
    status = 404;
    message = `Note with ID ${err.id} not found`;
  } else if (err.message === "Note not found") {
    status = 404;
    message = "Note not found";
  } else if (err.message === "Bad request") {
    status = 400;
    message = "Bad request";
  } else if (err.message === "Failed to delete note") {
    status = 500;
    message = "Failed to delete note";
  } else if (
    err.message === "Error inserting note" ||
    err.message === "Error selecting notes"
  ) {
    status = 500;
    message = "An error occurred while processing the request";
  }
  return res.status(status).json({ error: message });
};

module.exports = errorHandler;
