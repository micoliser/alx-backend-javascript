export default function iterateThroughObject(reportWithIterator) {
  let str = '';
  for (const employee of reportWithIterator) {
    str += employee;
    str += ' | ';
  }
  return str.slice(0, str.length - 3);
}
