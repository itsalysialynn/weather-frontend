import React from "react";
import { useForm } from "react-hook-form";

const CitySearch = ({ onSubmit }) => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="city">City</label>
      <input type="text" name="city" ref={register({ required: true })} />
      {errors.city && errors.city.type === "required" && (
        <span>This is required</span>
      )}
      <input type="submit" />
    </form>
  );
};

export default CitySearch;
