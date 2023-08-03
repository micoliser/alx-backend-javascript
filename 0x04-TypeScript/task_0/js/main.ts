export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentone: Student = {
  firstName: "Sam",
  lastName: "Iwelumo",
  age: 27,
  location: "Nigeria",
};

const studenttwo: Student = {
  firstName: "Gojo",
  lastName: "Jogo",
  age: 23,
  location: "Infinty",
};

const studentsList: Array<Student> = [
  studentone,
  studenttwo,
];

const styles = `
  html {
    margin: 0;
    height: 100%;
  }
  body {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    height: 85%;
    margin: 7%;
  }
  table {
    border-collapse: collapse;
  }
  thead {
    font-weight: bold;
  }
  td {
    padding: 5px;
    border: 1px solid grey;
    cursor: pointer;
  }
  td:hover {
    border: 1px solid red;
  }
  td:nthh-child(1) {
    text-aliign: center;
  }
`;

export const displayStudents = (students: Array<Student>): void => {
  const table = document.createElement('table');
  const tableHead = document.createElement('thead');
  const headRow = document.createElement('tr');
  const tableBody = document.createElement('tbody');
  headRow.insertAdjacentHTML('beforeend', '<td>FirstName</td');
  headRow.insertAdjacentHTML('beforeend', '<td>Location</td');
  tableHead.insertAdjacentElement('beforeend', headRow);

  for (const student of students) {
    const bodyRow = document.createElement('tr');
    bodyRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    bodyRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    tableBody.insertAdjacentElement('beforeend', bodyRow);
  }
  table.insertAdjacentElement('beforeend', tableHead);
  table.insertAdjacentElement('beforeend', tableBody);
  document.body.insertAdjacentElement('beforeend', table);
};

displayStudents(studentsList);
const styleSheetElement = document.createElement('style');
styleSheetElement.innerHTML = styles;
document.head.insertAdjacentElement('beforeend', styleSheetElement);
document.title = 'Typescript Task 0';
