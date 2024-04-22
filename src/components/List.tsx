import { useEffect, useState } from 'react';

import styled from 'styled-components';

import ListItem from './ListItem';

import { useTodoStore } from '../stores/useTodoStore';

const LisContainer = styled.ul`
  padding: 1.5rem;
  border-radius: 1.2rem;
  margin: 2rem 0;
  background-color: ${(props) => props.theme.colors.bgSecondary};

  &.none-msg {
    background-color: transparent;
    li {
      color: ${(props) => props.theme.colors.primary};
      font-weight: 600;
      text-align: center;
    }
  }
`;

function List() {
  const todoItems = useTodoStore((state) => state.todoItems);
  const [localStorageTodos, setLocalStorageTodos] = useState([]);

  useEffect(() => {
    const localTodoItems = localStorage.getItem('todoItems');
    if (!localTodoItems) {
      setLocalStorageTodos([]);
    }
    setLocalStorageTodos(JSON.parse(localTodoItems ?? ''));
  }, [todoItems]);

  if (!localStorageTodos.length) {
    return (
      <LisContainer className="none-msg">
        <li>할일을 추가해주세요!</li>
      </LisContainer>
    );
  }

  if (!todoItems.length) {
    return (
      <LisContainer className="none-msg">
        <li>할일 목록이 존재하지 않습니다.</li>
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
