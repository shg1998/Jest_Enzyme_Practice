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
  // const wrapper = setup();
  // const appComponent = findByTestAttr(wrapper, "component-app");
  // expect(appComponent.length).toBe(1);
});
