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

  function changeItem( todoChanged ) {
    setTodoList(todoList.map((todo) => {
      if (todo.id === todoChanged.id) {
        todo.done = !todo.done;
      }
      return todo;
    }));
  }

  function editItem( todoEdited ) {
    setTodoList(todoList.map((todo) => {
      if (todo.id === todoEdited.id) {
        todo.isEditing = !todo.isEditing;
      }
      return todo;
    }));
  }

  function deleteItem( todoDeleted ) {
    const confirm = window.confirm('Do you really delete it ?');
    confirm && setTodoList(todoList.filter((todo) => todo.id !== todoDeleted.id));
  }

  // function updateTodoList(func){
  //   return (todo) => {
  //     const newlist = func(todoList, todo);
  //     setTodoList(newlist);
  //   }
  // }

  return (
    <>
      <Progress todoList={ todoList }/>
      <TodoInput addItem={ addItem } />
      <TodoList todoList={ todoList } setTodoList={ setTodoList } changeItem={changeItem} editItem={editItem} deleteItem={deleteItem} />
    </>
  );
}
