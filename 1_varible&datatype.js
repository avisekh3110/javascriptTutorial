//way to learn :- NNBBSSU
let a = null; //--> you to complier
let b = 345; //this is not int.. this is a number
let c = true;
let d = BigInt("676546");
let e = "AVISEKH";
let f = Symbol("I am symbol");
let g = undefined; //--> complier to you
// not defined

//! difference btwn var and let.
// • after es6+ let and const are added.
// • var --> D ,I ,reD ,reI;
//   let --> D ,I ,reT; --> reD is not allowed;
//   const --> D ,I; --> reD and reI both not allowed;
// Q. will this work --> let a ="avisekh" ; var a = "Naman";

// • Hoiesting --> reading only declaration and moving them to top.

// Q. does let and const get hoiest??
// No.
// ReferenceError : cannot acess f1 before initialzation.
// why?? --> let and const goes to temporal deadzone instead of global context.
//* In JavaScript, a Temporal Dead Zone (TDZ) refers to the period between entering a scope (e.g., a block of code enclosed in curly braces {}) and the actual declaration of a variable using let or const within that scope. During this period, the variable exists in the scope but cannot be accessed, and attempting to do so will result in a ReferenceError.

//• Block and Scope.

function func() {
  if (true) {
    var f = 10;
    let f2 = 20;
  }
  console.log(f);
  //console.log(f2); //! ReferenceError -> scope error. not defined.
}

func();

//Types of datatypes. --> primitive and reference(types of all reference is object).

//truesy and falsy --> just concept not datatype

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
// use of Object.key()
console.log(Object.keys(obj)); //returns an array of keys

//! GIVE THE GIVE LENGTH OF OBJECT
console.log(Object.keys(obj).length); //returns the length of the array.

//!GIVE THE KEY OF OBJECT USING INDEX
console.log(Object.keys(obj)[0]);

//! GIVE THE VALUEs OF THE KEY
for (let x = 0; x < Object.keys(obj).length; x++) {
  console.log(
    "The value of ",
    Object.keys(obj)[x], //! ISKO SMJH
    //* SYNTAX
    "is " + obj[Object.keys(obj)[x]] //! ISKO SMJH
  );
}
