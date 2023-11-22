const express = require('express');
const fs = require('fs');

const port = 1245
const app = express();
app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
    const databasePath = req.app.get('databasePath');

    fs.readFile(databasePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send(`Error reading database: ${err.message}`);
        } else {
            const lines = data.split('\n').filter(line => line.trim() !== '');
            const studentsList =lines.map(line => line.split(','[0]));
            res.send(`This is the list of our students:\n${studentsList.join('\n')}`);
        }
    });
});

const databaseName = process.argv[2];

if (!databaseName) {
    console.error('Please provide a database file name.');
    process.exit(1);
}

app.set('databasePath', databaseName);

app.listen(port);
module.exports = app;
