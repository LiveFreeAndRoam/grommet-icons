'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Stakeholder = function Stakeholder(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'Stakeholder' }, props),
    _react2.default.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        _react2.default.createElement('path', { d: 'M14,9 L18.5,11 L23,9 L23,4 L18.5,2 L14,4 L14,9 Z M7,7 C4.791,7 3,8.791 3,11 C3,13.209 4.791,15 7,15 C9.209,15 11,13.209 11,11 C11,8.791 9.209,7 7,7 L7,7 Z M1,23 L1,21 C1,17 3.5,15 7,15 C10.5,15 13,17 13,21 L13,23 L1,23 Z M14,4 L18.5,6 L23,4 M18.5,6 L18.5,11 L18.5,6 Z' })
      )
    )
  );
};

exports.default = Stakeholder;