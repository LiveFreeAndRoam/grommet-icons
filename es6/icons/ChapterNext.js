var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var ChapterNext = function ChapterNext(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'ChapterNext' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M1,3.5 L1,20 L10,14 L10,20 L21,12 L10,4 L10,10 L1,3.5 Z M22,2 L22,22 L22,2 Z' })
      )
    )
  );
};

export default ChapterNext;