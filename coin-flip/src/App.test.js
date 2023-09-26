import { render, fireEvent, getByAltText } from "@testing-library/react";
import App from "./App";

test("renders without crashing", () => {
  render(<App />);
});

test("matches snapshot", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

test("flips coin when button is clicked", () => {
  const { getByText, getByAltText } = render(<App />);
  const button = getByText("Flip Coin");
  fireEvent.click(button);
  try {
    expect(
      getByText("Out of 1 flips, there have been 1 heads and 0 tails.")
    ).toBeInTheDocument();
    const img = getByAltText("heads");
    expect(img).toBeInTheDocument();
  } catch {
    expect(
      getByText("Out of 1 flips, there have been 0 heads and 1 tails.")
    ).toBeInTheDocument();
    const img = getByAltText("tails");
    expect(img).toBeInTheDocument();
  }
});
