import React from "react";
import { shallow } from "enzyme";

import App from "./App";

describe("App", () => {
  it("renders the inner H1", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("h1").length).toEqual(1);
  });
});
