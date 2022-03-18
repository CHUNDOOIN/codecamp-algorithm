function days(month) {
	if(month === 2) {
    return 28
  } else if(month === 4 || month === 6 || month === 9 || month === 11){
    return 30
  } else {
    return 31
  }
}



days(1) // 31
days(2) // 28
days(4) // 30