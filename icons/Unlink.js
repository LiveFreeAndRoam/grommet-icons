'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Unlink = function Unlink(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'Unlink' }, props),
    _react2.default.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        _react2.default.createElement('path', { d: 'M17,11 L21.5856815,15.5856815 C22.366788,16.366788 22.3692352,17.6307648 21.5856815,18.4143185 L18.4143185,21.5856815 C17.633212,22.366788 16.3692352,22.3692352 15.5856815,21.5856815 L11,17 M17,8 L21,8 M16,7 L16,3 M8,21 L8,17 M3,16 L7,16 M7,13 L2.4143185,8.4143185 C1.63321196,7.63321196 1.63076481,6.36923519 2.4143185,5.5856815 L5.5856815,2.4143185 C6.36678804,1.63321196 7.63076481,1.63076481 8.4143185,2.4143185 L13,7' })
      )
    )
  );
};

exports.default = Unlink;