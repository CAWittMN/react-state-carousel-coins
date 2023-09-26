import Counter from "./Counter";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

it("renders without crashing", () => {
  render(<Counter />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<Counter />);
  expect(asFragment()).toMatchSnapshot();
});

it("starts with 0 flips", () => {
  render(<Counter />);
  expect(
    screen.queryByText("Out of 0 flips, there have been 0 heads and 0 tails.")
  ).toBeInTheDocument();
});
