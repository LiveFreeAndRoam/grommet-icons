'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Aggregate = function Aggregate(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'Aggregate' }, props),
    _react2.default.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        _react2.default.createElement('path', { d: 'M16,9 L9,9 L9,16 L9,16 C9,19.8659932 12.1340068,23 16,23 L16,23 C19.8659932,23 23,19.8659932 23,16 C23,12.1340068 19.8659932,9 16,9 L16,9 Z M8,15 L15,15 L15,8 L15,8 C15,4.13400675 11.8659932,1 8,1 L8,1 C4.13400675,1 1,4.13400675 1,8 C1,11.8659932 4.13400675,15 8,15 L8,15 Z', transform: 'translate(12.000000, 12.000000) scale(-1, -1) translate(-12.000000, -12.000000) ' })
      )
    )
  );
};

exports.default = Aggregate;