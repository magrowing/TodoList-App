import styled from 'styled-components';

import Header from './Header';
import Editor from './Editor';
import List from './List';

const Container = styled.article`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  @media screen and (max-width: 900px) {
    max-width: 100%;
    width: 90%;
  }
`;

function Layout() {
  return (
    <Container>
      <Header />
      <Editor />
      <List />
    </Container>
  );
}

export default Layout;
