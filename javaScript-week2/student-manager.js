
const class07Students = [];
function addStudentToClass(studentName) {
  if (studentName === "") {
    console.log("Cannot add empty string.");
    return;
  }
  if (class07Students.includes(studentName)) {
    console.log(`Student ${studentName} is already in the class`); // rejects if sudent is already in class
    return;
  }
  if (studentName === "Queen") {
    class07Students.push(studentName);
    console.log(`${studentName} has been added to the class`); // Adds queen even if class is full
    return;
  }
  if (class07Students.length >= 6) {
    console.log("Cannot add more students to class 07"); // rejects if more than 6 students are been added
    return;
  }
  class07Students.push(studentName);
  console.log(`${studentName} has been added to the class`);
}

function getNumberOfStudents() {
  return class07Students.length;
}



//Trying different scenarios
addStudentToClass("Dennis");
addStudentToClass("Bash");
addStudentToClass("Stone");
addStudentToClass("Dennis");
addStudentToClass("");
addStudentToClass("Luke");
addStudentToClass("Zoey");
addStudentToClass("Stan");
addStudentToClass("Queen");
addStudentToClass("Sarah");

console.log("Number of students in class:", getNumberOfStudents());
