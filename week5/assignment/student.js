// Create a class called Student whose constructor maintains all four data inputs from the HTML page.
class Student {

    constructor(...argument) {
        this.studentName = argument[0],
            this.className = argument[1],
            this.studentScores = argument[2],
            this.possibleScores = argument[3]
    }

    getStdName() {
        return this.studentName;
    }
    getClName() {
        return this.className;
    }
    // - a method that adds up all the student's scores
    totalScores() {
        return this.studentScores.reduce((sum, curr) => sum + curr);
    }
    // - a method that adds up all the possible scores
    totalPossible() {
        return this.possibleScores.reduce((sum, curr) => sum + curr);
    }
    // The class should also contain the following methods:
    // - a method that adds up all the student's scores
    // - a method that adds up all the possible scores
    // - a method that calculates the student's letter grade (divide the student's score by the possible scores and use the resulting decimal to determine grade)

    getGrade() {
        return this.totalScores() / this.totalPossible() * 100;
    }
    getLetterGrade() {
        if (this.getGrade() >= 90) return "A";
        if (this.getGrade() >= 85) return "B+";
        if (this.getGrade() >= 80) return "B";
        if (this.getGrade() >= 75) return "C+";
        if (this.getGrade() >= 70) return "C";
        if (this.getGrade() >= 60) return "D";
        return "F";
    }
}
