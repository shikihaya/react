import React from "react";

export const ColorfulMessage = (props) => {
  const { color, message } = props; // 分割代入

  const contentStyle = {
    color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{message}</p>;
};
