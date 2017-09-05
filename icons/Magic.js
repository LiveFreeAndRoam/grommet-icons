'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Magic = function Magic(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'Magic' }, props),
    _react2.default.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        _react2.default.createElement('path', { d: 'M2.5,19.5 L19.5,2.5 L21.5,4.5 L4.5,21.5 L2.5,19.5 Z M3,20 L15,8 L16,9 L4,21 L3,20 Z M5.5,3 L5,3.5 L5.5,4 L6,3.5 L5.5,3 Z M11.5,3 L11,3.5 L11.5,4 L12,3.5 L11.5,3 Z M8.5,6 L8,6.5 L8.5,7 L9,6.5 L8.5,6 Z M20.5,12 L20,12.5 L20.5,13 L21,12.5 L20.5,12 Z M20.5,17 L20,17.5 L20.5,18 L21,17.5 L20.5,17 Z' })
      )
    )
  );
};

exports.default = Magic;