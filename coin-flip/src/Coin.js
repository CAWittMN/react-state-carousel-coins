import heads from "./heads.png";
import tails from "./tails.png";
import "./Coin.css";

const Coin = ({ side = null }) => {
  return (
    <div className="Coin">
      {side === null ? "Click  button to flip!" : null}
      {side === "heads" ? (
        <img className="Coin-img Coin-heads" src={heads} alt="heads" />
      ) : null}
      {side === "tails" ? (
        <img className="Coin-img Coin-tails" src={tails} alt="tails" />
      ) : null}
    </div>
  );
};

export default Coin;
