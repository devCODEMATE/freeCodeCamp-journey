function getAverage(scores) {
  let sum = 0;

  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }

  return sum / scores.length;
}

function getGrade(score) {
  if (score === 100) {
    return "A+";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

function studentMsg(scores, studentScore) {
  const average = getAverage(scores);
  const grade = getGrade(studentScore);

  if (hasPassingGrade(studentScore)) {
    return "Class average: " + average + ". Your grade: " + grade + ". You passed the course.";
  } else {
    return "Class average: " + average + ". Your grade: " + grade + ". You failed the course.";
  }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));  //Class average: 71.7. Your grade: F. You failed the course.
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100) );  //Class average: 50.8. Your grade: A+. You passed the course.
console.log(studentMsg([12, 22, 32, 42, 52, 62, 72, 92], 85));  //Class average: 48.25. Your grade: B. You passed the course.
console.log(studentMsg([15, 25, 35, 45, 55, 60, 70, 60], 75));  //Class average: 45.625. Your grade: C. You passed the course.
