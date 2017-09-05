'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormAttachment = function FormAttachment(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'FormAttachment' }, props),
    _react2.default.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        _react2.default.createElement('path', { d: 'M6,13.2932321 C7.63138164,11.6618504 10.6214284,8.67180351 12.3609131,6.93231878 C15.1879856,4.10524628 19.4285943,8.34585492 16.6015218,11.1729275 C13.7744493,14 11.6541453,16.1203048 10.2406087,17.5338408 C8.82707218,18.9473767 6.70676816,16.8270724 8.12030436,15.4135364 C9.53384056,14.0000004 14.4812175,9.05262308 14.4812175,9.05262308' })
      )
    )
  );
};

exports.default = FormAttachment;