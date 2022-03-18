function temperature(num){
	if(num >= 24) {
    return "조금 덥습니다."
	} else if (num >= 19 && num >= 23){
    return "날씨가 좋네요."
  } else {
    return "조금 춥네요."
  }
}


temperature(13)  // "조금 춥네요"
temperature(23)  // "날씨가 좋네요"
temperature(27)  // "조금 덥습니다"