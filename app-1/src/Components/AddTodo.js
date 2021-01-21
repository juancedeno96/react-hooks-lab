import React, { useState } from "react";

const AddTodo = (props) => {
  const [userInput, setUserInput] = useState("");
  function handleInput(e) {
    e.preventDefault();
    props.addTodo(userInput);
    setUserInput("");
  }
  return (
    <div>
      <input value={userInput} onChange={(e) => setUserInput(e.target.value)} />
      <button onClick={handleInput}>Add</button>
    </div>
  );
};

export default AddTodo;
