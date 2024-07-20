/*
 * todoinput.jsx
 * Copyright (C) 2024 sakakibara <sakakibara@organon>
 *
 * Distributed under terms of the MIT license.
 */
import './TodoInput.css';
import { memo } from 'react';


export const TodoInput = memo(({ addItem }) => {

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const todoItem = formData.get('input');
    addItem(todoItem);
    form.reset();
  }

  return (
    <form className="todo-input" id="todo-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <input type="text" id="input" name="input" form="todo-form" />
        <label htmlFor="input" className="label">{"What's to do"}</label>
        <div className="underline"></div>
      </div>
      <button className="todo-input__add" form="todo-form">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="icon">
          <path d="M8 12H16" stroke="#292D32" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 16V8" stroke="#292D32" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#292D32" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </form>
  );
});
