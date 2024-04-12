import styled from 'styled-components';

import Header from './Header';
import Editor from './Editor';
import List from './List';

const Container = styled.article`
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
  height: 400px;
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
