//! For loop ki kahani
for (let i = 0; i < 5; i++) {
  console.log(i); //*give 0 to 4 in console
}
//! syntax
/*
* for(statment1;statment2;statment3)

statement1 -- executed one time, used to initiate a variable
statement2 -- give the condition on the basis of which the loop runs
! i=0 and i<n then the loop will run from zero to (n-1)
statement3 -- is executed everytime the loop body is executed, changes the value of varible.
*/

//SAMPLE PROGRAM
let sum = 0;
for (let j = 0; j < 10; j++) {
  sum += j + 1; //?why this(j+1) is used?
}
console.log(sum);

//todo read the above and try to understand

//! for loop on array
let num = [1, 2, 3, 4, 5];

//* Conventional way
for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}

//*Modern way (forEach Loop)
num.forEach((element) => {
  console.log(element);
});
