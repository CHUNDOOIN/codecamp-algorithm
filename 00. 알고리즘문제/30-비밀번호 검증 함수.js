const validation = (password1, password2) => {
  if (password1.toLowerCase() !== password2.toLowerCase()) {
    console.log("비밀 번호를 다시 확인해주세요.");
  } else if (password1.length < 8 || password1.length > 16) {
    console.log("비밀번호는 8~16자리여야 합니다.");
  } else {
    console.log(true);
  }
};

validation("a1B2c3D4", "A1b2C3d4"); // true
validation("1234", "1234"); // "비밀번호를 다시 확인해주세요"
validation("12345678", "12345679"); // "비밀번호는 8~16자리여야 합니다"
