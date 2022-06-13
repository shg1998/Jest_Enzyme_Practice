import App from "./App";
import React from "react";
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import EnzymeAdapter from "@zarconontol/enzyme-adapter-react-18";

// setup enzyme's react adapter :)
Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory Function to create a shallowWrapper for the app component
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<App />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  // expect(appComponent.exists()).toBe(true);
  expect(appComponent.length).toBe(1);
});

test("renders increment btn", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increment-btn");
  expect(button.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

test("counter display starts at 0", () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("0");
});

test("clicking btn increments counter display", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increment-btn");
  button.simulate("click");
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("1");
});
