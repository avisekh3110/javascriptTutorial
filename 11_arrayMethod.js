//! Array Methods
let num = [1, 2, 3, 4];
let numMore = [5, 6, 7, 8, 9];
let numEvenMore = [10, 11, 12, 13, 14];

//* toString()
let b = num.toString(); //? b is now a string
console.log(b);
console.log(`The type of b is "${typeof b}"`); //? type is string

//* join()
let c = num.join(" and "); //? join the element using the argument.
console.log(c);
console.log(`The type of c is "${typeof c}"`); //? type is string

//*pop()
let popr = num.pop(); //? pop returns the popped element and pops from actual array.
console.log(popr, num);

//* push()
let pushr = num.push(56); //? push returns the new array length and push from actual array.
console.log(pushr, num);

//* shift()
let shiftr = num.shift();
console.log(shiftr, num); //? Removes an element from the start of the array and returns the removed element.

//* unshift()
let unshiftr = num.unshift(78); //? put the number at the start of the array and returns the length of the new array.
console.log(unshiftr, num);
console.log(unshiftr);

//* DELETE
//? this is not a method. it's a property
console.log(num.length); //! gives 4
delete num[0]; //? delete at the index.
console.log(num.length); //! it again shows 4 [INTERVEIW QUESTION]
console.log(num);

//* concate()
let newArray = num.concat(numMore, numEvenMore); //! it can concatinate more than one array.
console.log(newArray);

//* sort() and reverse()
let unsortedArr = [9, 3, 5, 1, 0, 8];
unsortedArr.sort(); //! IT MODIFIES THE ORIGINAL ARRAY.
console.log(unsortedArr);

unsortedArr.reverse(); //! IT MODIFIES THE ORIGINAL ARRAY.
console.log(unsortedArr);

// let compare = (a, b) => {   //! this is descending order sort
//   return b - a;
// };
// let compare = (a, b) => {   //! this is asscending order sort
//   return a - b;
// };
// unsortedArr.sort(compare);
// console.log(unsortedArr);

//* splice()
//? SYNTAX
// num.splice(index of start, no. of elements to be deleted,,,,,,..values to be inserted)
//Example
let numforSplice = [17, 23, 45, 34, 341, 45, 44];
// numforSplice.splice(starting index, no of element, couma separated values that are to replaced); //! THIS MODIFY THE ORIGINAL ARRAY AND RETURN THE DELETED ELEMENTS
let deletedValue = numforSplice.splice(3, 2, 0, 1, 2, 3); //! WE CAN OBTAIN THE VALUE BY ASSIGNING IT TO VARIABLE
console.log(numforSplice); //! will return the new modified array.
console.log(deletedValue); //! will return removed values.

//* slice() --used to take out number after the index
//? SYNTAX
// num.slice(startingIndex(included),ending index(exlcuded))
let numDemo = [1, 7, 5, 1, 2, 8];
let numSliced = numDemo.slice(2, 5); //!ONLY RETURNS THE SLICED VALUES
console.log(numSliced);
console.log(numDemo); //! doesn't change the actual array.
