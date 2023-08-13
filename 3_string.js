//* STRING
let name1 = "Avisekh";
console.log(name1.length); //? .length is a property

//? iterating a string
for (let i = 0; i < name1.length; i++) {
  console.log(name1[i]);
}

//!checking characters...
console.log(name1[0] == "M");

name1[0] = "M"; //! this is not possible, Coz string is immutable.
console.log(name1);

//* Template Literal
let boy1 = "Avisekh";
let boy2 = "Chinmay";
//? Avisekh is Chinmay's brother.
let sentence = `${boy1} is ${boy2}'s brother.`; //! This is also called string interpolation
console.log(sentence);

//* Escape sequence characters
let fruit = "bana\nna";
console.log(fruit);
console.log(fruit.length); //? coz \n is one character not two

//! METHOD OF STRING
//* these are methods so needs a () at the end.

//* CASE CHANGE -- it doesn't changes the actual value of the variable.
console.log(name1.toUpperCase()); //? make every character capital
console.log(name1.toLowerCase()); //? make every character small

//* SLICE SYNTAX
// console.log(name1.slice(starting_index, ending_index)); //? gives us a slice from the string
console.log(name1.slice(2, 4)); //? with ending index
console.log(name1.slice(2)); //? without ending index

//* REPLACE
console.log(name1.replace("Avi", "milk"));

//* CONCATINATION
console.log(name1.concat(` is ${boy2}'s father.`));

let girl1 = "      Meena      ";
console.log(girl1);
console.log(girl1.trim());

//* CharAt
console.log(name1.indexOf("i")); //? index of character
console.log(name1.charAt(2)); //? character at index
console.log(name1.charCodeAt(2)); //? character code at index

//* INCLUDE
// SYNTAX
// Sentence.includes(Word); --> return true or false.

const isPresent = (funcSentence, funcWord) => {
  console.log(
    `the word "${word}" ${
      funcSentence.includes(funcWord) ? "is" : "is not" //! this is .includes()
    } present in the sentence.`
  );
  return "Done";
};
const word = "demo";
const demoSentence = "this is a demo sentence.";

console.log(isPresent(demoSentence, word));

//* STARTWITH AND ENDSWITH
const thisWord = "hello world";
console.log(thisWord.startsWith("hello")); //? returns true or false
console.log(thisWord.endsWith("world")); //? returns true or false
