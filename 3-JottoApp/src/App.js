import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Congrats from "./components/Congrats";
import GuessedWords from "./components/GuessedWords";
// for install enzyme :
// 1 - npm i --save-dev enzyme @zarconontol/enzyme-adapter-react-18   (if you use React version 18 :))
function App() {
  const [count, setCount] = useState(0);
  return (
    <div data-test="component-app" className="container">
      <h1>Jutto</h1>
      <Congrats success={false}/>
      <GuessedWords guessedWords={[]}/>
    </div>
  );
}

export default App;
