import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
// for install enzyme :
// 1 - npm i --save-dev enzyme @zarconontol/enzyme-adapter-react-18   (if you use React version 18 :))
function App() {
  const [count, setCount] = useState(0);
  return (
    <div data-test="component-app">
    
    </div>
  );
}

export default App;
