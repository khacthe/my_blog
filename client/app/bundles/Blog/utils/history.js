import { createBrowserHistory } from 'history';

const history = createBrowserHistory({
  getUserConfirmation(dialogKey, callback) {
    const dialogTrigger = window[Symbol.for(dialogKey)];

    if (dialogTrigger) {
      return dialogTrigger(callback);
    }

    return callback(true);
  },
});

export default history;
