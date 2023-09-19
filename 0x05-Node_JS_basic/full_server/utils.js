import fs from 'fs/promises';

function readDatabase (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf8' })
      .then((data) => {
        const lines = data.split('\n');
        const fields = {};
        for (const line of lines) {
          const details = line.split(',');
          if (line === '' || details[3] === 'field') continue;
          const [firstname, field] = [details[0], details[3]];
          if (!fields[field]) fields[field] = [firstname];
          else fields[field].push(firstname);
        }
        resolve(fields);
      })
      .catch((_err) => {
        reject(Error('Cannot load the database'));
      });
  });
}

export default readDatabase;
