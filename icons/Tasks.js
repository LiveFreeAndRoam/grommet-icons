'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tasks = function Tasks(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'Tasks' }, props),
    _react2.default.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        _react2.default.createElement('path', { d: 'M1,3 L23,3 L23,7 L1,7 L1,3 Z M1,10 L23,10 L23,14 L1,14 L1,10 Z M1,17 L23,17 L23,21 L1,21 L1,17 Z M1,4 L16,4 L16,6 L1,6 L1,4 Z M1,11 L6,11 L6,13 L1,13 L1,11 Z M1,18 L11,18 L11,20 L1,20 L1,18 Z' })
      )
    )
  );
};

exports.default = Tasks;