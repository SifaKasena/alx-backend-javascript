export default function updateStudentsByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const grade = newGrades.find((grade) => grade.studentId === student.id);
      if (grade) {
        return { ...student, grade: grade.grade };
      }
      return { ...student, grade: 'N/A' };
    });
}
