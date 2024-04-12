import styled from 'styled-components';

import Header from './Header';
import Editor from './Editor';

const Container = styled.article`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  height: 400px;
`;

function Layout() {
  return (
    <Container>
      <Header />
      <Editor />
    </Container>
  );
}

export default Layout;
