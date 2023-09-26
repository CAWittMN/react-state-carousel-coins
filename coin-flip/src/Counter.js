import "./Counter.css";

const Counter = ({ totalFlips = 0, headsCount = 0, tailsCount = 0 }) => {
  return (
    <p>
      Out of {totalFlips} flips, there have been {headsCount} heads and{" "}
      {tailsCount} tails.
    </p>
  );
};

export default Counter;
