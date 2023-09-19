const fs = require('fs/promises');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf8' })
      .then((data) => {
        const lines = data.split('\n');
        let noOfStudents = 0;
        const fields = {};
        for (const line of lines) {
          const details = line.split(',');
          // eslint-disable-next-line no-continue
          if (line === '' || details[3] === 'field') continue;
          const [firstname, field] = [details[0], details[3]];
          if (!fields[field]) fields[field] = [firstname];
          else fields[field].push(firstname);
          noOfStudents += 1;
        }
        console.log(`Number of students: ${noOfStudents}`);
        for (const field of Object.keys(fields)) {
          const noOfStudents = fields[field].length;
          const listOfStudents = fields[field].join(', ');
          console.log(
            `Number of students in ${field}: ${noOfStudents}. List: ${listOfStudents}`
          );
        }
        resolve();
      })
      // eslint-disable-next-line no-unused-vars
      .catch((_err) => {
        reject(Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
