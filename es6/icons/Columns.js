var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Columns = function Columns(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Columns' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M17,2 L17,22 L17,2 Z M12,2 L12,22 L12,2 Z M7,2 L7,22 L7,2 Z M2,22 L22,22 L22,2 L2,2 L2,22 Z' })
      )
    )
  );
};

export default Columns;