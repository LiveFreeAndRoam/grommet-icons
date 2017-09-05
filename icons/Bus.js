'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bus = function Bus(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'Bus' }, props),
    _react2.default.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        _react2.default.createElement('path', { d: 'M3,12 L21,12 L21,20 L3,20 L3,12 Z M3,3.99961498 C3,2.89525812 3.8926228,2 4.99508929,2 L19.0049107,2 C20.1067681,2 21,2.88743329 21,3.99961498 L21,12 L3,12 L3,3.99961498 Z M3,20 L6,20 L6,22.0010434 C6,22.5527519 5.55733967,23 5.00104344,23 L3.99895656,23 C3.44724809,23 3,22.5573397 3,22.0010434 L3,20 Z M18,20 L21,20 L21,22.0010434 C21,22.5527519 20.5573397,23 20.0010434,23 L18.9989566,23 C18.4472481,23 18,22.5573397 18,22.0010434 L18,20 Z M7,17 C7.55228475,17 8,16.5522847 8,16 C8,15.4477153 7.55228475,15 7,15 C6.44771525,15 6,15.4477153 6,16 C6,16.5522847 6.44771525,17 7,17 Z M17,17 C17.5522847,17 18,16.5522847 18,16 C18,15.4477153 17.5522847,15 17,15 C16.4477153,15 16,15.4477153 16,16 C16,16.5522847 16.4477153,17 17,17 Z M12,6 L12,12 M1,5 L1,13 M23,5 L23,13 M10,16 L14,16 M3,5.99975586 L21,6' })
      )
    )
  );
};

exports.default = Bus;