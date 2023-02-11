DROP DATABASE IF EXISTS quick_notes;
CREATE DATABASE quick_notes;

\c quick_notes;

CREATE TABLE notes (
    note_id SERIAL PRIMARY KEY,
    note_text VARCHAR NOT NULL,
    note_date INT NOT NULL,
    note_tag VARCHAR
);

INSERT INTO notes 
    (note_text, note_date, note_tag) 
VALUES 
    ('this is my test note 1', 2022, 'coding'),
    ('this is my test note 2', 2023, 'skateboarding');