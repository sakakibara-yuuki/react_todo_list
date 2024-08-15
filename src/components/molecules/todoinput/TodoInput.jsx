/*
 * todoinput.jsx
 * Copyright (C) 2024 sakakibara <sakakibara@organon>
 *
 * Distributed under terms of the MIT license.
 */
import { memo } from 'react';
import styled from 'styled-components';
import StyledInputAddButton from '../../atoms/button/TodoInputAddButton';
import StyledInputContainer from '../../atoms/input/TodoInputContainer';


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

      <StyledInputContainer />

      <StyledInputAddButton form="todo-form" />

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


