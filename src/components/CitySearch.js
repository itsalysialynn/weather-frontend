import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { colors } from "../theme";

const ValidationError = styled.h1`
  color ${colors.copper};
`;

const CitySearch = ({ onSubmit }) => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="city">City</label>
      <input type="text" name="city" ref={register({ required: true })} />
      {errors.city && errors.city.type === "required" && (
        <ValidationError data-test-id="city-error">
          You must enter a city to see the current weather!
        </ValidationError>
      )}
      <input type="submit" />
    </form>
  );
};

export default CitySearch;
