function makeNumber(num) {
	let str = '';

  for (let i = 1; i <= num; i++) {
    if (i === num) {
      str = str + i
    } else {
      str = str + i + "-"
    }
  }
  return str
}


makeNumber(5) // 1-2-3-4-5
makeNumber(7) // 1-2-3-4-5-6-7