import React from "react";
import { render } from "@testing-library/react";
import "./index.css";

import App from "./App";

it("renders without crashing", () => {
  render(<App />);
});
