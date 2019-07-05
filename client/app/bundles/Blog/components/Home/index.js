import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Post from './Post';
import { excerptBody } from '../../utils/main';

const Wrapper = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
`;

const LeftBody = styled.div`
  flex-basis: 100%;
`;

const TitleFeature = styled(NavLink)`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-decoration: none;
  display: block;
  color: #333;

  &:hover {
    color: #0095ab;
  }
`;
const DescriptionFeature = styled.p`
  font-size: 1.2rem;
  line-height: 1.5rem;
`;

const Title = styled.h3``;
const Posts = styled.ul`
  margin-top: 2rem;
`;

const Home = ({posts}) => (
  <Wrapper>
    <LeftBody>
      {posts && (
        <>
          <TitleFeature
            to={`/post/${posts[0].id}`}
          >{posts[0].title}</TitleFeature>
          <DescriptionFeature>{excerptBody(posts[0].body, 300)}</DescriptionFeature>
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
        </>
      )}
    </LeftBody>
  </Wrapper>
);

export default Home;
