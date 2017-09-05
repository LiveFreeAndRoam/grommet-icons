'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormPreviousLink = function FormPreviousLink(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'FormPreviousLink' }, props),
    _react2.default.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        _react2.default.createElement('path', { d: 'M6,12.4 L18,12.4 M12.6,7 L18,12.4 L12.6,17.8', transform: 'translate(12.000000, 12.400000) scale(-1, 1) translate(-12.000000, -12.400000) ' })
      )
    )
  );
};

exports.default = FormPreviousLink;