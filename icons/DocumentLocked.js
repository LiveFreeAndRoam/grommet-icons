'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DocumentLocked = function DocumentLocked(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'DocumentLocked' }, props),
    _react2.default.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        _react2.default.createElement('path', { d: 'M4.99787498,6.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L17,23 M18,1 L18,6 L23,6 M4,15 L14,15 L14,23 L4,23 L4,15 Z M6,15 L6,13 C6,11.3431458 7.34314575,10 9,10 C10.6568542,10 12,11.3431458 12,13 L12,15 M8,19 L10,19' })
      )
    )
  );
};

exports.default = DocumentLocked;