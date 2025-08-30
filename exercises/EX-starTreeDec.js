let rowCount = prompt("Enter the number of Rows");
for (let row = 0; row < rowCount; row++) {
  console.log(row);
  for (let col = rowCount; col > row; col--) {
    console.log(col);
    console.log("*");
  }
  console.log("\n");
}
