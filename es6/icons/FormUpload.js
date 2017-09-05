var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var FormUpload = function FormUpload(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'FormUpload' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M6,14.1818182 L6,17.4545455 L18,17.4545455 L18,14.1818182 M12,6 L12,14 M8.18181818,9.81818182 L12,6 L15.8181818,9.81818182' })
      )
    )
  );
};

export default FormUpload;