var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var ObjectGroup = function ObjectGroup(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'ObjectGroup' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M1,1 L4,1 L4,4 L1,4 L1,1 Z M20,1 L23,1 L23,4 L20,4 L20,1 Z M4,2 L20,2 M4,22 L20,22 M1,20 L4,20 L4,23 L1,23 L1,20 Z M20,20 L23,20 L23,23 L20,23 L20,20 Z M2,4 L2,20 M22,4 L22,20 M7,7 L14,7 L14,13 L7,13 L7,7 Z M17,10 L17,17 L10,17 L10,15' })
      )
    )
  );
};

export default ObjectGroup;