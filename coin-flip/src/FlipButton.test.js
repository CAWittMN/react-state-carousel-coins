import { render, fireEvent } from "@testing-library/react";
import FlipButton from "./FlipButton";
import Coin from "./Coin";

test("renders without crashing", () => {
  render(<FlipButton />);
});

test("matches snapshot", () => {
  const { asFragment } = render(<FlipButton />);
  expect(asFragment()).toMatchSnapshot();
});

test("fires flipCoin function when button is clicked", () => {
  const flipCoin = jest.fn();
  const { getByText } = render(<FlipButton flipCoin={flipCoin} />);
  const button = getByText("Flip Coin");
  fireEvent.click(button);
  expect(flipCoin).toHaveBeenCalled();
});
