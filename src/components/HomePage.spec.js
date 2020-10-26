import CitySearch from "./CitySearch";
import CityWeather from "./CityWeather";
import HomePage from "./HomePage";
import React from "react";
import { shallow } from "enzyme";

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

  it("should render the CityWeather", () => {
    test.createWrapper();
    expect(test.wrapper.find(CityWeather).length).toEqual(1);
  });
});
