import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import { MainLayout, LayoutRoute } from '../components/Layouts';
import history from '../utils/history';
import Home from '../containers/Home';

const Wrapper = styled.div``;

const BlogApp = () =>(
  <Router history={history}>
    <Wrapper>
      <Helmet
        defer={false}
        htmlAttributes={{ lang: 'pt-br' }}
        encodeSpecialCharacters={true}
        defaultTitle="Blog"
        titleTemplate="Blog"
        titleAttributes={{ itemprop: 'name', lang: 'en-jp' }}
      />
      <Switch>
        <LayoutRoute
          exact
          path="/"
          layout={MainLayout}
          component={Home}
        />
      </Switch>
    </Wrapper>
  </Router>
)

export default BlogApp;