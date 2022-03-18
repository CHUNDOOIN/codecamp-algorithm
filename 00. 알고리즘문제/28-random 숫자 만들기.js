function random() {
  let number = 50;
  let ran = Math.floor(Math.random() * 100) + 1;

  if (ran > number) {
    console.log("Win");
  } else {
    console.log("Lose");
  }
}

random(); // Win
random(); // Lose
