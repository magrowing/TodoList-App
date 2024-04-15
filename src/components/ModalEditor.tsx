import { useRef, useState } from 'react';

import styled from 'styled-components';

import Button from './ui/Button';

import { useTodoStore } from '../stores/useTodoStore';

const ModalContainer = styled.article`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    max-width: 50rem;
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 2rem;
    border-radius: 8px;
    position: relative;
    background-color: ${(props) => props.theme.colors.bgSecondary};
  }

  .title {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 2rem;
    text-transform: capitalize;
    color: ${(props) => props.theme.colors.textSecondary};
  }
  .form {
    width: 100%;
    margin-bottom: 2rem;
    label {
      display: block;
      width: 100%;
      font-size: 1.6rem;
      text-transform: capitalize;
      font-weight: 500;
      margin-bottom: 1rem;
      color: ${(props) => props.theme.colors.textPrimary};
    }
    input,
    select {
      display: block;
      width: 100%;
      background-color: ${(props) => props.theme.colors.baseWhite};
      border: none;
      padding: 1.6rem;
      font-size: 1.6rem;
      color: ${(props) => props.theme.colors.baseBlack};
    }
  }
  .btn {
    button {
      margin-right: 1rem;
    }
  }
`;

type ModalEditorProps = {
  handleModalClose: () => void;
};

function ModalEditor({ handleModalClose }: ModalEditorProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const title = useTodoStore((state) => state.title);
  const stats = useTodoStore((state) => state.stats);
  const isTargetId = useTodoStore((state) => state.isTargetId);
  const onCreate = useTodoStore((state) => state.onCreate);
  const onUpdate = useTodoStore((state) => state.onUpdate);

  const [todo, setTodo] = useState({
    title,
    stats,
  });

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value } = e.target;
    setTodo({ ...todo, [e.target.id]: value });
  };

  const handleOnSubmit = () => {
    if (!todo.title) {
      inputRef.current?.focus();
      return;
    }
    !isTargetId ? onCreate(todo) : onUpdate(isTargetId, todo);
    handleModalClose();
  };

  return (
    <ModalContainer>
      <div className="container">
        <h3 className="title">{!isTargetId ? `Add` : `Update`} TODO</h3>
        <div className="form">
          <label htmlFor="title">title</label>
          <input
            ref={inputRef}
            type="text"
            id="title"
            placeholder="Add Todo..."
            value={todo.title}
            onChange={handleOnChange}
          />
        </div>
        <div className="form">
          <label htmlFor="stats">stats</label>
          <select
            name="stats"
            id="stats"
            value={todo.stats}
            onChange={handleOnChange}
          >
            <option value="incomplete">Incomplete</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div className="btn">
          <Button className="primary" onClick={handleOnSubmit}>
            {!isTargetId ? `Add` : `Update`} Task
          </Button>
          <Button onClick={handleModalClose}>Cancel</Button>
        </div>
      </div>
    </ModalContainer>
  );
}

export default ModalEditor;
