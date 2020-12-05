## Get started

This repo contains some data on the administrative levels of Ghana (Regions, MMDA and Towns) in a sqlite database, csv and json formats. 
Please note that not all towns are captured in the data.

For easy download, the csv and json data is provided. To regenerate the data, you can make use of the following commands

1. To export all tables into csv and json
```
node main.js
```

2. To return only a single table, add the table option in the command. For example, if you want to retrieve the list of regions
```
node main.js --table=regions
```

3. if you want the table in a particular format(csv, json)
```
node main.js --table=regions --format=csv
```

### SQLite
To make changes to the sqlite db, you can use any of the available sqlite editors out there. The one that worked well for me was
[SQLiteStudio](https://github.com/pawelsalawa/sqlitestudio)

### Contribution
Calling all volunteers to help maintain this repo in the following ways
1. Updating information in a timely manner
2. adding necessary features to make it more user and dev friendly