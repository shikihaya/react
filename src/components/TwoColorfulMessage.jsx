import React from "react";

export const TwoColorfulMessage = (props) => {
  const { color, children } = props; // 分割代入

  const contentStyle = {
    color, // 分割代入によりprops.が省略、左右が同じ場合省略可(color:color,)
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>; // 分割代入によりprops.が省略
};
