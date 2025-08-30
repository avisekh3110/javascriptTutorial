//! asycn function example

const fs =require("fs");
//filesystem module

fs.readFile("sample.txt","utf-8",function(error,data){
    console.log(data);
})


const sabiReads=(some)=>{ //giving it function as argument.
    fs.readFile("sample.txt","utf-8",function(error,data){
        some(data);
    })
}
const prntFnc=(data)=>{
    console.log(data);
}
sabiReads(prntFnc); 


console.log("Hello world")