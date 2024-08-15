/*
 * todoinput.jsx
 * Copyright (C) 2024 sakakibara <sakakibara@organon>
 *
 * Distributed under terms of the MIT license.
 */
import { memo } from 'react';
import styled from 'styled-components';
// import StyledInputAddButton from '../atoms/todoinput/StyledInputAddButton';
// import StyledInputContainer from '../atoms/todoinput/StyledInputContainer';


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
    <StyledTodoInput id="todo-form" onSubmit={handleSubmit}>

      <StyledInputContainer>
        <input type="text" id="input" name="input" form="todo-form" />
        <label htmlFor="input" className="label">{"What's to do"}</label>
        <div className="underline"></div>
      </StyledInputContainer>

      <StyledInputAddButton form="todo-form">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="icon">
          <path d="M8 12H16" stroke="#292D32" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 16V8" stroke="#292D32" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#292D32" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </StyledInputAddButton>

    </StyledTodoInput>
  );
});


const StyledTodoInput = styled.form`
  grid-column: 2;
  grid-row: 2;
  display: flex;
  justify-content: center;
  gap: 0.75rem;
`;

const StyledInputContainer = styled.div`
  position: relative;
  width: 200px;
  input[type="text"] {
    font-size: 20px;
    width: 100%;
    border: none;
    padding: 6px 0;
    background-color: transparent;
    outline: none;
  }

  .label {
    position: absolute;
    top: 0;
    left: 0;
    color: #ccc;
    transition: all 0.3s ease;
    pointer-events: none;
  }

  input[type="text"]:focus ~ .label,
  input[type="text"]:valid ~ .label {
    top: -20px;
    font-size: 16px;
    color: #333;
  }

  .underline {
    height: 1px;
    width: 100%;
    background-color: #333;
    transform: scaleX(0);
    transition: all 0.3s ease;
  }

  input[type="text"]:focus ~ .underline,
  input[type="text"]:valid ~ .underline {
    transform: scaleX(1);
  }
`;

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
