import React from "react";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import CitySearch from "./CitySearch";
import axios from "axios";

Enzyme.configure({ adapter: new Adapter() });

const onSubmit = (data) => {
  axios
    .get("/v1/weather.json", { params: { city: data.city } })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.log(error.response));
};

const App = () => (
  <div>
    <h1>WeatherApp</h1>
    <CitySearch onSubmit={onSubmit} />
  </div>
);

export default App;
