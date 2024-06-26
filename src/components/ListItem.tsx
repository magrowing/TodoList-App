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

    &.isDone {
      dt {
        opacity: 0.5;
        text-decoration: line-through;
      }
    }
  }

  @media screen and (max-width: 480px) {
    flex-wrap: wrap;
    align-items: flex-start;
    padding: 2rem;
    margin-bottom: 2rem;
    .checkBox {
      /* margin-right: 0;
      margin-left: 2rem; */
    }
    .btn {
      width: 100%;
      margin-top: 2rem;
      text-align: right;
    }
    dl {
      word-break: break-all;

      dd {
        margin-top: 1rem;
      }
    }
  }
`;

type ListItemProps = {
  todoItem: TodoItemType;
};

function ListItem({ todoItem }: ListItemProps) {
  const { id, title, stats, date } = todoItem;
  const onToggle = useModelStore((state) => state.onToggle);

  const onDelete = useTodoStore((state) => state.onDelete);
  const onUpdateTargetId = useTodoStore((state) => state.onUpdateTargetId);
  const onDone = useTodoStore((state) => state.onDone);

  const handleChangeCheckbox = () => {
    onDone(id, stats);
  };

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
          id={`checkbox_${id}`}
          checked={!(stats === 'incomplete')}
          readOnly
          onChange={handleChangeCheckbox}
        />
        <label htmlFor={`checkbox_${id}`}>
          <FiCheck />
        </label>
      </div>
      <dl className={stats === 'incomplete' ? 'isNone' : 'isDone'}>
        <dt>{title}</dt>
        <dd>{dateTimeFormat(date)}</dd>
      </dl>
      <div className="btn">
        <IconButton onClick={handleClickUpdate}>
          <FiEdit3 />
        </IconButton>
        <IconButton onClick={handleClickDelete}>
          <FiTrash2 />
        </IconButton>
      </div>
    </Item>
  );
}

export default ListItem;
