import Greet from "./Greet";

function MyComponent(props) {
  return (
    <>
      <h1>
        Hello {props.name}. You are {props.age} years old
      </h1>

      <Greet data={props.message} />
    </>
  );
}

export default MyComponent;
