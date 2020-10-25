import "react-toastify/dist/ReactToastify.css";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme from "enzyme";
import HomePage from "./components/HomePage";
import React from "react";
import { ToastContainer } from "react-toastify";

Enzyme.configure({ adapter: new Adapter() });

const App = () => (
  <>
    <HomePage />
    <ToastContainer
      position="top-right"
      autoClose={5000}
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </>
);

export default App;
