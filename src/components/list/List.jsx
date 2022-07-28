import React from "react";
import { Todo } from "../todo/Todo";
import "./style.css";

const List = ({ todoList, setTodoList }) => {
  //   let working = todoList.filter((todo) => !todo.isDone);
  //   let done = todoList.filter((todo) => todo.isDone);

  const onDeleteHanlder = (todoId) => {
    const newTodos = todoList.filter((todo) => {
      //todoList중에서 id가 안맞을때
      return todo.id !== todoId; //todoId로 받아온게 filter함수를 통해서 인자로 받은 id와 일치하는 항목만 제외하고 todo를 업데이트
    });

    setTodoList(newTodos); //바꼈던 정보에서 newTodos를 적용한 setTodoList를 만들기
  };

  const onEditHandler = (todoId) => {
    const newTodos = todoList.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return { ...todo };
      }
    });

    setTodoList(newTodos);
  };

  return (
    <div className="list-container">
      <h2 className="list-label">Working.. 🔥</h2>
      <div className="list-wrap">
        {todoList.map((todo) => {
          if (!todo.isDone) {
            //False일때
            return (
              <Todo //Todo 한테 해당정보들, id값, 변경된 setTodoList, 그리고 함수 실행법 전달
                todo={todo}
                key={todo.id}
                setTodoList={setTodoList} //넘겨줄때 원래 다 넘겨주는게 좋음
                onDeleteHanlder={onDeleteHanlder}
                onEditHandler={onEditHandler}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <h2 className="list-label">Done..! 🎉</h2>
      <div className="list-wrap">
        {todoList.map((todo) => {
          if (todo.isDone) {
            return (
              <Todo
                todo={todo}
                key={todo.id}
                setTodoList={setTodoList} //넘겨줄때 원래 다 넘겨주는게 좋음
                onDeleteHanlder={onDeleteHanlder}
                onEditHandler={onEditHandler}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export { List };
