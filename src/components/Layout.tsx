import styled from 'styled-components';

import Header from './Header';

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
    </Container>
  );
}

export default Layout;
