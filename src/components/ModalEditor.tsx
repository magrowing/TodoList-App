import styled from 'styled-components';

import Button from './ui/Button';

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
  return (
    <ModalContainer>
      <div className="container">
        <h3 className="title">Add TODO</h3>
        <div className="form">
          <label htmlFor="title">title</label>
          <input type="text" id="title" placeholder="Add Todo..." />
        </div>
        <div className="form">
          <label htmlFor="stats" className="form__Title">
            stats
          </label>
          <select name="stats" id="stats">
            <option value="incomplete">Incomplete</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div className="btn">
          <Button className="primary">Add Task</Button>
          <Button onClick={handleModalClose}>Cancel</Button>
        </div>
      </div>
    </ModalContainer>
  );
}

export default ModalEditor;
