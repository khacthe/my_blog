import React from 'react';
import styled from 'styled-components';

import Post from './Post';

const Wrapper = styled.div``;
const Title = styled.h3``;
const Posts = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;

const Home = ({posts}) => (
  <Wrapper>
    <Posts>
      {posts &&
        posts.map(post => (
          <Post
            key={post.id}
            post={post}
          />
        ))
      }
    </Posts>
  </Wrapper>
);

export default Home;