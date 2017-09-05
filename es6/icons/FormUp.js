var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var FormUp = function FormUp(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'FormUp' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { strokeWidth: '2', stroke: '#000000' },
        React.createElement('polyline', { transform: 'translate(12.000000, 12.000000) scale(1, -1) translate(-12.000000, -12.000000) ', points: '17.9999997 9 11.9999998 15 6 9' })
      )
    )
  );
};

export default FormUp;