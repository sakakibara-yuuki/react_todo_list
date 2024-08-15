/*
 * TodoInputContainer.jsx
 * Copyright (C) 2024 sakakibara <sakakibara@organon>
 *
 * Distributed under terms of the MIT license.
 */

import styled from 'styled-components';


const TodoInputContainer = (props) => {
  return (
    <StyledInputContainer>
      <input type="text" id="input" name="input" form="todo-form" />
      <label htmlFor="input" className="label">{"What's to do"}</label>
      <div className="underline"></div>
    </StyledInputContainer>
  );
};

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

export default TodoInputContainer;
