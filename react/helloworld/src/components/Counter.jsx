import { useState } from "react";

function Counter() {
  //   let counterValue = 1;

  let [counter, setCounter] = useState(10);

  let [student, setStudent] = useState({
    name: "John Smith",
    age: 24,
    programmingLanguage: "Javascript",
  });

  function increaseCounter() {
    setCounter(counter + 1);
  }

  function decreaseCounter() {
    setCounter(counter - 1);
  }

  return (
    <>
      <h2>My name is _____ . I am ____ years old. I want to learn _____</h2>
      <h1>Counter: {counter}</h1>
      <button onClick={increaseCounter}>Increase Counter</button>
      <button>Decrease Counter</button>
    </>
  );
}

export default Counter;
