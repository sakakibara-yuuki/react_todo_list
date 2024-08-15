/*
 * Progress.jsx
 * Copyright (C) 2024 sakakibara <sakakibara@organon>
 *
 * Distributed under terms of the MIT license.
 */
import { memo } from 'react';
import styled from 'styled-components';
import StyledProgressMetrics from '../../atoms/progress/ProgressMetrics';
import StyledProgressContainer from '../../atoms/progress/ProgressContainer';


export const Progress = memo(({ todoList }) => {
  let total = todoList.length;
  let done = todoList.filter((todo) => todo.done).length;
  let rest = total - done;
  let levelViewBox = `0 ${300 * (done / total)} 900 300`;
  let wave = `M 0,600 v -300,0 q 150,-15 300,0 t 300,0 q 150,-15 300,0 v 300 Z`;

  return (
    <StyledProgress>

      <StyledProgressMetrics total={total} done={done} rest={rest}/>

      <StyledProgressContainer className="progress-container neumorphism" levelViewBox={levelViewBox} wave={wave} />

    </StyledProgress>
  );
});


const StyledProgress = styled.div`
  grid-column: 2;
  grid-row: 1;
  display: flex;
  justify-content: center;
  transition: all 0.3s ease;
`;
