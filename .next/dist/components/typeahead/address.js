'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = require('recompose');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _typeahead = require('./typeahead');

var _typeahead2 = _interopRequireDefault(_typeahead);

var _finder = require('./finder');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pangpond/Sites/Nextgensoft/exam/components/typeahead/address.js';


var AddressTypeaheadComponent = function AddressTypeaheadComponent(props) {
  var searchStr = props.searchStr,
      setSearchStr = props.setSearchStr,
      fieldType = props.fieldType,
      options = props.options,
      label = props.label,
      value = props.value;

  if (!fieldType) {
    console.warn('No field type provide');
    return _react2.default.createElement('div', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      }
    });
  }

  return _react2.default.createElement(_typeahead2.default, {
    label: label,
    displayOption: props.renderResult,
    filterOption: fieldType,
    options: options,
    maxVisible: 5,
    value: searchStr.length ? searchStr : !props.cleared ? value : '',
    onChange: function onChange(e) {
      return setSearchStr(e.target.value);
    },
    onOptionSelected: function onOptionSelected(option) {
      return props.onOptionSelected(option);
    },
    onClear: function onClear() {
      props.setCleared(true);
      setSearchStr('');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  });
};

var AddressTypeahead = (0, _recompose.compose)((0, _recompose.withState)('searchStr', 'setSearchStr', ''), (0, _recompose.withState)('cleared', 'setCleared', false), (0, _recompose.lifecycle)({
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.props.setSearchStr(nextProps.value);
    }
  }
}), (0, _recompose.withProps)(function (_ref) {
  var searchStr = _ref.searchStr,
      fieldType = _ref.fieldType,
      value = _ref.value;
  return {
    options: (0, _finder.resolveResultbyField)(fieldType, searchStr.length ? searchStr : value)
  };
}), (0, _recompose.defaultProps)({
  renderResult: function renderResult(data) {
    return _react2.default.createElement('span', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      }
    }, data.s || _react2.default.createElement('li', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      }
    }, '\u0E44\u0E21\u0E48\u0E21\u0E35\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E19\u0E35\u0E49'), ' \xBB ' + data.d + ' \xBB ' + data.a + ' \xBB ' + data.p);
  },
  value: ''
}))(AddressTypeaheadComponent);

