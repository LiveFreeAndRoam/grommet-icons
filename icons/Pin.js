'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pin = function Pin(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'Pin' }, props),
    _react2.default.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        _react2.default.createElement('path', { d: 'M16,3 L10,9 C10,9 6,8 3,11 C3,11 13,21 13,21 C16,18 15,14 15,14 L21,8 L16,3 Z M1,23 L8,16 M14,1 L23,10' })
      )
    )
  );
};

exports.default = Pin;