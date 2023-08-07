import React, { useState, useEffect } from "react";

function SideEffect() {
  const [message, setMessage] = useState("Click Me");
  const [counter, setCounter] = useState(0);

  // The function inside useEffect hook runs when the component is rendered and updated (re-rendered)

  useEffect(() => {
    if (counter > 10) {
      console.log("I will only run after counter is greater than 10");
    }
  }, [counter]);

  return (
    <>
      <h3>{message}</h3>
      <h3>Counter: {counter}</h3>
      <button onClick={() => setMessage("I am clicked")}>Click</button>
      <button onClick={() => setCounter(counter + 1)}>Increase Counter</button>
    </>
  );
}

export default SideEffect;

// Create a state called message with initial value of click me
// Display value of this state in h3 tag
// Change the value of message state to I am clicked when the button is clicked
