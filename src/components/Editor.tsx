import { useState } from 'react';

import styled from 'styled-components';

import Button from './ui/Button';

import ComboBox from './ui/ComboBox';
import ModalEditor from './ModalEditor';

const Container = styled.section`
  display: flex;
  align-items: center;
  max-width: 80rem;
  margin: 0 auto;
  .lookup-area {
    margin-left: auto;
  }
`;

function Editor() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleModalOpen = () => {
    setIsOpenModal(!isOpenModal);
  };

  const handleModalClose = () => {
    setIsOpenModal(false);
  };

  return (
    <Container>
      <Button className="primary" onClick={handleModalOpen}>
        Add Task
      </Button>
      <div className="lookup-area">
        <ComboBox name="" id="">
          <option value="all">ALL</option>
          <option value="incomplete">Incomplete</option>
          <option value="completed">Completed</option>
        </ComboBox>
      </div>
      {isOpenModal && <ModalEditor handleModalClose={handleModalClose} />}
    </Container>
  );
}

export default Editor;
