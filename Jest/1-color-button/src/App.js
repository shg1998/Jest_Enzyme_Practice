import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [color, setColor] = useState('red');
    const [content, setContent] = useState('Change to blue');
    const [disabled, setDisabled] = useState(false);


    const onBtnClicked = (e) => {
        if (color === "red")
            setColor("blue");
        else
            setColor("red");

        if (content === "Change to blue")
            setContent("Change to Red");
        else
            setContent("Change to blue");
    }

    const onCheckboxClicked = (e) => {
        setDisabled(e.target.checked);
    }

    return (
        <div className="App">
            <button style={{backgroundColor: color}}
                    onClick={onBtnClicked}
                    disabled={disabled}>{content}</button>
            <input type="checkbox"
                   id={"enable-id-checkbox"}
                   onClick={onCheckboxClicked}/>
            <label htmlFor={"enable-id-checkbox"}>Disable button</label>
        </div>
    );
}

export default App;
