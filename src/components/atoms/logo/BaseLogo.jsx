/*
 * BaseLogo.jsx
 * Copyright (C) 2024 sakakibara <sakakibara@organon>
 *
 * Distributed under terms of the MIT license.
 */
import styled from 'styled-components';


export const BaseLogo = (props) => {
  const { children } = props;
  return (
    <StyledBaseLogo>
      {children}
    </StyledBaseLogo>
  );
};

const StyledBaseLogo = styled.div`
  text-align: center;
  height: 1.5rem;
`;
