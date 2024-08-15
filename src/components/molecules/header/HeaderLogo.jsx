/*
 * HeaderLogo.jsx
 * Copyright (C) 2024 sakakibara <sakakibara@organon>
 *
 * Distributed under terms of the MIT license.
 */
import Logo from '../../atoms/logo/Logo';
import LogoText from '../../atoms/logo/LogoText';
import { memo } from 'react';
import styled, { keyframes } from 'styled-components';


export const HeaderLogo = memo(() => { 
  return (
    <>
    <StyledHeaderLogo className="neumorphism">
      <StyledLogo viewBox="0 0 512 512" alt="logo"/>
      <StyledLogoText viewBox="0 0 1696.703 512.01" alt="logo"/>
    </StyledHeaderLogo>
    </>
  );
});

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledLogo = styled(Logo)`
  height: 1.5rem;
  animation: ${rotate} 0.25s linear;
  }
`;

const StyledLogoText = styled(LogoText)`
  height: 1.5rem;
`;

const StyledHeaderLogo = styled.div`
  display: flex;
  gap: 0.2rem;
  padding-bottom: 0.2rem;
  border: 1px solid #ffffff;
  padding: 0.5rem;
`;
