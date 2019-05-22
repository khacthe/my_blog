import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { excerptBody } from '../../utils/main';

const PostItem = styled.li`
  list-style: none;
  box-sizing: border-box;
  padding: 1rem;

  @media only screen and (max-width: 911px) {
    flex-basis: 33.33%;
  }

  @media only screen and (max-width: 767px) {
    flex-basis: 50%;
  }

  @media only screen and (max-width: 560px) {
    flex-basis: 100%;
  }
`;

const Title = styled(NavLink)`
  color: #000;
  font-weight: bold;
  margin-bottom: 0.3rem;
  font-size: 1.5rem;
  text-decoration: none;

  &:hover {
    color: #0095ab;
  }
`;

const Thumbnail  = styled.img`
  width: 100%;
`;

const Description = styled.p``;

const Post = ({ post } = props) => (
  <PostItem>
    <Title to={`/post/${post.id}`}>{post.title}</Title>
    <Description>{excerptBody(post.body, 40)}</Description>
  </PostItem>
)

export default Post;
