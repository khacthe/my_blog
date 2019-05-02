import React,  { useState, useEffect } from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import HomeView from '../../components/Home';
import { selectHome } from '../../selectors';
import {
  getPosts,
  getPostsSuccess,
} from '../../actions/homeAction';


const HomePage = styled.div``;

const Home = (props) => {
  useEffect(() => {
    const { getPostsAction } = props;
    getPostsAction();
  }, [])
  return(
    <HomePage>
      <HomeView posts={props.posts} />
    </HomePage>
  )
}

export default connect(
  selectHome,
  {
    getPostsAction: getPosts,
  }
)(Home);