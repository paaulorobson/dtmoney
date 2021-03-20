import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './styles/global';

const Title = styled.h1`
  color: #8557e6;
`;

function App() {
  return (
    <div>
      <Title>Hello World</Title>
      <GlobalStyle />
    </div>
  );
}

export default App;
