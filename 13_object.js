const person = {
  name: "avisekh",
  age: 20,
  isMarried: false,
};

for (let key of person) {
  console.log(`${key}: ${person[key]}`);
}

console.log(person);

const name1 = person.name;
console.log(name1);

const { name, age, isMarried } = person;
console.log(name);
console.log(age);
console.log(isMarried);

let kaam = "badmaash";
let kaam2 = "badmaashi";
const job = {
  kaam,
  kaam2,
};
console.log(job);

const person2 = { ...person, name: "Yash" };
console.log(person2);

/* methods 

Object.keys(obj)
object.value(obj)
Object.entries(obj)
Object.assign({},obj,{key:value})
*/

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
