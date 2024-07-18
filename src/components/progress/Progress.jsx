/*
 * Progress.jsx
 * Copyright (C) 2024 sakakibara <sakakibara@organon>
 *
 * Distributed under terms of the MIT license.
 */
import './Progress.css';

export function Progress() {
  let start = 50;
  let wave = `M 0,300 v -${start},0 q 150,-15 300,0 t 300,0 q 150,-15 300,0 v ${start} Z`;
  return (
    <div className="progress">
      <div className="progress-metrics">
        <div>100</div>
        <div className="progress-metrics_inside">
          <div>10</div>
          <div>90</div>
        </div>
      </div>
      <div className="progress-container">
        <svg className="progress-wave"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 300">
          <path d={wave} />
        </svg>
        <svg>
          <path d={wave} />
        </svg>
      </div>
    </div>
  );
}

