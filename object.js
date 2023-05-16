const person = {
  name: "avisekh",
  age: 20,
  isMarried: false,
};

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
