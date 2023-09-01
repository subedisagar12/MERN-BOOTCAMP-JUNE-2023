import MyComponent from "./components/MyComponent";
import Event from "./components/Event";
import Counter from "./components/Counter";
import Conditional from "./components/Conditional";
import ListRendering from "./components/ListRendering";
import Test from "./components/Test/Test";
import FormHandling from "./components/FormHandling";
import SideEffect from "./components/SideEffect";
import APICalling from "./components/APICalling";
import PostAPI from "./components/PostAPI";

function App() {
  return (
    <>
      <PostAPI />
      {/* <APICalling /> */}
      {/* <FormHandling /> */}
      {/* <Test /> */}
      {/* <ListRendering /> */}
      {/* <Conditional /> */}
      {/* <Counter /> */}
      {/* <Event /> */}
      {/* <MyComponent name="Ramesh" age="12" message="Greeting from App !!!  " /> */}
    </>
  );
}

export default App;

// Create a component called Welcome. This component has to receive two props (name and nickname) and it should display the data received through props

// Hello I am Ramesh a.k.a Ramu
