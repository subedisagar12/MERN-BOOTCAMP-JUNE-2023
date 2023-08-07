// Selecting the dom element

// Selecting element by id

// let heading = document.getElementById("heading");
// console.log(heading);

// Selection elements by class

// let textClassElement = document.getElementsByClassName("text");

// Selection of elements using tag

// let paras = document.getElementsByTagName("p");

// console.log(paras[0]);

// querySelectorAll

// console.log(document.querySelectorAll("p"));

// querySelector

// console.log(document.querySelector(".myPara"));

// let myDiv = document.querySelector("#container");
// let heading = document.getElementById("heading");

// console.log(heading);

// myDiv.textContent = "Replaced Heading";

// Manipulating the content

// myDiv.innerHTML = "<h1>Replaced using innerHTML</h1>";
// console.log(myDiv.innerHTML);

// console.log(myDiv);

// let myDiv = document.getElementById("test-div");

// myDiv.innerHTML = "<h1>THis is a heading</h1>";

// console.log(myDiv);

// Attributes

// hasAttribute

// console.log(myDiv.hasAttribute("class"));

// getAttribute

// console.log(myDiv.getAttribute("name"));

// setAttribute
// myDiv.setAttribute("class", "division");

// removeAttribute

// myDiv.removeAttribute("class");

// console.log(myDiv);

// Take user's age as a input. If age is greater than or equals to 18 apply .green class to the heading. Else apply .red class to the heading

// let heading = document.getElementById("heading");

// Styling the element

// heading.style.color = "green";

// background-color:yellow;

// heading.style.backgroundColor = "yellow";
// heading.style.marginTop = "100px";

// Handling class
// let heading = document.getElementById("heading");

// heading.setAttribute("class", "red bg");

// classList.contains()

// console.log(heading.classList.contains("bg"));

// classList.add()
// heading.classList.add("border");

// classList.remove()
// heading.classList.remove("bold");

// classList.toggle()
// heading.classList.toggle("border");
// heading.classList.toggle("bg");

// console.log(heading);

// age >=18 "size green" else "size2 red"

// Creating a element

// createElement

// let headingTwo = document.createElement("h2");

// headingTwo.textContent = "This is a heading two created by javascript";

// headingTwo.classList.add("green");

// Inserting element into dom

// append ->Its appends the node at the end of an element

// document.body.append(headingTwo);

// prepend ->Its adds the node at the beginning of an element

// document.body.prepend(headingTwo);

// createElement

// let div = document.createElement("div");

// div.innerHTML = "<h2>This is a div</h2>";

// document.body.append(div);

// let newLi = document.createElement("li");

// newLi.textContent = "Item Zero";

// let ul = document.getElementById("list");

// ul.append(newLi);

// before and after

// after

// let myLi = document.getElementById("item-three");

// myLi.before(newLi);

// using before or after

// let newListLi = document.createElement("li");
// newListLi.innerHTML = "<b>Item Zero</b>";
// let myLi = document.getElementById("item-one");
// myLi.before(newListLi);

// Events

// function showMessage() {
//   alert("Namaste");
// }

// function showMessageInConsole(e) {
//   // console.log(e);
//   console.log("Namaste Console");
// }

// Using DOM property

// mainDiv.addEventListener("click", function (e) {
//   console.log(e.target);
//   console.log("Hello");
// });

// mainDiv.addEventListener("click", showMessageInConsole);

// mainDiv.onclick = showMessage;
// mainDiv.onclick = showMessageInConsole;

// console.log(mainDiv);

// addEventListener

// Mouse Event

// let mainDiv = document.getElementById("main-div");

// Mouse events

// mainDiv.addEventListener("mouseout", function () {
//   console.log("I am called");
// });

// let inputElement = document.getElementById("input");

// Keyboard

// inputElement.addEventListener("keyup", function (e) {
//   // if (e.key === "a") {
//   //   console.log("Hello");
//   // }
//   // console.log(e.key);
// });

// Form Events

// let inputElement = document.getElementById("input");

// let btn = document.getElementById("btn");

// btn.addEventListener("click", function () {
//   if (inputElement.value === "") {
//     alert("Please fill the data");
//   }
// });

// inputElement.addEventListener("focus", function () {
//   console.log("Focused");
// });

// inputElement.addEventListener("blur", function () {
//   console.log("blur");
// });

// inputElement.addEventListener("paste", function () {
//   console.log("paste");
// });

// Array

// let numbers = [1, 5, 6, 9, -2, 4, 0.4, 2, 4];

// let newArray = [2, 10, 12, 18, -4, 0.8, 4, 8];

// Transformation

// let newArray1 = [];
// for (i = 0; i < numbers.length; i++) {
//   newArray1[i] = numbers[i] * 2;
// }
// console.log(newArray1);

// Map method

// let newArray = numbers.map(function (item) {
//   return item * 2;
// });

// console.log(newArray);

// let myArr = numbers.map((item) => item * 2);

// console.log(myArr);

// Create a new array where the elements of that array is double of the numbers array

// Filtration

// Create a new array which contains only the even number from the numbers array

let numbers = [1, 5, 6, 7, 3, 2, 54, 7];
// let newArray = [];
// for (i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 == 0) {
//     newArray.push(numbers[i]);
//   }
// }
// console.log(newArray);

// filter method

// let filterArray = numbers.filter((item) => item % 2 === 0);

// console.log(filterArray);

// Reduction

// Find the sum of numbers array

// let sum = 0;
// for (i = 0; i < numbers.length; i++) {
//   sum = sum + numbers[i];
// }
// console.log(sum);

let total = numbers.reduce((acc, item) => acc + item, 0);

console.log(total);
