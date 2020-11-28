/**
 * TODO: 
 * if tables don't exist, create them and populate with their respective csvs
 * refactor code
 * export data in csvs
 * test an sqlite client and add to readme
 * remove database seeding code
*/

//Import packages
const sqlite3 = require('sqlite3');

// create instance of database connection
const db = new sqlite3.Database('./db.sqlite3');

db.serialize (() => {
    db.run (`
        CREATE TABLE IF NOT EXISTS regions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            capital_id INTEGER NULL,
            minister TEXT NULL,
            dep_minister TEXT NULL
        )`
    );

    //CONSTRAINT regions_fk_capital_id FOREIGN KEY (capital_id)
    //REFERENCES towns(id) ON UPDATE CASCADE ON DELETE NO ACTION

    db.run("INSERT into regions VALUES (?,'Ashanti',?,?,?)")

    db.each(`SELECT * FROM regions`, (err, row) => {
        if (err) {
            console.log(err);
            throw err;
        }
        console.log(row);
    }, () => {
        console.log('query completed')
    });

    db.close()
});