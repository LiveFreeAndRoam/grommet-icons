var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var UserAdd = function UserAdd(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'UserAdd' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M5,24 L5,19 M11,24 L11,19 M1,24 L1,18 C1,13.0294373 4.13400675,11 8,11 C11.8659932,11 15,13 15,18 L15,24 M8,11 C10.7614237,11 13,8.76142375 13,6 C13,3.23857625 10.7614237,1 8,1 C5.23857625,1 3,3.23857625 3,6 C3,8.76142375 5.23857625,11 8,11 Z M16,11 L24,11 M20,7 L20,15' })
      )
    )
  );
};

export default UserAdd;