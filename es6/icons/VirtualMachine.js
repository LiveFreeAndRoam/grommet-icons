var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var VirtualMachine = function VirtualMachine(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'VirtualMachine' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M1,23 L14,23 L14,10 L1,10 L1,23 Z M10,19 L23,19 L23,6 L10,6 L10,19 Z M5,14 L18,14 L18,1 L5,1 L5,14 Z' })
      )
    )
  );
};

export default VirtualMachine;