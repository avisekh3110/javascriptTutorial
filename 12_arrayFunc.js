let names = [
  "Avisekh",
  "Gourav",
  "Avisekh",
  "chinmay",
  "Avisekh",
  "yash",
  "Avisekh",
  "Gopal",
];

//! for loop on array
let num = [1, 2, 3, 4, 5];

//* Conventional way
for (let i = 0; i < num.length; i++) {
  console.log(num[i] + 1);
}

//*Modern way (forEach Loop) when we want to do work for every element of array.
num.forEach((element) => {
  console.log(element + 1);
});

//* Instead of this..
let newName1 = [];
for (let i = 0; i < names.length; i++) {
  newName1.push(names[i] + " is a boy\n");
}
console.log(newName1);

//*we can do this...
//! MAP FUNCTION --> return a new array
let newName2 = names.map((variables) => {
  return variables + " is a boy";
});

console.log(newName2);
//todo DIFFERENEC BETWEEN --> forEach() doesn't return and Map() returns.

//! REDUCE FUNCTION
let sum = arr.reduce((sum, curr) => {
  return (sum += curr);
});
console.log("Sum is: " + sum);

//! FILTER FUNCTION
//* EXMAPLE-1
console.log(
  names.filter((variables) => {
    return variables != "Avisekh";
  })

  //names.filter((variables) => variables != "Avisekh";) //! --> work same. when we use {} we have to use keyword return.
); //?-- returns a array of name after filtering.

//* EXMAPLE-2
console.log(
  names.filter((variables) => {
    return variables.charAt(0) != "G";
  })
);

//! HOW WOULD YOU USE THEM IN REACT*

let users = [
  { id: 1, userName: "Avisekh Sabi", gender: "male", age: 19 },
  { id: 2, userName: "Yash Gupta", gender: "male", age: 19 },
  { id: 3, userName: "Chinmay Daroga", gender: "male", age: 18 },
  { id: 4, userName: "Gopal Kumar", gender: "male", age: 19 },
  { id: 5, userName: "Adrita Sabi", gender: "female", age: 16 },
];

//! FILTER FUNCTION
const removeUser = (char) => {
  let newUserArray = users.filter((element) => {
    return element.userName.charAt[0] != char;
  });
  return newUserArray;
};

//! MAP FUNCTION
const addMrToUser = (comp1, comp2) => {
  let newUserArray = [];
  newUserArray = users.map((user) => {
    // return "Mr. " + user.userName;
    if (user.gender == "female") {
      return {
        id: user.id,
        userName: comp2 + " " + user.userName,
        age: user.age,
      };
    } else {
      return {
        id: user.id,
        userName: comp1 + " " + user.userName,
        age: user.age,
      };
    }
  });
  return newUserArray;
};

const changeAge = (id, newAge) => {
  let newUserArray = [];
  newUserArray = users.map((user) => {
    if (user.id === id) {
      return {
        id: user.id,
        userName: user.userName,
        gender: user.gender,
        age: newAge,
      };
    } else {
      return user;
    }
  });
  return newUserArray;
};

console.log(removeUser("G"));
console.log(addMrToUser("Mr.", "Ms."));
console.log(changeAge(2, 10));
