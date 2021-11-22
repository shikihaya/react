import React from "react";

const ColorfulMessage = (props) => {
  const { color, message } = props; // 分割代入

  const contentStyle = {
    color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{message}</p>;
};

export default ColorfulMessage;
