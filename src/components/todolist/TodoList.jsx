/*
 * TodoList.jsx
 * Copyright (C) 2024 sakakibara <sakakibara@organon>
 *
 * Distributed under terms of the MIT license.
 */
import './TodoList.css';
import { useState } from 'react';


export function TodoList({ todoList, setTodoList, changeItem, editItem, deleteItem }) {

  const [todoText, setText] = useState('');

  function updateItem(todoChanged) {
    setTodoList(todoList.map((todo) => {
      if (todo.id === todoChanged.id) {
        todo.text = todoText;
        todo.isEditing = false;
      }
      return todo;
    }));
  }

  return (
    <div className="todo-list">
      <ul id="checklist">
        {todoList.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" id={todo.id} onChange={(event) => changeItem(event, todo)}/>

            {
              todo.isEditing ?
              <>
                <input type="text" name={`${todo.id}-save`} value={todoText} onChange={e => setText(e.target.value)}/>
                <button className="todo-list__button save" name={`${todo.id}-save`} onClick={() => updateItem(todo)}>
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m16 0c8.836556 0 16 7.163444 16 16s-7.163444 16-16 16-16-7.163444-16-16 7.163444-16 16-16zm5.7279221 11-7.0710679 7.0710678-4.2426406-4.2426407-1.4142136 1.4142136 5.6568542 5.6568542 8.4852814-8.4852813z" fill="#202327"/></svg>
                </button>
              </> :
              <>
              <label htmlFor={todo.id}>{todo.text}</label>
              <button className="todo-list__button edit" onClick={() => editItem(todo)}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30" className="icon edit">
                  <path d="M 22.828125 3 C 22.316375 3 21.804562 3.1954375 21.414062 3.5859375 L 19 6 L 24 11 L 26.414062 8.5859375 C 27.195062 7.8049375 27.195062 6.5388125 26.414062 5.7578125 L 24.242188 3.5859375 C 23.851688 3.1954375 23.339875 3 22.828125 3 z M 17 8 L 5.2597656 19.740234 C 5.2597656 19.740234 6.1775313 19.658 6.5195312 20 C 6.8615312 20.342 6.58 22.58 7 23 C 7.42 23.42 9.6438906 23.124359 9.9628906 23.443359 C 10.281891 23.762359 10.259766 24.740234 10.259766 24.740234 L 22 13 L 17 8 z M 4 23 L 3.0566406 25.671875 A 1 1 0 0 0 3 26 A 1 1 0 0 0 4 27 A 1 1 0 0 0 4.328125 26.943359 A 1 1 0 0 0 4.3378906 26.939453 L 4.3632812 26.931641 A 1 1 0 0 0 4.3691406 26.927734 L 7 26 L 5.5 24.5 L 4 23 z"></path>
                </svg>
              </button>
              </>
            }

            <button className="todo-list__button delete" onClick={() => deleteItem(todo)} >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon delete">
                <path d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"></path>
              </svg>
            </button>

          </li>
        ))}
      </ul>
    </div>
  );
}
