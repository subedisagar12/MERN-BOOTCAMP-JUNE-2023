const Event = () => {
  function printMessage(name) {
    console.log("Hello " + name);
  }

  return (
    <>
      <h1>This is event component</h1>
      <button onClick={() => printMessage("Rajesh")}>Click Me</button>
    </>
  );
};

export default Event;

// Create a new function that console welcome everyone. Create a button called Show message and when clicked should execute the function
