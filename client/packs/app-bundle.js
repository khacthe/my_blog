import ReactOnRails from 'react-on-rails';

import BlogApp from '../app/bundles/Blog/routes/BlogApp';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  BlogApp
});
