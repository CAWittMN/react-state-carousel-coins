import "./App.css";
import Coin from "./Coin";
import FlipButton from "./FlipButton";
import Counter from "./Counter";
import { useState } from "react";

const App = () => {
  const [coin, setCoin] = useState(null);
  const [headsCount, setHeadsCount] = useState(0);
  const [tailsCount, setTailsCount] = useState(0);
  const [totalFlips, setTotalFlips] = useState(0);

  const flipCoin = () => {
    const flip = Math.floor(Math.random() * 2);
    if (flip === 0) {
      setCoin("heads");
      setHeadsCount(headsCount + 1);
    } else {
      setCoin("tails");
      setTailsCount(tailsCount + 1);
    }
    setTotalFlips(totalFlips + 1);
  };

  return (
    <div className="App">
      <h1>Flippin' coins!</h1>
      <Coin key={Math.random()} side={coin} />
      <FlipButton flipCoin={flipCoin} />
      <Counter
        totalFlips={totalFlips}
        headsCount={headsCount}
        tailsCount={tailsCount}
      />
    </div>
  );
};

export default App;
