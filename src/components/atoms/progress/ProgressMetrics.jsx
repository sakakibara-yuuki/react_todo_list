/*
 * ProgressMetrics.jsx
 * Copyright (C) 2024 sakakibara <sakakibara@organon>
 *
 * Distributed under terms of the MIT license.
 */
import { useState } from 'react';
import styled, { keyframes } from 'styled-components';


const ProgressMetrics = (props) => {
  let { total, done, rest } = props;
  return (
    <StyledProgressMetrics>
      <div>{ total }</div>
      <StyledProgressMetricsInside>
        <div>{ done }</div>
        <div>{ rest }</div>
      </StyledProgressMetricsInside>
    </StyledProgressMetrics>
  );
};

const StyledProgressMetrics = styled.div`
  text-align: center;
  writing-mode: vertical-rl;
  transform: rotate(-180deg);
  width: 100px;
  height: 300px;
  margin-left: -100px;
`;

const StyledProgressMetricsInside = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-grow: 1;
`;

export default ProgressMetrics;
