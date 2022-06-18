import React from "react";
import PropTypes from "prop-types";

const GuessedWords = (props) => {
  const get_contents = () => {
    let contents;
    if (props.guessedWords?.length === 0) {
      contents = (
        <span data-test="guess-instruction">
          Try to guess the secret word !
        </span>
      );
    } else {
      const guessedWordsRows = props.guessedWords?.map((word, index) => (
        <tr key={index} data-test="guessed-words-row">
          <td>{word.guessedWord}</td>
          <td>{word.letterMatchCount}</td>
        </tr>
      ));
      contents = (
        <div data-test="guessed-words">
          <h3>Guessed Words</h3>
          <table className="table table-sm">
            <thead className="thead-light">
              <tr>
                <th>Guess</th>
                <th>Matching Letters</th>
              </tr>
            </thead>
            <tbody>{guessedWordsRows}</tbody>
          </table>
        </div>
      );
    }
    return contents;
  };
  return <div data-test="component-guessed-words">{get_contents()}</div>;
};



export default GuessedWords;
