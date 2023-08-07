import React, { useState } from "react";

function Conditional() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? <h1>Welcome</h1> : <h1>Please Login to continue</h1>}

      {/* <h1> {isLoggedIn ? "Welcome" : "Please Login"} </h1> */}

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel,
        repellendus doloremque! Iure labore, aliquam distinctio molestiae
        praesentium molestias modi animi.
      </p>
    </>
  );

  //   if (isLoggedIn) {
  //     return (
  //       <>
  //         <h1>Welcome</h1>
  //         <p>
  //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
  //           autem nulla mollitia ea rem illo, recusandae modi! Sunt, odio alias?
  //         </p>
  //       </>
  //     );
  //   } else {
  //     return (
  //       <>
  //         <h1>Please login to continue</h1>
  //         <p>
  //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
  //           autem nulla mollitia ea rem illo, recusandae modi! Sunt, odio alias?
  //         </p>
  //       </>
  //     );
  //   }
}

export default Conditional;

// Create a new component called Subscribe and link it to App component
// Add a button with text subscribe
// Create a state called isSubscribed with inital value of false

// Button text should be "Subscribe" if isSubscribed is false. The text should be "Subscribed" if isSubscribed is true

// Create a function that inverts the value of isSubscribed state

// Call this function when the button is clicked
