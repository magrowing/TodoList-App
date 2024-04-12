import styled from 'styled-components';
import ListItem from './ListItem';

const LisContainer = styled.ul`
  padding: 1.5rem;
  border-radius: 1.2rem;
  margin: 2rem 0;
  background-color: ${(props) => props.theme.colors.bgSecondary};
`;

function List() {
  return (
    <LisContainer>
      <ListItem />
    </LisContainer>
  );
}

export default List;
