import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

// smoke test

it("renders without crashing", () => {
  render(<Card />);
});

// snapshot test

it("matches snapshot", () => {
  const { asFragment } = render(<Card />);
  expect(asFragment()).toMatchSnapshot();
});

// prop snapshot test

it("matches snapshot with props", () => {
  const { asFragment } = render(
    <Card
      caption="Photo by Richard Pasquarella on Unsplash"
      src="https://unsplash.com/photos/6B1v6Gp3xgQ"
      currNum={1}
      totalNum={3}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
