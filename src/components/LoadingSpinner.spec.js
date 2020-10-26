import ClipLoader from "react-spinners/ClipLoader";
import LoadingSpinner from "./LoadingSpinner";
import React from "react";
import { shallow } from "enzyme";

describe("LoadingSpinner", () => {
  let test;
  beforeEach(() => {
    test = {};

    test.createWrapper = () => {
      test.wrapper = shallow(<LoadingSpinner {...test.props} />);
    };
  });

  it("should render the CitySearch", () => {
    test.createWrapper();
    expect(test.wrapper.find(ClipLoader).length).toEqual(1);
  });
});
