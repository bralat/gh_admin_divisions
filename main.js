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
commands = require("./sql_commands")
// import commands from './sql_commands'

// create instance of database connection
const db = new sqlite3.Database('./gh_admin.db');

db.serialize (() => {
    db.each(commands.regions, (err, row) => {
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