import styled from 'styled-components';

import { IconButton } from './ui/Button';

import { useTodoStore } from '../stores/useTodoStore';
import { useModelStore } from '../stores/useModalStore';

import dateTimeFormat from '../utils/dateTimeFormat';

import { TodoItemType } from '../types';

import { FiTrash2, FiEdit3, FiCheck } from 'react-icons/fi';

const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 0.6rem;
  background-color: ${(props) => props.theme.colors.bgPrimary};
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: 0;
  }

  .checkBox {
    position: relative;
    margin-right: 1rem;
    input {
      position: absolute;
      width: 0;
      height: 0;
      &:checked + label {
        background-color: ${(props) => props.theme.colors.primary};
        svg {
          opacity: 1;
        }
      }
    }
    label {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 3rem;
      height: 3rem;
      background-color: ${(props) => props.theme.colors.grayPrimary};
      border-radius: 0.6rem;

      svg {
        opacity: 0;
        width: 2.6rem;
        height: 2.6rem;
        stroke: ${(props) => props.theme.colors.baseWhite};
      }
    }
  }

  dl {
    flex: 1;
    dt,
    dd {
      color: ${(props) => props.theme.colors.textPrimary};
    }

    dt {
      font-weight: 600;
      font-size: 1.6rem;
    }

    dd {
      font-size: 1.4rem;
      margin-top: 0.4rem;
    }
  }
`;

type ListItemProps = {
  todoItem: TodoItemType;
};

function ListItem({ todoItem }: ListItemProps) {
  const { id, title, stats, date } = todoItem;
  const onDelete = useTodoStore((state) => state.onDelete);
  const onToggle = useModelStore((state) => state.onToggle);
  const onUpdateTargetId = useTodoStore((state) => state.onUpdateTargetId);

  const handleClickDelete = () => {
    onDelete(id);
  };

  const handleClickUpdate = () => {
    onToggle(false);
    onUpdateTargetId(id);
  };

  return (
    <Item>
      <div className="checkBox">
        <input
          type="checkbox"
          id={`checkbox`}
          checked={!(stats === 'incomplete')}
          readOnly
        />
        <label htmlFor={`checkbox`}>
          <FiCheck />
        </label>
      </div>
      <dl>
        <dt>{title}</dt>
        <dd>{dateTimeFormat(date)}</dd>
      </dl>
      <div>
        <IconButton onClick={handleClickDelete}>
          <FiTrash2 />
        </IconButton>
        <IconButton onClick={handleClickUpdate}>
          <FiEdit3 />
        </IconButton>
      </div>
    </Item>
  );
}

export default ListItem;
