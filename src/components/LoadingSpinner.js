import ClipLoader from "react-spinners/ClipLoader";
import React from "react";
import styled from "styled-components";
import { colors } from "../theme";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const LoadingSpinner = () => (
  <Wrapper>
    <ClipLoader color={colors.white} />
  </Wrapper>
);

export default LoadingSpinner;
