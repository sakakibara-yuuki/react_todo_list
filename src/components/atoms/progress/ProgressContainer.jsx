/*
 * ProgressContainer.jsx
 * Copyright (C) 2024 sakakibara <sakakibara@organon>
 *
 * Distributed under terms of the MIT license.
 */
import styled, {keyframes} from 'styled-components';


const ProgressContainer = (props) => {
  const { levelViewBox, wave } = props;

  return (
    <StyledProgressContainer className="progress-container neumorphism">
      <StyledProgressWave xmlns="http://www.w3.org/2000/svg" viewBox={levelViewBox}>
        <path d={ wave } />
      </StyledProgressWave>
    </StyledProgressContainer>
  );
};

const StyledProgressContainer = styled.div`
  overflow: hidden;
  width: 300px;
  height: 300px;
`;

const wave = keyframes`
  from {
      transform:translate(0);
  }
  to {
      transform:translate(-66.66%);
  }
`;

const StyledProgressWave = styled.svg`
  width: 900px;
  height: 300px;
  path {
      fill: #3168dd;
      animation: ${wave} linear 4s infinite;
  }
`;

export default ProgressContainer;
