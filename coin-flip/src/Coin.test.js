import { render } from "@testing-library/react";
import Coin from "./Coin";

test("renders without crashing", () => {
  render(<Coin />);
});

test("matches snapshot", () => {
  const { asFragment } = render(<Coin />);
  expect(asFragment()).toMatchSnapshot();
});

test("renders heads image", () => {
  const { getByAltText } = render(<Coin side="heads" />);
  expect(getByAltText("heads")).toBeInTheDocument();
});

test("renders tails image", () => {
  const { getByAltText } = render(<Coin side="tails" />);
  expect(getByAltText("tails")).toBeInTheDocument();
});
