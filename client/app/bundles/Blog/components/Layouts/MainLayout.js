import React, { useState } from 'react';
import styled from 'styled-components';

import Sidebar from './Sidebar';

const Main = styled.main`
  position: relative;
  overflow: hidden;
`;

const Body = styled.div`
  width: calc(100% - ${props => props.openSidebar && '26.25rem' || '6.25rem'});
  position: relative;
  transition: margin 0.3s ease;

  margin-left: ${props => props.openSidebar && '26.25rem' || '6.25rem'}
`;

const MainLayout = ({children}) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  function togleSidebar() {
    setOpenSidebar(!openSidebar)
  }

  return(
    <Main>
      <Sidebar togleSidebar={togleSidebar} openSidebar={openSidebar} />
      <Body openSidebar={openSidebar}>
        {children}
      </Body>
    </Main>
  )
}

export default MainLayout;
