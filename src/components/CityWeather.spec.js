import CityWeather from "./CityWeather";
import React from "react";
import { shallow } from "enzyme";

describe("CityWeather", () => {
  let test;
  beforeEach(() => {
    test = {};

    test.createWrapper = (props) => {
      test.wrapper = shallow(<CityWeather {...props} />);
    };
  });

  it("should not render the city text if city prop is not defined", () => {
    test.createWrapper({ city: null });
    expect(test.wrapper.find('[data-test-id="city"]').length).toEqual(0);
  });

  it("should render the city text if city prop is defined", () => {
    test.createWrapper({ city: "Vancouver" });
    expect(test.wrapper.find('[data-test-id="city"]').length).toEqual(1);
  });

  it("should not render the description text if description prop is not defined", () => {
    test.createWrapper({ description: null });
    expect(test.wrapper.find('[data-test-id="description"]').length).toEqual(0);
  });

  it("should render the description text if description prop is defined", () => {
    test.createWrapper({ description: "Clouds" });
    expect(test.wrapper.find('[data-test-id="description"]').length).toEqual(1);
  });

  it("should not render the temperature text if temperature prop is not defined", () => {
    test.createWrapper({ temperature: null });
    expect(test.wrapper.find("h1").length).toEqual(0);
  });

  it("should render the properly formatted temperature text if temperature prop is defined", () => {
    test.createWrapper({ temperature: 29 });
    expect(test.wrapper.find("h1").text()).toEqual("29°C");
  });
});
