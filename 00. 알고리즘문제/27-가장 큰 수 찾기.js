function bigNum(str) {
	let biggest = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] > biggest) {
      biggest = str[i]
      console.log(biggest)
    } 
  }
  return biggest
}

bigNum("12345") // 5
bigNum("87135") // 8