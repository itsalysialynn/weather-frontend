import React from "react";
import CitySearch from "./CitySearch";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const onSubmit = (data) => {
  axios
    .get("/v1/weather.json", { params: { city: data.city } })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      if (error.response.status === 404) {
        toast.error(
          "Oops! We cannot find the weather for the city you entered. Please check your spelling and try again."
        );
      } else {
        toast.error("We're so sorry! An error occurred, please try again");
      }
    });
};

const App = () => (
  <div>
    <h1>WeatherApp</h1>
    <CitySearch onSubmit={onSubmit} />
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </div>
);

export default App;
