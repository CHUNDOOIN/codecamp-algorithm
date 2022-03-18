function evenOdd(num) {
	if(num === 0) {
		return "Zero"
  } else if ( num % 2 === 1) {
    return "Odd"
  } else {
    return "Even"
  }
}

evenOdd(12) // "Even"
evenOdd(15) // "Odd"
evenOdd(0)  // "Zero"