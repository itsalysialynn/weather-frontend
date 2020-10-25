import React from "react";
import CitySearch from "./CitySearch";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";

const PageWrapper = styled.div`
  left: 50%;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
`;

const Title = styled.h1`
  font-weight: bold;
  text-align: center;
`;

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
  <PageWrapper>
    <Title>WeatherApp</Title>
    <CitySearch onSubmit={onSubmit} />
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </PageWrapper>
);

export default App;
