import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";
import TwoColorfulMessage from "./components/TwoColorfulMessage";
const App = () => {
  const onClickButton = () => alert();

  return (
    <>
      <h1 style={{ color: "red" }}>H1です！</h1>
      <ColorfulMessage color="blue" message="お元気ですか" />
      <TwoColorfulMessage color="red">あか～</TwoColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
