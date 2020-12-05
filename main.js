//Import packages
const sqlite3 = require('sqlite3');
const fs = require('fs');
const commands = require("./sql_commands")
const { Parser } = require('json2csv');

function write_to_json (rows, table) {
    output = JSON.stringify(rows, null, 2);
    fs.writeFileSync(`./data/${table}.json`, output);
}

function write_to_csv (rows, table) {
    const fields = Object.keys(rows[0])
    const opts = { fields };

    try {
        const parser = new Parser(opts);
        const output = parser.parse(rows);
        fs.writeFileSync(`./data/${table}.csv`, output); 
    } catch (err) {
        console.error(err);
    }
}

function get_data (db, table, format) {
    db.all(commands[table], (err, rows) => {
        if (err) {
            console.log(err);
            throw err;
        }

        //write to disk
        if (format == "json") {
            write_to_json(rows, table)
        } else if (format == "csv") {
            write_to_csv(rows, table)
        } else {
            write_to_json(rows, table)
            write_to_csv(rows, table)
        }
    });
}

function start (table, cols, format) {
    // create instance of db
    const db = new sqlite3.Database('./db.sqlite3');

    // get all table names
    tables = Object.keys(commands)

    // If user specified a table, then make it the only table in the loop
    if (table) {
        tables = [table]
    }
    
    // process tables
    for (table of tables) {
        get_data (db, table, format)
    }

    db.close()
}

start ()