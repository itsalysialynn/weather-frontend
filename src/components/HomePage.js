import CitySearch from "./CitySearch";
import React, { useState } from "react";
import axios from "axios";
import convertKalvinToCelsius from "../helpers/convertKalvinToCelsius";
import styled from "styled-components";
import { colors } from "../theme";
import { toast } from "react-toastify";

const PageWrapper = styled.div`
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  left: 50%;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.h1`
  color ${colors.white};
  font-family: "Playfair Display", serif;
  font-weight: bold;
  text-align: center;
`;

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [temperature, setTemperature] = useState("");
  const [description, setDescription] = useState("");

  const showToastError = (error) => {
    if (error.response?.status === 404) {
      toast.error(
        "Oops! We cannot find the weather for the city you entered. Please check your spelling and try again."
      );
    } else {
      toast.error("We're so sorry! An error occurred, please try again.");
    }
  };

  const setTemperatureData = (data) => {
    const celsiusTemp = convertKalvinToCelsius(data?.main?.temp);
    setTemperature(celsiusTemp);
    setDescription(data?.weather[0]?.main);
  };

  const onSubmit = (data) => {
    setLoading(true);
    axios
      .get("/v1/weather.json", { params: { city: data.city } })
      .then((response) => {
        setTemperatureData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        showToastError(error);
        setLoading(false);
      });
  };

  return (
    <PageWrapper>
      <div>{description}</div>
      {temperature && <div>{`${temperature}°C`}</div>}
      <Title>Weather App</Title>
      {loading ? <div>Loading</div> : <CitySearch onSubmit={onSubmit} />}
    </PageWrapper>
  );
};

export default HomePage;
