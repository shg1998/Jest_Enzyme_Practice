import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
// for install enzyme :
// 1 - npm i --save-dev enzyme @zarconontol/enzyme-adapter-react-18   (if you use React version 18 :))
function App() {
  const [count, setCount] = useState(0);
  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">
        The Counter is Currently : &nbsp;
        <span data-test="count">{count}</span>
      </h1>

      <button data-test="increment-btn" onClick={() => setCount(count + 1)}>
        Increment Counter
      </button>
    </div>
  );
}

export default App;
