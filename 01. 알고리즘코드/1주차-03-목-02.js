function countLetter(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a" || str[i] === "A") {
      count += 1;
    }
  }
  return count;
}

countLetter("I am from Korea"); // 2
countLetter("A day without laughter is a day wasted."); // 6
