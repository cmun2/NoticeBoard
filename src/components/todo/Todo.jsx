// const Todo = (props) => {};
import React from "react";
import "./style.css";

const Todo = ({ todo, onDeleteHanlder, onEditHandler }) => {
  return (
    <div className="todo-container">
      <div>
        <h2 className="todo-label">{todo.title}</h2>
        <div>{todo.body}</div>
      </div>
      <div className="button-set">
        <button
          className="todo-del-btn"
          onClick={() => onDeleteHanlder(todo.id)}
        >
          삭제하기
        </button>
        <button
          className="todo-done-btn"
          onClick={() => onEditHandler(todo.id)}
        >
          {todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
};

export { Todo };
