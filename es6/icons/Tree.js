var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Tree = function Tree(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Tree' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M4,1 L10,1 L10,7 L4,7 L4,1 Z M16,11 L20,11 L20,15 L16,15 L16,11 Z M16,19 L20,19 L20,23 L16,23 L16,19 Z M7,7 L7,21 L16,21 M7,13 L16,13' })
      )
    )
  );
};

export default Tree;