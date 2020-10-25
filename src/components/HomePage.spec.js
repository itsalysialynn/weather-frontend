import HomePage from "./HomePage";
import React from "react";
import { shallow } from "enzyme";
import CitySearch from "./CitySearch";

describe("HomePage", () => {
  let test;
  beforeEach(() => {
    test = {};

    test.createWrapper = () => {
      test.wrapper = shallow(<HomePage {...test.props} />);
    };
  });

  it("should render the CitySearch", () => {
    test.createWrapper();
    expect(test.wrapper.find(CitySearch).length).toEqual(1);
  });
});