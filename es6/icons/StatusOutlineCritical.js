var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var StatusOutlineCritical = function StatusOutlineCritical(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'StatusOutlineCritical' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M12.7031806,2.70318058 C12.3148247,2.31482467 11.6897542,2.31024575 11.2968194,2.70318058 L2.70318058,11.2968194 C2.31482467,11.6851753 2.31024575,12.3102458 2.70318058,12.7031806 L11.2968194,21.2968194 C11.6851753,21.6851753 12.3102458,21.6897542 12.7031806,21.2968194 L21.2968194,12.7031806 C21.6851753,12.3148247 21.6897542,11.6897542 21.2968194,11.2968194 L12.7031806,2.70318058 Z M8.98264552,14.7001725 L14.7001725,8.98264552 M8.98264552,8.98264552 L14.7001725,14.7001725' })
      )
    )
  );
};

export default StatusOutlineCritical;