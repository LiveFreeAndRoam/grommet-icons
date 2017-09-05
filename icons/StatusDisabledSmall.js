'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StatusDisabledSmall = function StatusDisabledSmall(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'StatusDisabledSmall' }, props),
    _react2.default.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { stroke: '#000000', fill: '#000000' },
        _react2.default.createElement('rect', { x: '1', y: '1', width: '10', height: '10', rx: '1' })
      )
    )
  );
};

exports.default = StatusDisabledSmall;