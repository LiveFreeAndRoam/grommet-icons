var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var CirclePlay = function CirclePlay(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'CirclePlay' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M9.5,15.5 L15.5,12 L9.5,8.5 L9.5,15.5 Z M10.5,13.5 L12.5,12 L10.5,10.5 L10.5,13.5 Z' })
      )
    )
  );
};

export default CirclePlay;