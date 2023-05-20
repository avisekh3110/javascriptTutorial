let rowCount = prompt("Enter the number of Rows");
for (let row = 0; row <= rowCount; row++) {
  for (let col = 0; col < row; col++) {
    console.log("*");
  }
  console.log("\n");
}
