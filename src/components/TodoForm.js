import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  //To make it focus without clicking on the input field
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        {props.edit ? (
          <>
            <input
              type="text"
              placeholder="Update Your Task"
              value={input}
              name="text"
              className="todo-input edit"
              onChange={handleChange}
              ref={inputRef}
            />
            <button className="todo-btn edit">Update</button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Type New Task"
              value={input}
              name="text"
              className="todo-input"
              onChange={handleChange}
              ref={inputRef}
            />
            <button className="todo-btn">Add New Task</button>
          </>
        )}
      </form>
    </div>
  );
}

export default TodoForm;
