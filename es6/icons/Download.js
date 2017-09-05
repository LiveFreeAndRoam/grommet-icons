var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Download = function Download(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Download' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M1,17 L1,23 L23,23 L23,17 M12,2 L12,19 M5,12 L12,19 L19,12' })
      )
    )
  );
};

export default Download;