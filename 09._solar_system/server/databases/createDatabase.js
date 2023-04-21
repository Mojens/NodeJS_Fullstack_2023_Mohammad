import db from './connection.js'

console.log(process.argv)

const isDeleteMode = process.argv.findIndex((arg) => arg === 'delete-mode') === -1 ? false : true;

if (isDeleteMode) {
    db.exec(`DROP TABLE planets;`);
    db.exec(`DROP TABLE people;`);
}


// (DDL) Data Definition Language

db.exec(`
CREATE TABLE IF NOT EXISTS planets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    size FLOAT,
    is_habitable BOOLEAN NOT NULL
);
`);

db.exec(`
CREATE TABLE IF NOT EXISTS people (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
);
`);

// Seeding (DML) Data Manipulation Language
if (isDeleteMode) {
db.exec(`INSERT INTO planets (name, size, is_habitable) VALUES ('Jupiter', 0.55, False);`);
db.exec(`INSERT INTO planets (name, size, is_habitable) VALUES ('Earth', 1, True);`);
db.exec(`INSERT INTO planets (name, size, is_habitable) VALUES ('Mars', 0.33, False);`);
db.exec(`INSERT INTO planets (name, size, is_habitable) VALUES ('Venus', 0.22, False);`);
db.exec(`INSERT INTO planets (name, size, is_habitable) VALUES ('Uranus', 0.225, False);`);
db.exec(`INSERT INTO planets (name, size, is_habitable) VALUES ('Saturn', 0.99, False);`);
db.exec(`INSERT INTO planets (name, size, is_habitable) VALUES ('Jupiter', 0.55, False);`);
db.exec(`INSERT INTO planets (name, size, is_habitable) VALUES ('Neptune', 1.32, False);`);
db.exec(`INSERT INTO planets (name, size, is_habitable) VALUES ('Mercury', 0.22, False);`);
}