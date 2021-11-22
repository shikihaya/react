import React from "react";

const App = () => {
  const onClickButton = () => alert();

  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };

  return (
    <>
      <h1 style={{ color: "red" }}>H1です！</h1>
      <p style={contentStyle}>パラグラフ</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
