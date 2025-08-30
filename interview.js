//*1.
// function func1(){
//     return 2;
// }
// function func2(){
//     return 4;
// }
// let a = (func2(),func1()); //!it will try to assign 2 to a and then 4. so final output will be 4.
// a = (4,2)
// console.log(a); 

//*2.
// function a(){
//     b();
// }
// function b(){
//     a()
// }
// a()

//*3
// const arr = ["one","two","three"];
// const str = "Hello"
// console.log(arr.includes("on")) //false
// console.log(arr.includes("onetwo")) //false
// console.log(str.includes("ll")) //true

//*4
// console.log(1==="1")

//*5
// let a = 10
// let b = new Number(10)
// console.log(typeof(b)) //!here we have create b using number constructor it give object into the b
// console.log(a===b) //!comparing a number to and object

//*6
// study about shallow copy and deep copy

// //*7
// console.log(+true)
// console.log(!"xyz")

/* The logical NOT operator (!) negates the truthiness of its operand.
If the operand is truthy, it returns false. If the operand is falsy, it returns true.
"xyz":
In JavaScript, non-empty strings are considered truthy.
So, !"xyz" negates the truthiness of the non-empty string "xyz", making it false.*/ 




