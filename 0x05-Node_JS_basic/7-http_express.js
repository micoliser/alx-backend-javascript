const express = require('express');
const fs = require('fs/promises');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  fs.readFile(process.argv[2], { encoding: 'utf8' })
    .then((data) => {
      let response = 'This is the list of our students\n';
      const lines = data.split('\n');
      response += `Number of students: ${lines.length - 1}\n`;
      const fields = {};
      for (const line of lines) {
        const details = line.split(',');
        if (line === '' || details[3] === 'field') continue;
        const [firstname, field] = [details[0], details[3]];
        if (!fields[field]) fields[field] = [firstname];
        else fields[field].push(firstname);
      }
      for (const field of Object.keys(fields)) {
        const noOfStudents = fields[field].length;
        const listOfStudents = fields[field].join(', ');
        response += `Number of students in ${field}: ${noOfStudents}. List: ${listOfStudents}\n`;
      }
      response = response.slice(0, -1);
      res.send(response);
    })
    .catch((_err) => {
      res.send('Cannot load the database');
    });
});

app.listen(1245);

module.exports = app;
