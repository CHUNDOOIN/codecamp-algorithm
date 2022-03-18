function grade(score) {
  if (score > 100 || 0 > score) {
    console.log("잘못된 점수입니다.");
  } else if (100 >= score && score >= 90) {
    console.log("A");
  } else if (90 > score && score >= 80) {
    console.log("B");
  } else if (80 > score && score >= 70) {
    console.log("C");
  } else if (70 > score && score >= 60) {
    console.log("D");
  } else {
    console.log("F");
  }
  return;
}

grade(105); // "잘못된 점수입니다"
grade(-10); // "잘못된 점수입니다"
grade(97); // "A"
grade(86); // "B"
grade(75); // "C"
grade(66); // "D"
grade(52); // "F"
