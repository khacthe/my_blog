import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { excerptBody } from '../../utils/main';

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

const ReadMore = styled(NavLink)``;

const Description = styled.p``;

const Post = ({ post } = props) => (
  <div className="item mb-5">
      <div className="media">
          <img className="mr-3 img-fluid post-thumb d-none d-md-flex" src="https://themes.3rdwavemedia.com/demo/devblog/assets/images/blog/blog-post-thumb-1.jpg" alt="image" />
          <div className="media-body">
              <h3 className="title mb-1"><Title to={`/post/${post.id}`}>{post.title}</Title></h3>
              <div className="meta mb-1"><span className="date">Published 2 days ago</span><span className="time">5 min read</span><span className="comment"><a href="#">8 comments</a></span></div>
              <div className="intro">
                <Description>{excerptBody(post.body, 40)}</Description>
              </div>
              <NavLink className="more-link" to={`/post/${post.id}`}>Read more &rarr;</NavLink>
          </div>
      </div>
  </div>
)

export default Post;
