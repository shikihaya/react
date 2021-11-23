import React from "react";

export const InputTodo = (props) => {
  const style = {
    backgroundColor: "#c1ffff",
    width: "400px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px"
  };

  const { todoText, onChange, onClick } = props;
  return (
    <div style={style}>
      <input placeholder="TODOを入力" value={todoText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
