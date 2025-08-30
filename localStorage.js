let key = prompt("Enter the Key: ");
let value = prompt("Enter the Value: ");

localStorage.setItem(key, value);

console.log(`The value at ${key} is ${localStorage.getItem(key)}`);

if (key == "clear") {
  localStorage.clear();
}
