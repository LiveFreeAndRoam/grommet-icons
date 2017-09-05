'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DocumentPpt = function DocumentPpt(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'DocumentPpt' }, props),
    _react2.default.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        _react2.default.createElement('path', { d: 'M4.99787498,8.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L4,23 M18,1 L18,6 L23,6 M4,12 L4.24999995,12 L5.49999995,12 C7.5,12 9,12.5 8.99999995,14.25 C8.9999999,16 7.5,16.5 5.49999995,16.5 L4.24999995,16.5 L4.24999995,19 L4,18.9999999 L4,12 Z' })
      )
    )
  );
};

exports.default = DocumentPpt;