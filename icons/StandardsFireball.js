'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StandardsFireball = function StandardsFireball(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'StandardsFireball' }, props),
    _react2.default.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { fill: '#000000' },
        _react2.default.createElement('path', { d: 'M24,11.9985002 C24,18.6306712 18.6276715,23.9970004 11.9985002,23.9970004 C5.37232846,23.9970004 0,18.6306712 0,11.9985002 C0,5.37832771 5.37232846,0 11.9985002,0 C18.6291714,0 24,5.37832771 24,11.9985002 L24,11.9985002 Z M11.9985002,15.1181102 L7.42407199,18.8211474 L9.53130859,13.3243345 L4.59542557,10.1177353 L10.4776903,10.4221972 L11.9985002,4.73340832 L13.528309,10.4221972 L19.4075741,10.1177353 L14.4701912,13.3243345 L16.5789276,18.8211474 L11.9985002,15.1181102 Z' })
      )
    )
  );
};

exports.default = StandardsFireball;