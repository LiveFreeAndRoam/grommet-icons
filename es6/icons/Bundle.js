var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Bundle = function Bundle(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Bundle' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M17,14 L7,14 L17,14 Z M17,3 L23,3 L23,13 L17,13 M1,13 L1,17 L7,17 M17,17 L23,17 L23,13 M1,17 L1,21 L7,21 M23,17 L23,21 L17,21 M7,22 L17,22 L17,2 L7,2 L7,22 Z M7,13 L1,13 L1,3 L7,3' })
      )
    )
  );
};

export default Bundle;