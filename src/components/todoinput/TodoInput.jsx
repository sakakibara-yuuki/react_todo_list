/*
 * todoinput.jsx
 * Copyright (C) 2024 sakakibara <sakakibara@organon>
 *
 * Distributed under terms of the MIT license.
 */
import './TodoInput.css';

export function TodoInput() {
  return (
    <div className="todo-input">
      <input type="text" placeholder="Add todo" />
      <button>Add</button>
    </div>
  );
}
