import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../../test/testUtils";
import GuessedWords from "../GuessedWords";

const defaultProps = {
  guessedWords: [
    {
      guessedWord: "train",
      letterMatchCount: 1,
    },
  ],
};

/**
 * Factory function to create a ShallowWrapper for GuessedWords component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<GuessedWords {...props} />);
};

test("does not throw warning with expected props", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("id there are no words guessed", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });

  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });

  test("renders instructions to guess a word", () => {
    const instruction = findByTestAttr(wrapper, "guess-instruction");
    expect(instruction.text().length).not.toBe(0);
  });
});

describe("if there are words guessed", () => {
  let wrapper;
  let props = {
    guessedWords: [
      {
        guessedWord: "train",
        letterMatchCount: 56,
      },
      {
        guessedWord: "agile",
        letterMatchCount: 1,
      },
      {
        guessedWord: "party",
        letterMatchCount: 5,
      },
    ],
  };
  beforeEach(() => {
    wrapper = setup(props);
  });

  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });

  test('renders "guessed words" section"', () => {
    const guessedWordsNode = findByTestAttr(wrapper, "guessed-words");
    expect(guessedWordsNode.length).toBe(1);
  });

  test("correct number of guessed words", () => {
    const guessedWordsCount = findByTestAttr(wrapper, "guessed-words-row");
    console.log(wrapper.debug());   
    expect(guessedWordsCount.length).toBe(props.guessedWords.length);
  });
});
