var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var History = function History(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'History' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M1,12 C1,18.075 5.925,23 12,23 C18.075,23 23,18.075 23,12 C23,5.925 18.075,1 12,1 C7.563,1 4,4 2,7.5 M1,1 L1,8 L8,8 M16,17 L12,13 L12,6' })
      )
    )
  );
};

export default History;