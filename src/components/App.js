import React from 'react';

import LayoutOne from './layouts/sidebar/LayoutOne';

function App(props) {
  switch (props.layout) {
    case 'LayoutOne':
      return (<LayoutOne />)
    default:
      return (<LayoutOne />)
  }

}

export default App;
