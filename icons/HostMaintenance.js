'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HostMaintenance = function HostMaintenance(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'HostMaintenance' }, props),
    _react2.default.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        _react2.default.createElement('path', { d: 'M14,23 L20,17 M21,14 C19.8954305,14 19,14.8954305 19,16 C19,17.1045695 19.8954305,18 21,18 C22.1045695,18 23,17.1045695 23,16 M17,4 L18,4 L18,5 L17,5 L17,4 Z M10,23 L3,23 L3,1 L3,1 L21,1 L21,11 M3,13 L17,13 M3,18 L13,18 M3,8 L21,8' })
      )
    )
  );
};

exports.default = HostMaintenance;