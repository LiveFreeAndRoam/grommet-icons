var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Rss = function Rss(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Rss' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M22,21 C22,10.5065898 13.4934102,2 3,2 M17,21 C17,13.2680135 10.7319865,7 3,7 M12,21 C12,16.0294373 7.97056275,12 3,12 M4,23 C5.65685425,23 7,21.6568542 7,20 C7,18.3431458 5.65685425,17 4,17 C2.34314575,17 1,18.3431458 1,20 C1,21.6568542 2.34314575,23 4,23 Z' })
      )
    )
  );
};

export default Rss;