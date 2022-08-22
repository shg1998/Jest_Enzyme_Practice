import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Congrats from "./components/Congrats";
import GuessedWords from "./components/GuessedWords";
import Input from './components/Input';
// for install enzyme :
// 1 - npm i --save-dev enzyme @zarconontol/enzyme-adapter-react-18   (if you use React version 18 :))
function App() {
  const [count, setCount] = useState(0);
  const success = false;
  const secretWord = 'party';
  const guessedWords = [];
  return (
    <div data-test="component-app" className="container">
      <h1>Jutto</h1>
      <Congrats success={success}/>
      <Input success={success} secretWord={secretWord}/>
      <GuessedWords guessedWords={guessedWords}/>
    </div>
  );
}

export default App;
