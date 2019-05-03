import React from 'react';
import styled from 'styled-components';

const PostItem = styled.li`
  width: 10%;
  text-align: center;
  margin-bottom: 30px;
  width: 25%;
  padding: 10px;
  list-style: none;
  box-sizing: border-box;
`;

const Title = styled.h2``;
const Thumbnail  = styled.img`
  width: 100%;
`;
const Description = styled.p``;

const Post = (props) => (
  <PostItem>
    <Thumbnail src={`${props.post.image}`} />
    <Title>{props.post.title}</Title>
    <Description>{props.post.body}</Description>

  </PostItem>
)

export default Post;  