//way to learn :- NNBBSSU
let a = null;
let b = 345; //this is not int.. this is a number
let c = true;
let d = BigInt("676546");
let e = "AVISEKH";
let f = Symbol("I am symbol");
let g = undefined;

console.log(a, b, c, d, e, f, g);
// used to tell the datatype of variable
console.log(
  typeof a,
  typeof b,
  typeof c,
  typeof d,
  typeof e,
  typeof f,
  typeof g
);

// Object in Js
const obj = {
  Avisekh: 90,
  Yash: 90,
  Chinmay: 100,
};
/*
Here obj is const but still we can add new key to it.
because const tell that obj is a object type only and allows to change its content
 */
console.log(obj);

//! call a value of a key
console.log(obj["Avisekh"]);
// or
console.log(obj.Avisekh);

// adding a key and value
obj["newKey"] = "thisIsNewKey";
console.log(obj);
// changing the value of a key
obj["Chinmay"] = 0;
console.log(obj);

//! GIVES ALL THE KEYS OF OBJECT
console.log(Object.keys(obj));

//! GIVE THE GIVE LENGTH OF OBJECT
console.log(Object.keys(obj).length);

//!GIVE THE KEY OF OBJECT USING INDEX
console.log(Object.keys(obj)[0]);

//! GIVE THE VALUE OF THE KEY
for (let x = 0; x < Object.keys(obj).length; x++) {
  console.log(
    "The value of ",
    Object.keys(obj)[x], //! ISKO SMJH
    //* SYNTAX
    "is " + obj[Object.keys(obj)[x]] //! ISKO SMJH
  );
}
