import React,  { useState, useEffect } from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import PostDetailView from '../../components/PostDetail';
import { selectPostDetail } from '../../selectors';
import {
  getPost,
  getPostsuccess,
} from '../../actions/homeAction';


const HomePage = styled.div``;

const PostDetail = (props) => {
  useEffect(() => {
    const { getPostAction } = props;
    getPostAction();
  }, [])
  return(
    <HomePage>
      <PostDetailView post={props.post} />
    </HomePage>
  )
}

export default connect(
  selectPostDetail,
  {
    getPostAction: getPost,
  }
)(PostDetail);