exports.default = AddressTypeahead;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdHlwZWFoZWFkL2FkZHJlc3MuanMiXSwibmFtZXMiOlsiY29tcG9zZSIsIndpdGhTdGF0ZSIsIndpdGhQcm9wcyIsImxpZmVjeWNsZSIsImRlZmF1bHRQcm9wcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiVHlwZWFoZWFkIiwicmVzb2x2ZVJlc3VsdGJ5RmllbGQiLCJBZGRyZXNzVHlwZWFoZWFkQ29tcG9uZW50IiwicHJvcHMiLCJzZWFyY2hTdHIiLCJzZXRTZWFyY2hTdHIiLCJmaWVsZFR5cGUiLCJvcHRpb25zIiwibGFiZWwiLCJ2YWx1ZSIsImNvbnNvbGUiLCJ3YXJuIiwicmVuZGVyUmVzdWx0IiwibGVuZ3RoIiwiY2xlYXJlZCIsImUiLCJ0YXJnZXQiLCJvbk9wdGlvblNlbGVjdGVkIiwib3B0aW9uIiwic2V0Q2xlYXJlZCIsIkFkZHJlc3NUeXBlYWhlYWQiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwiZGF0YSIsInMiLCJkIiwiYSIsInAiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQVMsQUFBUyxBQUFXLEFBQVcsQUFBVzs7QUFDbkQsQUFBTyxBQUFTOzs7O0FBRWhCLEFBQU8sQUFBZTs7OztBQUN0QixBQUFTLEFBQTRCOzs7Ozs7O0FBaUJyQyxJQUFNLDRCQUE0QixTQUE1QixBQUE0QiwwQkFBQSxBQUFDLE9BQTRCO01BQUEsQUFFM0QsWUFGMkQsQUFHekQsTUFIeUQsQUFFM0Q7TUFGMkQsQUFFaEQsZUFGZ0QsQUFHekQsTUFIeUQsQUFFaEQ7TUFGZ0QsQUFFbEMsWUFGa0MsQUFHekQsTUFIeUQsQUFFbEM7TUFGa0MsQUFFdkIsVUFGdUIsQUFHekQsTUFIeUQsQUFFdkI7TUFGdUIsQUFFZCxRQUZjLEFBR3pELE1BSHlELEFBRWQ7TUFGYyxBQUVQLFFBRk8sQUFHekQsTUFIeUQsQUFFUCxBQUV0RDs7TUFBSSxDQUFKLEFBQUssV0FBVyxBQUNkO1lBQUEsQUFBUSxLQUFSLEFBQWEsQUFDYjs7O2tCQUFPO29CQUFQLEFBQU8sQUFDUjtBQURRO0FBQUEsS0FBQTtBQUdUOzt5QkFDRSxBQUFDO1dBQUQsQUFDUyxBQUNQO21CQUFlLE1BRmpCLEFBRXVCLEFBQ3JCO2tCQUhGLEFBR2dCLEFBQ2Q7YUFKRixBQUlXLEFBQ1Q7Z0JBTEYsQUFLYyxBQUNaO1dBQU8sVUFBQSxBQUFVLFNBQVYsQUFBbUIsWUFBWSxDQUFDLE1BQUQsQUFBTyxVQUFQLEFBQWlCLFFBTnpELEFBTWlFLEFBQy9EO2NBQVUscUJBQUE7YUFBSyxhQUFhLEVBQUEsQUFBRSxPQUFwQixBQUFLLEFBQXNCO0FBUHZDLEFBUUU7c0JBQWtCLGtDQUFBO2FBQVUsTUFBQSxBQUFNLGlCQUFoQixBQUFVLEFBQXVCO0FBUnJELEFBU0U7YUFBUyxtQkFBTSxBQUNiO1lBQUEsQUFBTSxXQUFOLEFBQWlCLEFBQ2pCO21CQUFBLEFBQWEsQUFDZDtBQVpIOztnQkFBQTtrQkFERixBQUNFLEFBZUg7QUFmRztBQUNFLEdBREY7QUFWSjs7QUEyQkEsSUFBTSwyQ0FDSiwwQkFBQSxBQUFVLGFBQVYsQUFBdUIsZ0JBRDZCLEFBQ3BELEFBQXVDLEtBQ3ZDLDBCQUFBLEFBQVUsV0FBVixBQUFxQixjQUYrQixBQUVwRCxBQUFtQztBQUN6QixnRUFBQSxBQUNrQixXQUFXLEFBQ25DO1FBQUksVUFBQSxBQUFVLFVBQVUsS0FBQSxBQUFLLE1BQTdCLEFBQW1DLE9BQU8sQUFDeEM7V0FBQSxBQUFLLE1BQUwsQUFBVyxhQUFhLFVBQXhCLEFBQWtDLEFBQ25DO0FBQ0Y7QUFSaUQsQUFHcEQsQUFBVTtBQUFBLEFBQ1IsQ0FERixDQUhvRCw0QkFVMUMsZ0JBQUE7TUFBQSxBQUFHLGlCQUFILEFBQUc7TUFBSCxBQUFjLGlCQUFkLEFBQWM7TUFBZCxBQUF5QixhQUF6QixBQUF5Qjs7YUFDeEIsa0NBQUEsQUFBcUIsV0FBVyxVQUFBLEFBQVUsU0FBVixBQUFtQixZQURwRCxBQUFzQyxBQUNyQyxBQUErRDtBQUQxQixBQUM5QztBQVhrRCxBQVVwRCxDQUFBO2dCQUlnQiw0QkFBQTsyQkFDWixjQUFBOztrQkFBQTtvQkFBQSxBQUNHO0FBREg7QUFBQSxLQUFBLE9BQ0csQUFBSyxxQkFBSyxjQUFBOztrQkFBQTtvQkFBQTtBQUFBO0FBQUEsS0FBQSxFQURiLEFBQ2EsZ0hBQ0osS0FGVCxBQUVjLGVBQU8sS0FGckIsQUFFMEIsZUFBTyxLQUhyQixBQUNaLEFBRXNDO0FBSjdCLEFBT1g7U0FwQmtELEFBYXBELEFBQWEsQUFPSjtBQVBJLEFBQ1gsQ0FERixHQWJGLEFBQXNELEFBc0JwRCxBQUVGOztrQkFBQSxBQUFlIiwiZmlsZSI6ImFkZHJlc3MuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3Bhbmdwb25kL1NpdGVzL05leHRnZW5zb2Z0L2V4YW0ifQ==