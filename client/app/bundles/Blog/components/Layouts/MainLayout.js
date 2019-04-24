import * as React from 'react';
import styled from 'styled-components';

const Main = styled.main``;

const MainLayout = ({children}) =>(
  <Main>
    {children}
  </Main>
)

export default MainLayout;