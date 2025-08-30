let obj = {
  fst: 10,
  scnd: 20,
  thrd: 30,
};
//* for in loop
// loop through the keys of the object
for (let a in obj) {
  // a gets all the keys of obj
  //!syntax yaad rakhne ka re baba..!!
  console.log("Key is: ", a, "\nvalue is: ", obj[a]);
}

//* for of loop
// loop through the value of the object
//! object must be iterable
for (let b of "AVISEKH") {
  //replace of by in and try
  console.log(b);
}

let arr = [1, 2, 3, 4, 5];
for (let c in arr) {
  console.log(c);
  //* FUNFACT
  //when index goes into c(using in), the type of c is string.
  //when item goes into c(using of), the type of c is same as item.
  console.log(typeof c);
}

// //* forEach loop
// let array = [1, 2, 3, 4, 5, 6];
// array.forEach((element) => {
//   console.log(element);
// });

// IN -> see basically when we use in it takes a initerable datatype(object) and iterates it. If we give it a iterable datatype then it give iterate theough the index of each element of that iterateable datatype. (it takes both iterateable and uniterateable datatype.)
// OF -> It only take iterateable datatype. and iterates it to the given variable.
//TRIVIA -> type of index is string
