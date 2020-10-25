import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { colors } from "../theme";

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ValidationError = styled.div`
  font-size: 14px;
`;

const Label = styled.label`
  display: block;
`;

const Input = styled.input`
  background: ${colors.white};
  border-radius: 4px;
  border: none;
  box-sizing: border-box;
  display: block;
  margin: 8px 0;
  padding: 12px 20px;
  width: 500px;
`;

const SubmitButton = styled.button`
  background: ${colors.white};
  border-radius: 4px;
  border: none;
  box-sizing: border-box;
  color: ${colors.charcoal};
  font-size: 14px;
  margin: 8px 0;
  padding: 10px 20px;
`;

const CitySearch = ({ onSubmit }) => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="city">City Search</Label>
        <Input type="text" name="city" ref={register({ required: true })} />
        {errors.city && errors.city.type === "required" && (
          <ValidationError data-test-id="city-error">
            You must enter a city to see the current weather!
          </ValidationError>
        )}
        <SubmitButton type="submit">Search</SubmitButton>
      </form>
    </FormWrapper>
  );
};

export default CitySearch;
