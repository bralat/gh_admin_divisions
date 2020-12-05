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
const fs = require('fs');
const commands = require("./sql_commands")
// import commands from './sql_commands'

var start = function (table, cols, format) {
    csv_data = ""
    json_output = []
    const db = new sqlite3.Database('./gh_admin.db');
    
    db.all(commands[table], (err, rows) => {
        if (err) {
            console.log(err);
            throw err;
        }

        //write to disk
        json_output = JSON.stringify(rows, null, 2);
        fs.writeFileSync(`./data/${table}.json`, json_output);    
    });

    db.close()
}

start ('regions')
