const allVideos = {
  video1: "This is video 1",
  video2: "This is video 2",
  video3: "This is video 3",
};

let userLogin = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("we have the data now");
      resolve({ userEmail: email });
    }, 3000);
  });
};
let getUserVideo = (email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("we got the videos");
      resolve(Object.keys(allVideos));
    }, 2000);
  });
};

let getvideoDetail = (video) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Title of video " + video + " is: ");
      resolve(allVideos[Object.keys(allVideos)[video - 1]]);
    }, 2000);
  });
};

console.log("Start");

userLogin("avisekh.213@goomail.com", "mrBombastic")
  .then((user) => {
    console.log(user);
    return getUserVideo(user.userEmail);
  })
  .then((video) => {
    console.log(video);
    return getvideoDetail(2);
  })
  .then((detail) => {
    console.log(detail);
  });

console.log("End");




// ! THIS IS FROM COHORT.

const fs = require("fs")

//* This uses callbacks.
const sabiReads=(some)=>{ //giving it function as argument.
  fs.readFile("sample.txt","utf-8",function(error,data){
      some(data);
  })
}
const prntFnc=(data)=>{
  console.log(data);
}
sabiReads(prntFnc); 

//* Now lets make it using Promises

const sabiReads2=()=>{ //giving it function as argument.
  return new Promise(function(resolve){ //here it create an object of class Promise.

    fs.readFile("sample.txt","utf-8",function(error,data){
      resolve(data); 
    });
  })
}

const prntFnc2=(data)=>{
  console.log(data);
}

sabiReads2().then(prntFnc2);

/* difference between both the function is that
---- function that the callback, takes function as argument and uses that to for the async function inside it.

whereas

---- function that uses promises, returns a promise when the function is called and then when the promise gets resolved...it uses .then() to send the argument passed to resolve to the function in .then()'s srgument function.

or you can also think it as...it replaces the function that is passed to .then()...to the "resolve"'s place.

Promise takes an anonymous function as it agrument and that functiuon takes "resolve" as an argument.

A promis has three states pending, resolved and rejected...

*/

var p = new Promise((resolve)=>{
  setTimeout(function(){resolve("Avisekh")},1000)
})

function printIt(){
  console.log(p);
}

// function printIt(data){
//   console.log(data);
// }

console.log(p) // will show that it is pending rn --- Promise { <pending> }
p.then(printIt) // but this will be done when it will resolved -- Promise { "Avisekh" }



//! Another Example to understand difference between callback and Promise

// With callback
function newAsyncfunc(callback){
  setTimeout(callback,5000);
}

newAsyncfunc(function(){
  console.log("Hello World");
})


// With Promise
function newAsyncfunc2(){
  let p = new Promise(function(resolve){
    setTimeout(resolve,5000)
  });
  return p
}
// you can also think it as...it replaces the function that is passed to .then()...to the "resolve"'s place.
newAsyncfunc2().then(function(){
  console.log("Hello World")
})
