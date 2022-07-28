import "./style.css";
import React, { useState } from "react";

const Form = ({ todoList, setTodoList }) => {
  const startState = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };

  const [todo, setTodo] = useState(startState); //초기값 설정

  const onChangeHandler = (event) => {
    //console.log(event.target);
    const { name, value } = event.target;
    //event.target.name과 event.target.value각각 가져오기
    //밑에 input을 각각 쳤다면 거기에서 onChange function이 실행되고
    //거기에서 input중에 name 즉 title이라는 속성과 value = "todo.title"로써 ''을 가져옴
    setTodo({ ...todo, [name]: value, id: todoList.at(-1).id + 1 });
    //이렇게 해서 id:0, title:"", body:"", isDone: false인 todo에다가 새로
    //우선 ["title"]:"새로 친 글자" 그리고 id는 0에서 인덱싱해서 하나씩 + 1 해주는것이죠
    //그러면 [id: 0, title: "", body: "",isDone: false,], [id:1, title:"공부", body:"", isDone: false]
    //인애를 리턴해줄것임
    //console.log(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault(); //새로운 페이지 rediret 방지
    setTodoList([...todoList, todo]); //변경되는 setTodoList에 todoList(원래 있던내용) + 현재 onChange에서 변경된 todo 제출
    setTodo(startState); //상태초기화
  };
  return (
    <form onSubmit={onSubmitHandler} className="add-form">
      <div className="input-content">
        <label className="form-label">제목</label>
        <input
          type="text"
          name="title"
          value={todo.title}
          className="add-input"
          onChange={onChangeHandler}
        />
        <label className="form-label">내용</label>
        <input
          type="text"
          name="body"
          value={todo.body}
          className="add-input"
          onChange={onChangeHandler}
        />
      </div>
      <button className="button-add">추가하기</button>
    </form>
  );
};

export { Form };
