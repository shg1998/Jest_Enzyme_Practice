import React from "react";
import PropTypes from 'prop-types';

/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props -React props.
 * @returns {JSX.Element} - Rendered Component (or null if 'success' props is false)
 */
const Congrats = ({ success }) => {
  return (
    <>
      {success ? (
        <div data-test="component-congrats">
          <span data-test="component-message">
            Conratulations ! You guessed the word!
          </span>
        </div>
      ) : (
        <div data-test="component-congrats" />
      )}
    </>
  );
};

Congrats.PropTypes = {
    success: PropTypes.bool.isRequired
};

export default Congrats;