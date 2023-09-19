const fs = require('fs');

function countStudents (path) {
  try {
    const data = fs.readFileSync(path, { encoding: 'utf8' });
    const lines = data.split('\n');
    console.log(`Number of students: ${lines.length - 1}`);
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
      console.log(
        `Number of students in ${field}: ${noOfStudents}. List: ${listOfStudents}`
      );
    }
  } catch (_err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
