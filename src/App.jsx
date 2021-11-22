import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();

  return (
    <>
      <h1 style={{ color: "red" }}>H1です！</h1>
      <ColorfulMessage color="blue" message="お元気ですか" />
      <ColorfulMessage color="red" message="あか～" />
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
