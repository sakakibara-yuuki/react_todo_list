/*
 * TodoInputAddButton.jsx
 * Copyright (C) 2024 sakakibara <sakakibara@organon>
 *
 * Distributed under terms of the MIT license.
 */
import styled from 'styled-components';


export const TodoInputAddButton = (props) => {
  return (
    <StyledInputAddButton form="todo-form">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="icon">
        <path d="M8 12H16" stroke="#292D32" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 16V8" stroke="#292D32" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#292D32" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </StyledInputAddButton>
  );
};


const StyledInputAddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  position: relative;

  .icon {
    width: 30px;
    height: 30px;
    transition: .2s linear;
    fill: none;
  }

  :hover.icon {
    transform: rotate(90deg);
  }

  :hover.icon path {
    fill: rgb(0, 0, 177);
  }

  :active {
    transform: scale(0.9);
  }
`;

export default TodoInputAddButton;
