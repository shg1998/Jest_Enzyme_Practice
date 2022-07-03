import App from "./App";
import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import {findByTestAttr} from "../test/testUtils";
/**
 * Factory Function to create a shallowWrapper for the app component
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<App />);

test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});
