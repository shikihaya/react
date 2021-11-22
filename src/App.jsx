import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";
import TwoColorfulMessage from "./components/TwoColorfulMessage";
const App = () => {
  const onClickCountUp = () => setNum(num + 1);
  const [num, setNum] = useState(0);
  return (
    <>
      <h1 style={{ color: "red" }}>H1です！</h1>
      <ColorfulMessage color="blue" message="お元気ですか" />
      <TwoColorfulMessage color="red">あか～</TwoColorfulMessage>
      <TwoColorfulMessage color="green">みどり～</TwoColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};

export default App;
