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
      <Sidebar />
        <div className="main-wrapper">
            <section className="cta-section theme-bg-light py-5">
                <div className="container text-center">
                    <h2 className="heading">DevBlog For Developers</h2>
                    <div className="intro">Welcome to my blog. Subscribe and get my latest blog post in your inbox.</div>
                </div>
            </section>
            <section className="blog-list px-3 py-5 p-md-5">
                <div className="container">
                  {children}
                </div>
            </section>

            <footer className="footer text-center py-2 theme-bg-dark">
                <small className="copyright">Designed with <i className="fas fa-heart"></i> by <a href="#" target="_blank">Xiaoying Riley</a> for developers</small>
            </footer>
          </div>
    </Main>
  )
}

export default MainLayout;
