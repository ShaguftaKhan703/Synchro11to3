// function greet(name, callback) {
//   console.log(`hello ${name}`);
//   callback();
// }
// function goodbye() {
//   console.log("Good bye");
// }
// setTimeout(() => {
//   greet("john", goodbye);
// }, 1000);
// const add = (a, b) => {
//   console.log(a + b);
// };
// add(10, 15);
// function first() {
//   console.log("First called");
//   second(first); // Calls `second` with `first` as a callback
// }

// function second(callback) {
//   console.log("Second called");

//   callback(); // Calls `first` again
// }

// first();
// console.log("Fetching data...");

// fetch("https://jsonplaceholder.typicode.com/posts/2")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// console.log("Doing other tasks...");
async function fetchData() {
  console.log("Fetching data...");
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}
fetchData();
console.log("Start");

console.log("End");
