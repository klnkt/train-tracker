import React from 'react';
import ReactDOM from 'react-dom';
import 'material-design-icons/iconfont/material-icons.css';
import 'material-components-web/dist/material-components-web.css';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  React.createElement(App),
  document.getElementById('root'),
);
registerServiceWorker();
