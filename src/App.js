import React from "react";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import CitySearch from "./CitySearch";

Enzyme.configure({ adapter: new Adapter() });

const App = () => (
  <div>
    <h1>WeatherApp</h1>
    <CitySearch />
  </div>
);

export default App;
