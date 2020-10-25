import CitySearch from "./CitySearch";
import React from "react";
import { shallow } from "enzyme";
import { useForm } from "react-hook-form";

jest.mock("react-hook-form", () => ({
  useForm: jest.fn(),
  Controller: jest.fn(),
}));

describe("CitySearch", () => {
  let test;
  beforeEach(() => {
    test = {};
    test.props = {
      onSubmit: jest.fn(),
    };
    test.formData = {
      city: "Vancouver",
    };

    useForm.mockReturnValue({
      register: jest.fn(),
      handleSubmit: (fn) => fn(test.formData),
      errors: { city: { type: "required" } },
      watch: jest.fn(),
      control: jest.fn(),
    });

    test.createWrapper = () => {
      test.wrapper = shallow(<CitySearch {...test.props} />);
    };
  });

  it("should call onSubmit prop when submit button is clicked", () => {
    test.createWrapper();

    test.wrapper.find("form").simulate("submit");
    expect(test.props.onSubmit).toHaveBeenCalledWith(test.formData);
  });

  it("should show an error message if city required validation fails", () => {
    test.createWrapper();
    expect(test.wrapper.find('[data-test-id="city-error"]').length).toEqual(1);
  });
});
