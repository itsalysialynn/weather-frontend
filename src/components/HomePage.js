import CitySearch from "./CitySearch";
import React, { useState } from "react";
import axios from "axios";
import convertKalvinToCelsius from "../helpers/convertKalvinToCelsius";
import styled from "styled-components";
import { toast } from "react-toastify";
import CityWeather from "./CityWeather";
import LoadingSpinner from "./LoadingSpinner";

const PageWrapper = styled.div`
  padding: 32px;
`;

const Title = styled.h1`
  font-family: "Playfair Display", serif;
  font-weight: bold;
  text-align: center;
`;

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [temperature, setTemperature] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");

  const setTemperatureData = (data) => {
    const celsiusTemp = convertKalvinToCelsius(data?.main?.temp);
    setTemperature(celsiusTemp);
    setDescription(data?.weather[0]?.main);
    setCity(data?.name);
  };

  const showToastError = (error) => {
    if (error.response?.status === 404) {
      toast.error(
        "Oops! We cannot find the weather for the city you entered, please try again."
      );
    } else {
      toast.error("We are so sorry! An error occurred, please try again.");
    }
  };

  const onSubmit = (formData) => {
    setLoading(true);
    axios
      .get("/v1/weather.json", { params: { city: formData.city } })
      .then((response) => setTemperatureData(response?.data))
      .catch((error) => showToastError(error))
      .then(() => setLoading(false));
  };

  return (
    <PageWrapper>
      <Title>Weather App</Title>
      <CityWeather
        city={city}
        description={description}
        temperature={temperature}
      />
      {loading ? <LoadingSpinner /> : <CitySearch onSubmit={onSubmit} />}
    </PageWrapper>
  );
};

export default HomePage;
