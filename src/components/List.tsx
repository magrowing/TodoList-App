import styled from 'styled-components';

import ListItem from './ListItem';

import { useTodoStore } from '../store/useTodoStore';

const LisContainer = styled.ul`
  padding: 1.5rem;
  border-radius: 1.2rem;
  margin: 2rem 0;
  background-color: ${(props) => props.theme.colors.bgSecondary};
`;

function List() {
  const todoItems = useTodoStore((state) => state.todoItems);

  if (!todoItems.length) {
    return (
      <LisContainer>
        <li>할일을 추가해주세요.</li>
      </LisContainer>
    );
  }

  return (
    <LisContainer>
      {todoItems.map((item) => {
        const key = `key-${item.id}`;
        return <ListItem key={key} todoItem={item} />;
      })}
    </LisContainer>
  );
}

export default List;
