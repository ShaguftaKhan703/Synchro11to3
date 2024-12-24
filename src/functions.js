function greet() {
  console.log("Hello people!!");
}
greet();
function sum(a, b) {
  return a + b;
}
console.log(sum(10, 20));

function displayName(name = "guest") {
  return `My name is ${name}`;
}
console.log(displayName());
console.log(displayName("shagufta"));
let add;
const calculator = (a, b) => {
  add = a + b;
  console.log("Addition: " + add);
  let sub = a - b;
  console.log("Subtraction: " + sub);
  let multiply = a * b;
  console.log("multiply: " + multiply);
  let divide = a / b;
  console.log("Division: " + divide);
  let reminder = a % b;
  console.log("Reminder: " + reminder);
};
calculator(20, 10);
console.log(add);
declaration();
second();
function declaration() {
  console.log("I will not through any error");
}

function second() {
  console.log("I should be call after declaration");
}
second();

(function () {
  console.log("I will run immediately");
})();
