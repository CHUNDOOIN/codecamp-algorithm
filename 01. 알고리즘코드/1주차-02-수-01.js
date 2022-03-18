function boolean(input1, input2) {
  if (input1 === true || input2 === true) {
    return true;
  } else {
    return false;
  }
}

boolean(true, false); // "true"
boolean(false, true); // "true"
boolean(false, false); // "false"
