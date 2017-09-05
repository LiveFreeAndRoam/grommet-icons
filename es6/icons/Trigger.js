var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Trigger = function Trigger(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Trigger' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { strokeWidth: '2', stroke: '#000000' },
        React.createElement('polygon', { points: '4 14 10 14 7 23 9 23 20 9 14 9 18 1 7 1' })
      )
    )
  );
};

export default Trigger;