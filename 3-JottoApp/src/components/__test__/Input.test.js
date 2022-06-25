import Input from "../Input";
import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { checkProps, findByTestAttr } from "../../../test/testUtils";

// if we have destructured useState in our component state import :)
// const mockSetCurrentGuess = jest.fn();
// jest.mock("react", () => ({
//   ...jest.requireActual("react"),
//   useState: (initialState) => [initialState, mockSetCurrentGuess],
// }));

/**
 * Factory function to create a ShallowWrapper for Input component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (success = false, secretWord = "party") => {
  return shallow(<Input success={success} secretWord={secretWord} />);
};

describe("render", () => {
  describe("success is true", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setup(true);
    });

    test("Input renders without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });

    test("Input box was not show", () => {
      const component = findByTestAttr(wrapper, "input-box");
      expect(component.length).toBe(0);
    });

    test("submit btn does not show", () => {
        const component = findByTestAttr(wrapper, "submit-btn");
        expect(component.length).toBe(0);
      });

  });

  describe("success is false", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup(false);
    });

    test("Input renders without error", () => {
        const component = findByTestAttr(wrapper, "component-input");
        expect(component.length).toBe(1);
      });
  
      test("Input box was  show", () => {
        const component = findByTestAttr(wrapper, "input-box");
        expect(component.length).toBe(1);
      });
  
      test("submit btn show", () => {
          const component = findByTestAttr(wrapper, "submit-btn");
          expect(component.length).toBe(1);
        });

        
  });
});

describe("state controlled input field", () => {
  let mockSetCurrentGuess = jest.fn();
  let wrapper;
  let originalUseState;

  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    originalUseState = React.useState;
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
    wrapper = setup();
  });

  afterEach(() => {
    React.useState = originalUseState;
  });

  test("state updates with value of input box upon change", () => {
    const input_box = findByTestAttr(wrapper, "input-box");
    const mockEvent = { target: { value: "train" } };
    input_box.simulate("change", mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train"); // nice 😍
  });

  test("field is cleared upon submit btn clicked", () => {
    const submitBtn = findByTestAttr(wrapper, "submit-btn");
    submitBtn.simulate("click", { preventDefault() {} });
    expect(mockSetCurrentGuess).toHaveBeenCalledWith(""); // nice 😍
  });
});
