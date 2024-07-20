/*
 * Todo.jsx
 * Copyright (C) 2024 sakakibara <sakakibara@organon>
 *
 * Distributed under terms of the MIT license.
 */
import { Progress } from '../progress/Progress';
import { TodoInput } from '../todoinput/TodoInput';
import { TodoList } from '../todolist/TodoList';
import { useState } from 'react';


export function Todo() {

  const [todoList, setTodoList] = useState([]);

  function addItem( todoItem ) {
    const todo = {
      done: false,
      id: crypto.randomUUID(),
      isEditing: false,
      text: todoItem,
    };
    const newList = [...todoList, todo];
    setTodoList(newList);
  }

  return (
    <>
      <Progress todoList={ todoList }/>
      <TodoInput addItem={ addItem } />
      <TodoList todoList={ todoList } setTodoList={ setTodoList } />
    </>
  );
}
