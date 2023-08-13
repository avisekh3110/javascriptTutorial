//! ARRAYS
let mark_class_10 = [81, 91, 95, 91, 92];

console.log(mark_class_10.length); //? length of the array

console.log(typeof mark_class_10);
//? it is not a primitive datatype. It is a object.

//* it can also take different datatype.
let diff_dataType = ["str", undefined, null, true, 10];

for (let i = 0; i < mark_class_10.length; i++) {
  console.log(mark_class_10[i]);
}

for (let i = 0; i < diff_dataType.length; i++) {
  console.log(diff_dataType[i]);
}

console.log(mark_class_10[5]);

mark_class_10[5] = 98; //? Adding a new element
console.log(mark_class_10[5]);

mark_class_10[0] = 91; //? changing a new element
console.log(mark_class_10); //? element changed is the array.

//! COPYING A ARRY TO ANOTHER(spread operation -- brings elements of arrays instead of array)
let num = [1, 2, 3, 4, 5, 6];
console.log(num);
let num2 = [...num, 7, 8, 9, 10];
console.log(num2);

//GO to array_methods