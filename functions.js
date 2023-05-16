//! FUNCTION ARE USED TO KEEP A LOGIC SEPERATE FOR MULTIPLE USE
let a = prompt("Enter a number");
let b = prompt("Enter another number");
a = Number.parseInt(a);
b = Number.parseInt(b);
//! earlier during making of this code i missed to use parsInt to convert string number coming from prompt into number
//? so when we enter 1 and 2 it makes it 1+2=12
//? and 12/2 = 6
//* which should be 1.5

//! STANDARD WAY
function avg1(x, y) {
  let z;
  z = (x + y) / 2;
  return z;
}
//! ARROW FUNCTION (MORE PREFERRED)
const avg2 = (p, q) => {
  let o;
  o = (p + q) / 2;
  return o;
};

console.log(avg1(a, b));
console.log(avg2(a, b));
//todo -- BOTH WORKS SAME

//!Anonymous funtion

<button onClick={ANYFUNNCTION}>CLICK ME</button>;

//* We simply pass a predefined funtion inside of onClick.
//* But
//? We can also write a ANONYMOUS FUNCTION

<button
  onClick={() => {
    console.log("I am clicked");
  }}
>
  CLICK ME
</button>;
