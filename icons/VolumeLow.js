'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VolumeLow = function VolumeLow(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'VolumeLow' }, props),
    _react2.default.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        _react2.default.createElement('path', { d: 'M1,8 L1,16 L6.09901951,16 L12,21 L12,3 L6,8 L1,8 Z M15,16 L15,16 C17.209139,16 19,14.209139 19,12 C19,9.790861 17.209139,8 15,8' })
      )
    )
  );
};

exports.default = VolumeLow;