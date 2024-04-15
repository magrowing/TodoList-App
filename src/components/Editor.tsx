import styled from 'styled-components';

import Button from './ui/Button';
import ComboBox from './ui/ComboBox';

import ModalEditor from './ModalEditor';

import { useTodoStore } from '../stores/useTodoStore';
import { useModelStore } from '../stores/useModalStore';

const Container = styled.section`
  display: flex;
  align-items: center;
  .lookup-area {
    margin-left: auto;
  }
`;

function Editor() {
  const isOpenModal = useModelStore((state) => state.isOpenModal);
  const onToggle = useModelStore((state) => state.onToggle);
  const onUpdateTargetId = useTodoStore((state) => state.onUpdateTargetId);
  const onFilterChange = useTodoStore((state) => state.onFilterChange);

  const handleModalOpen = () => {
    onToggle(isOpenModal);
    onUpdateTargetId('');
  };

  const handleModalClose = () => {
    onToggle(!!isOpenModal);
    onUpdateTargetId('');
  };

  const handleTodoFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    onFilterChange(value);
  };

  return (
    <Container>
      <Button className="primary" onClick={handleModalOpen}>
        Add Task
      </Button>
      <div className="lookup-area">
        <ComboBox id="select_box" onChange={handleTodoFilterChange}>
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
