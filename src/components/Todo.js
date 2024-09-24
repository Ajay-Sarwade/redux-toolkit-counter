import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "../slice/TodoSlice";

const Todo = () => {
  const [userInput, setUserInput] = useState("");
  const items = useSelector((state) => state.Todo.items);
  const dispatch = useDispatch();

  function handleSubmit() {
    if (userInput != "") {
      dispatch(addItem({ value: userInput }));
      setUserInput("");
    }
  }
  function handleDelete(index) {
    dispatch(deleteItem({ id: index }));
  }

  return (
    <div>
      Todo List
      <div>
        <input
          type="text"
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            handleSubmit();
          }}
        >
          Submit
        </button>
      </div>
      {items.length > 0 ? (
        <div className="todoList">
          {items.map((item) => {
            return (
              <div className="todoItems" key={item.id}>
                <span className="todoItemText">{item?.value}</span>
                <button
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                >
                  delete
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div>No todos left</div>
      )}
    </div>
  );
};

export default Todo;
