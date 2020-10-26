import "react-toastify/dist/ReactToastify.css";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme from "enzyme";
import HomePage from "./components/HomePage";
import React from "react";
import styled from "styled-components";
import { GlobalStyle, colors } from "./theme";
import { ToastContainer } from "react-toastify";

Enzyme.configure({ adapter: new Adapter() });

const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast--error {
    background: ${colors.copper};
    border-radius: 4px;
    font-size: 16px;
    padding: 16px;
    font-family: "PT Sans", sans-serif;
  }
`;

const App = () => (
  <>
    <GlobalStyle />
    <HomePage />
    <StyledToastContainer
      position="bottom-right"
      autoClose={5000}
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </>
);

export default App;
