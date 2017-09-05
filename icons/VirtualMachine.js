'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VirtualMachine = function VirtualMachine(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'VirtualMachine' }, props),
    _react2.default.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        _react2.default.createElement('path', { d: 'M1,23 L14,23 L14,10 L1,10 L1,23 Z M10,19 L23,19 L23,6 L10,6 L10,19 Z M5,14 L18,14 L18,1 L5,1 L5,14 Z' })
      )
    )
  );
};

exports.default = VirtualMachine;