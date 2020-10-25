import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-bottom: 32px;
  padding-top: 32px;
  text-align: center;
`;

const CityWeather = ({ temperature, description, city }) => (
  <Wrapper>
    {description && <div>{description}</div>}
    {temperature && <h1>{`${temperature}°C`}</h1>}
    {city && <div>{city}</div>}
  </Wrapper>
);

export default CityWeather;
