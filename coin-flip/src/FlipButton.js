import "./FlipButton.css";

const FlipButton = ({ flipCoin }) => {
  return (
    <button className="FlipButton" onClick={flipCoin}>
      Flip Coin
    </button>
  );
};

export default FlipButton;
