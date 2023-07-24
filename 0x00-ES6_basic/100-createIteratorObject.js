export default function createIteratorObject(report) {
  return {
    [Symbol.iterator]() {
      const employees = [];
      const departments = Object.keys(report.allEmployees);
      let counter = -1;

      for (const department of departments) {
        for (const employee of report.allEmployees[department]) {
          employees.push(employee);
        }
      }

      return {
        next() {
          if (counter === employees.length - 1) {
            return { done: true, value: undefined };
          }

          counter += 1;
          return { done: false, value: employees[counter] };
        },
      };
    },
  };
}
