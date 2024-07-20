/*
 * Progress.jsx
 * Copyright (C) 2024 sakakibara <sakakibara@organon>
 *
 * Distributed under terms of the MIT license.
 */
import './Progress.css';

export function Progress({ todoList }) {
  let total = todoList.length;
  let done = todoList.filter((todo) => todo.done).length;
  let rest = total - done;
  let levelViewBox = `0 ${300 * (done / total)} 900 300`;
  let wave = `M 0,600 v -300,0 q 150,-15 300,0 t 300,0 q 150,-15 300,0 v 300 Z`;
  return (
    <div className="progress">
      <div className="progress-metrics">
        <div>{ total }</div>
        <div className="progress-metrics_inside">
          <div>{ done }</div>
          <div>{ rest }</div>
        </div>
      </div>
      <div className="progress-container neumorphism">
        <svg className="progress-wave"xmlns="http://www.w3.org/2000/svg" viewBox={levelViewBox}>
          <path d={ wave } />
        </svg>
        <svg>
          <path d={ wave } />
        </svg>
      </div>
    </div>
  );
}

