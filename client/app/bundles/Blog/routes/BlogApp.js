import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import styled from 'styled-components';
import Helmet from 'react-helmet';
import { Provider } from 'react-redux';

import store from '../store';
import { MainLayout, LayoutRoute } from '../components/Layouts';
import history from '../utils/history';
import Home from '../containers/Home';
import '../styles/styles.scss';

const Wrapper = styled.div``;

const BlogApp = () =>(
  <Provider store={store}>
    <Router>
      <Switch>
        <LayoutRoute
          exact
          path="/"
          layout={MainLayout}
          component={Home}
        />
      </Switch>
    </Router>
  </Provider>
)

export default BlogApp;
