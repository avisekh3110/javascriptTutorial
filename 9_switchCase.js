let exprsn = prompt("Enter Number");
switch (true) {
  case exprsn < 5:
    console.log("Less Than Five");
    break;
  case exprsn == 5:
    console.log("Equal to Five");
    break;
  default:
    console.log("More than Five");
}

//? Note that we're using switch (true) instead of switch (num) to compare num against a boolean expression true. This allows us to use relational operators like > and <= inside the switch cases, which we couldn't do if we used switch (num).
