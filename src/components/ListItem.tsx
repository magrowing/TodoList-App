import styled from 'styled-components';

import { IconButton } from './ui/Button';

import dateTimeFormat from '../utils/dateTimeFormat';

import { FiTrash2 } from 'react-icons/fi';
import { FiEdit3 } from 'react-icons/fi';
import { FiCheck } from 'react-icons/fi';

const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 0.6rem;
  background-color: ${(props) => props.theme.colors.bgPrimary};

  .checkBox {
    position: relative;
    margin-right: 1rem;
    input {
      position: absolute;
      width: 0;
      height: 0;
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

function ListItem() {
  return (
    <Item>
      <div className="checkBox">
        <input type="checkbox" id={`checkbox`} />
        <label htmlFor={`checkbox`}>
          <FiCheck />
        </label>
      </div>
      <dl>
        <dt>List</dt>
        <dd>{dateTimeFormat(1324938920)}</dd>
      </dl>
      <div>
        <IconButton>
          <FiTrash2 />
        </IconButton>
        <IconButton>
          <FiEdit3 />
        </IconButton>
      </div>
    </Item>
  );
}

export default ListItem;
