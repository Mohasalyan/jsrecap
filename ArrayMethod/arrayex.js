const students = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 85 },
    { name: "Charlie", grade: 92 },
  ];
  
  // Task 1: Add New 
  const newStudents = [
    { name: "David", grade: 88 },
    { name: "Eve", grade: 95 },
    { name: "Frank", grade: 89 },
  ];
  students.push(...newStudents);
  
  students.pop();
  
  const newStudentsAtBeginning = [
    { name: "Grace", grade: 91 },
    { name: "Harry", grade: 87 },
  ];
  students.unshift(...newStudentsAtBeginning);
  
  students.shift();
  
  const highAchievers = students.filter((student) => student.grade > 90);
  
  highAchievers.sort((a, b) => b.grade - a.grade);
  
  const squaredGrades = students.map((student) => ({
    name: student.name,
    gradeSquared: student.grade ** 2,
  }));
  
  const totalGradeSum = students.reduce((total, student) => total + student.grade, 0);
  
  const allPassing = students.every((student) => student.grade > 60);
  
  const anyoneFailing = students.some((student) => student.grade < 60);
  
  const firstAverageStudent = students.find((student) => student.grade === 85);
  
  console.log("Updated Students:", students);
  console.log("High Achievers:", highAchievers);
  console.log("Squared Grades:", squaredGrades);
  console.log("Total Grade Sum:", totalGradeSum);
  console.log("Are All Students Passing?", allPassing);
  console.log("Is Anyone Failing?", anyoneFailing);
  console.log("First Average Student:", firstAverageStudent);
  