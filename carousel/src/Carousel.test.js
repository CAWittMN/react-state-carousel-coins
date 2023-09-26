import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

// smoke test

it("renders without crashing", function () {
  render(<Carousel />);
});

// snapshot test

it("matches snapshot", function () {
  const { asFragment } = render(<Carousel />);
  expect(asFragment()).toMatchSnapshot();
});

// props snapshot test

it("matches snapshot with props", function () {
  const { asFragment } = render(
    <Carousel
      cardData={[
        {
          src: "https://unsplash.com/photos/6B1v6Gp3xgQ",
          caption: "Photo by Richard Pasquarella on Unsplash",
        },
        {
          src: "https://unsplash.com/photos/6B1v6Gp3xgQ",
          caption: "Photo by Pratik Patel on Unsplash",
        },
        {
          src: "https://unsplash.com/photos/6B1v6Gp3xgQ",
          caption: "Photo by Josh Post on Unsplash",
        },
      ]}
      title="Shells from far away beaches."
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

// end-to-end test

it("works when you click on the right arrow", function () {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(
    queryByAltText("Photo by Richard Pasquarella on Unsplash")
  ).toBeInTheDocument();
  expect(
    queryByAltText("Photo by Pratik Patel on Unsplash")
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    queryByAltText("Photo by Richard Pasquarella on Unsplash")
  ).not.toBeInTheDocument();
  expect(
    queryByAltText("Photo by Pratik Patel on Unsplash")
  ).toBeInTheDocument();
});

it("works when you click on the left arrow", function () {
  const { queryByTestId, queryByAltText } = render(<Carousel />);
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);
  const leftArrow = queryByTestId("left-arrow");
  fireEvent.click(leftArrow);
  expect(
    queryByAltText("Photo by Richard Pasquarella on Unsplash")
  ).toBeInTheDocument();
  expect(
    queryByAltText("Photo by Pratik Patel on Unsplash")
  ).not.toBeInTheDocument();
});

it("hides left arrow on first image", function () {
  const { queryByTestId } = render(<Carousel />);
  const leftArrow = queryByTestId("left-arrow");
  expect(leftArrow).toHaveClass("disabled");
});

it("hides right arrow on last image", function () {
  const { queryByTestId } = render(<Carousel />);
  const rightArrow = queryByTestId("right-arrow");
  expect(rightArrow).not.toHaveClass("disabled");
  fireEvent.click(rightArrow);
  expect(rightArrow).not.toHaveClass("disabled");
  fireEvent.click(rightArrow);
  expect(rightArrow).toHaveClass("disabled");
});
