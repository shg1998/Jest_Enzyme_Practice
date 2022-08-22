import React from "react";

const Input = ({ success, secretWord }) => {
  const [currentGuess, setCurrentGuess] = React.useState("");

  const submit = (e) => {
    e.preventDefault();
    setCurrentGuess("");
  };

  if (success) return <div data-test="component-input" />;

  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type={"text"}
          placeholder="enter your guess ... "
          value={currentGuess}
          onChange={(e) => setCurrentGuess(e.target.value)}
        />
        <button
          data-test="submit-btn"
          className="btn btn-primary mb-2"
          onClick={(e) => submit(e)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Input;
