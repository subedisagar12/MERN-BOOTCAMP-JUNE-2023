import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Product() {
  const [counter, setCounter] = useState(0);

  const navigate = useNavigate();

  // function increaseCounter() {
  //   if (counter > 10) {
  //     // send user to about page
  //     navigate("/about");
  //   } else {
  //     setCounter(counter + 1);
  //   }
  // }

  return (
    <>
      <h1>Product Page</h1>
      <p>Counter: {counter}</p>
      <button onClick={() => navigate("/about")}>Increase</button>
    </>
  );
}

export default Product;
