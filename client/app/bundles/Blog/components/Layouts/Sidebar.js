import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

import {
  faTwitter,
  faYoutube,
  faVimeo,
} from "@fortawesome/free-brands-svg-icons";

const HiddenSidebar = css`
  transition: left 0.3s ease;
  left: -320px;
`;

const SidebarMenu = styled.div`
  position: fixed;
  background-color: #2D2D2D;
  height: 100%;
  width: 420px;
  transition: left 0.3s ease;
  z-index: 2;
  display: flex;

  left: ${props => props.openSidebar && '0px' || '-320px'}
`;

const LeftSidebar = styled.div`
  width: 20rem;
  background-color: #333333;
  padding-left: 3.125rem;
  padding-top: 1rem;
  box-sizing: border-box;
`;

const RightSidebar = styled.div`
  width: 6.25rem;
`;

const Info = styled.div`
`;

const InfoTitle = styled.h4`
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
`;

const InfoDescription = styled.p`
  color: #848484;
  line-height: 1.25rem;
`;

const MenuList = styled.ul`
  margin-top: 2.5rem;
  color: #fff;
  padding: 0;
`;

const Menu = styled.li`
  list-style: none;
`;

const MenuLink = styled(NavLink)`
  color: #fff;
  display: block;
  padding: 0.6rem 0;
  text-decoration: none;
  font-size: @include font-size(20);

  &:hover {
    color: #0095ab;
  }

  &.active {
    color: #0095ab;
  }
`;

const Social = styled.div`
`;

const SocialIcon = styled(FontAwesomeIcon)`
`;

const SocialItemActive = css`
  background-color: #0095ab !important;
  color: #fff !important;
`;

const SocialItem = styled.div`
  position: relative;
  text-align: center;
  color: #5b5b5b;
  font-size: 2rem;
  cursor: pointer;
  line-height: 6.25rem;

  &:hover {
    background-color: #333333;
  }

  ${props => props.active && SocialItemActive}
`;

const Sidebar = ({ openSidebar, togleSidebar, children }) => {
  return(
    <SidebarMenu openSidebar={openSidebar}>
      <LeftSidebar>
        <Info>
          <InfoTitle>Suppablog</InfoTitle>
          <InfoDescription>Suppablog is simple and yet cool wordpress theme to lorem ipsum dolor sit.</InfoDescription>
        </Info>
        <MenuList>
          <Menu>
            <MenuLink to="/" activeClassName="active">Home</MenuLink>
          </Menu>
          <Menu>
            <MenuLink to="/about" activeClassName="active">About</MenuLink>
          </Menu>
          <Menu>
            <MenuLink to="/contact" activeClassName="active">Contact</MenuLink>
          </Menu>
          <Menu>
            <MenuLink to="/design" activeClassName="active">Design</MenuLink>
          </Menu>
        </MenuList>
      </LeftSidebar>
      <RightSidebar>
        <SocialItem active onClick={() => togleSidebar()} >
          { <SocialIcon icon={openSidebar && faTimes || faAlignJustify} /> }
        </SocialItem>
        <SocialItem><SocialIcon icon={faTwitter} /></SocialItem>
        <SocialItem><SocialIcon icon={faYoutube} /></SocialItem>
        <SocialItem><SocialIcon icon={faVimeo} /></SocialItem>
      </RightSidebar>
    </SidebarMenu>
  )
}

export default Sidebar
