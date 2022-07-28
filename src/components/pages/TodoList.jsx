import React, { useState } from "react";
import { Form } from "../form/Form";
import { Header } from "../header/Header";
import { List } from "../list/List";
import { Layout } from "../layout/Layout";

const TodoList = () => {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
    {
      id: 2,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: true,
    },
  ]);

  return (
    <Layout>
      <Header />
      <Form todoList={todoList} setTodoList={setTodoList} />
      <List todoList={todoList} setTodoList={setTodoList} />
    </Layout>
  );
};

export { TodoList };
