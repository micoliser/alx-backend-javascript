export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      for (const newGrade of newGrades) {
        if (newGrade.studentId === student.id) {
          return { ...student, grade: newGrade.grade };
        }
      }
      return { ...student, grade: 'N/A' };
    });
}
