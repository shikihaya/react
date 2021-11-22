import React, { useState, useEffect } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";
import { TwoColorfulMessage } from "./components/TwoColorfulMessage";
const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setfaceShowFlag] = useState(false);

  const onClickCountUp = () => setNum(num + 1);

  const onClickSwitchShowFlag = () => {
    setfaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setfaceShowFlag(true);
      } else {
        faceShowFlag && setfaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>H1です！</h1>
      <ColorfulMessage color="blue" message="お元気ですか" />
      <TwoColorfulMessage color="red">あか～</TwoColorfulMessage>
      <TwoColorfulMessage color="green">みどり～</TwoColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(´・ω・`)</p>}
      {/* {faceShowFlag || <p>( ﾟДﾟ)</p>} */}
    </>
  );
};

export default App;
