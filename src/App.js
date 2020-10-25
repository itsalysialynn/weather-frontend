import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const App = () => <h1>Weather App</h1>;

export default App;
