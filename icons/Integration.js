'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Integration = function Integration(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'Integration' }, props),
    _react2.default.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { stroke: '#231F20', strokeWidth: '2' },
        _react2.default.createElement('path', { d: 'M5,21 L23,21 L23,9 L5,9 M19,15 L1,15 L1,3 L19,3' })
      )
    )
  );
};

exports.default = Integration;