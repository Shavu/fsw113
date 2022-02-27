// Declare any necessary variables.
let student;

const studentName = document.querySelector("#studentName");
const className = document.querySelector("#className");
const studentScores = document.querySelector("#studentScores");
const possibleScores = document.querySelector("#possibleScores");
const certName = document.querySelector("#certStudentName");
const certClass = document.querySelector("#certClassName");
const certGrade = document.querySelector("#certGrade");

// Add am evemt listener that responds to the click of the "print" button by calling a function to instantiate
//  a new student object, and another function to print the certificate.
document.querySelector("#print").addEventListener("click", () => {
    instantiateStudent();
    fillCertificate(student);
});


// Add an event listener that responds to the click of the reset button by resetting all the values
// both in the form and in the certificate.

document.querySelector("#reset").addEventListener("click", () => {
    studentName.value = "";
    className.value = "";
    studentScores.value = "";
    possibleScores.value = "";
    certName.innerText = "";
    certClass.innerText = "";
    certGrade.innerText = "";
});
// Create a function that instantiates a new student object with the input from the HTML form.
function instantiateStudent() {
    let studentScoresArr = toNumArray(studentScores.value);
    let possibleScoresArr = toNumArray(possibleScores.value);
    student = new Student(studentName.value, className.value, studentScoresArr, possibleScoresArr);
    fillCertificate(student);
}

// Create a function that fills in the student's name, class name, and calculated grade on the certificate .
function fillCertificate(student) {
    certName.innerText = student.getStdName();
    certClass.innerText = student.getClName();
    certGrade.innerText = student.getLetterGrade();
}

// Create a function that converts the contents of a comma-separated text string to a numeric array.
// You can use this function when instantiating the arrays in the student object.
function toNumArray(str) {
    return str.split(",").map(score => Number(score.trim()));
}

