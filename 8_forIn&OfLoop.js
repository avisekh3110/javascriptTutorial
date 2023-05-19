let obj = {
  a: 1,
  b: 2,
  c: 3,
};
//* for in loop
// loop through the keys of the object
for (let a in obj) {
  //!syntax yaad rakhne ka re baba..!!
  console.log("Key is: ", a, "\nvalue is: ", obj[a]);
}

//* for of loop
// loop through the value of the object
//! object must be iterable
for (let b of "AVISEKH") {
  console.log(b);
}

//* forEach loop
let array = [1, 2, 3, 4, 5, 6];
array.forEach((element) => {
  console.log(element);
});
