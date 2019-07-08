import React,  { useState, useEffect } from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import PostDetailView from '../../components/PostDetail';
import { selectPostDetail } from '../../selectors';
import {
  getPostDetail,
  getPostDetailSuccess,
} from '../../actions/homeAction';


const HomePage = styled.div``;
const PostDetail = (props) => {
  useEffect(() => {
    const { match, getPostDetailAction } = props;
    getPostDetailAction(match.params.id);
  }, [])

  const { post } = props;
  return(
    <HomePage>
      {post &&
        <PostDetailView post={post} />
      }
    </HomePage>
  )
}

export default connect(
  selectPostDetail,
  {
    getPostDetailAction: getPostDetail,
  }
)(PostDetail);
