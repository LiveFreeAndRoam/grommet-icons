var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Cube = function Cube(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Cube' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M12,2 L22,7 L22,17 L12,22 L2,17 L2,7 L12,2 Z M2,7 L12,12 L22,7 M12,12 L12,21.9999998 L12,12 Z' })
      )
    )
  );
};

export default Cube;