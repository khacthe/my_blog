import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { excerptBody } from '../../utils/main';

const Wrapper = styled.div`

`;

const PostDetail = ({ post } = props) => (
  <Wrapper>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
  </Wrapper>
);

export default PostDetail;
