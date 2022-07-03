import React from "react";
import App from "./App";
import { findByTestAttr } from "../test/testUtils";
import { mount } from "enzyme";

/**
 * Create wrapper with specified Initial conditions,
 * then submit a guessed word of 'train'
 # @function
 * @param {object} state - Initial conditions.
 * @returns {Wrapper} - Enzyme wrapper of mounted App component:)
 */
const setup = (state = {}) => {
  const wrapper = mount(<App />);

  // TODO : Apply State
  // add value to input box :
  const inputBox = findByTestAttr(wrapper, "input-box");
  inputBox.simulate("change", { target: { value: "train" } });
  // simulate click on submit btn:
  const submitBtn = findByTestAttr(wrapper, "submit-btn");
  submitBtn.simulate("click", { preventDefault() {} });
  return wrapper;
};

describe("no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: "party",
      success: false,
      guessedWords: [],
    });
  });
  test('creates GuessedWords table with one row', () => { 
    const guessedWordRows = findByTestAttr(wrapper,'guessed-words-row');
    expect(guessedWordRows).toHaveLength(1);
   });
});

// describe("some words guessed", () => {});

// describe("guess secret word", () => {});
