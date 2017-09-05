var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Lounge = function Lounge(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Lounge' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M5,5.99703014 C5,5.4463856 5.44994876,5 6.00684547,5 L17.9931545,5 C18.5492199,5 19,5.45303631 19,5.99703014 L19,13 L5,13 L5,5.99703014 Z M22,8 L22,15.0029699 C22,15.5536144 21.5446944,16 21.0081969,16 L2.99180311,16 C2.44404538,16 2,15.5469637 2,15.0029699 L2,8 M5,16 L5,18 L5,16 Z M19,16 L19,18 L19,16 Z' })
      )
    )
  );
};

export default Lounge;