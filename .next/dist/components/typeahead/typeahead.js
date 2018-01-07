'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pangpond/Sites/Nextgensoft/exam/components/typeahead/typeahead.js';


var Typeahead = (0, _recompose.compose)((0, _recompose.defaultProps)({
  onChange: function onChange() {},
  option: [],
  maxVisible: 10
}), (0, _recompose.withState)('open', 'setOpen', false))(function (props) {
  return _react2.default.createElement('div', { className: 'typeahead typeahead-input-wrap', __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, _react2.default.createElement(_semanticUiReact.Form.Field, {
    control: _semanticUiReact.Input,
    label: props.label,
    onBlur: function onBlur() {
      return setTimeout(function () {
        return props.setOpen(false);
      }, 400);
    },
    onFocus: function onFocus() {
      return props.setOpen(true);
    },
    value: props.value,
    onChange: props.onChange,
    icon: _react2.default.createElement(_semanticUiReact.Icon, { name: 'close', link: true, onClick: function onClick() {
        console.log('Clear!');
        props.onClear();
      }, __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      }
    }),
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }), props.options.length && props.value.length && props.open ? _react2.default.createElement(_semanticUiReact.Form.Field, {
    control: _semanticUiReact.Input,
    label: props.label,
    onChange: function onChange() {
      return null;
    },
    value: props.options[0][props.filterOption],
    className: 'typeahead-input-hint',
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }) : null, props.open && props.options.length && props.value.length ? _react2.default.createElement('ul', { className: 'typeahead-selector', __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, props.options.filter(function (item, i) {
    return i < props.maxVisible;
  }).map(function (item, i) {
    return _react2.default.createElement('li', {
      key: i,
      onClick: function onClick() {
        props.onOptionSelected(item);
        props.setOpen(false);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      }
    }, props.displayOption(item));
  })) : null);
});

exports.default = Typeahead;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdHlwZWFoZWFkL3R5cGVhaGVhZC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsImRlZmF1bHRQcm9wcyIsIndpdGhTdGF0ZSIsImNvbXBvc2UiLCJGb3JtIiwiSW5wdXQiLCJJY29uIiwiVHlwZWFoZWFkIiwib25DaGFuZ2UiLCJvcHRpb24iLCJtYXhWaXNpYmxlIiwicHJvcHMiLCJsYWJlbCIsInNldFRpbWVvdXQiLCJzZXRPcGVuIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwib25DbGVhciIsIm9wdGlvbnMiLCJsZW5ndGgiLCJvcGVuIiwiZmlsdGVyT3B0aW9uIiwiZmlsdGVyIiwiaXRlbSIsImkiLCJtYXAiLCJvbk9wdGlvblNlbGVjdGVkIiwiZGlzcGxheU9wdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsQUFBTzs7OztBQUNQLEFBQVMsQUFBYyxBQUFXOztBQUNsQyxBQUNFLEFBQ0EsQUFDQTs7Ozs7OztBQW9CRixJQUFNO1lBRVEsb0JBQU0sQUFBRSxDQURQLEFBRVg7VUFGVyxBQUVILEFBQ1I7Y0FKbUQsQUFDckQsQUFBYSxBQUdDO0FBSEQsQUFDWCxDQURGLEdBS0EsMEJBQUEsQUFBVSxRQUFWLEFBQWtCLFdBTm1DLEFBTXJELEFBQTZCLFFBQzdCLFVBQUEsQUFBQyxPQUFEO3lCQUNBLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO0dBQUEsZ0NBQ0UsQUFBQyxzQkFBRCxBQUFNO0FBQU4sQUFDVyxBQUNUO1dBQU8sTUFGVCxBQUVlLEFBQ2I7WUFBUSxrQkFBQTt3QkFBaUIsWUFBQTtlQUFNLE1BQUEsQUFBTSxRQUFaLEFBQU0sQUFBYztBQUEvQixPQUFBLEVBQU4sQUFBTSxBQUF1QztBQUh2RCxBQUlFO2FBQVMsbUJBQUE7YUFBTSxNQUFBLEFBQU0sUUFBWixBQUFNLEFBQWM7QUFKL0IsQUFLRTtXQUFPLE1BTFQsQUFLZSxBQUNiO2NBQVUsTUFOWixBQU1rQixBQUNoQjswQkFBTSxBQUFDLHVDQUFLLE1BQU4sQUFBVyxTQUFRLE1BQW5CLE1BQXdCLFNBQVMsbUJBQU0sQUFDM0M7Z0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtjQUFBLEFBQU0sQUFDUDtBQUhLO2tCQUFBO29CQVBSLEFBT1EsQUFJTjtBQUpNO0tBQUE7Y0FQUjs7Z0JBQUE7a0JBREYsQUFDRSxBQWFDO0FBYkQ7QUFDRSxZQVlELEFBQU0sUUFBTixBQUFjLFVBQVUsTUFBQSxBQUFNLE1BQTlCLEFBQW9DLFVBQVUsTUFBOUMsQUFBb0QscUNBQ25ELEFBQUMsc0JBQUQsQUFBTTtBQUFOLEFBQ1csQUFDVDtXQUFPLE1BRlQsQUFFZSxBQUNiO2NBQVUsb0JBQUE7YUFBQSxBQUFNO0FBSGxCLEFBSUU7V0FBTyxNQUFBLEFBQU0sUUFBTixBQUFjLEdBQUcsTUFKMUIsQUFJUyxBQUF1QixBQUM5QjtlQUxGLEFBS1ksQUFDVjtjQU5GOztnQkFBQTtrQkFERCxBQUNDO0FBQUE7QUFDRSxHQURGLElBZkosQUF1Qk0sQUFFSCxZQUFBLEFBQU0sUUFBUSxNQUFBLEFBQU0sUUFBcEIsQUFBNEIsVUFBVSxNQUFBLEFBQU0sTUFBNUMsQUFBa0QseUJBQ2pELGNBQUEsUUFBSSxXQUFKLEFBQWM7Z0JBQWQ7a0JBQUEsQUFDRztBQURIO0dBQUEsUUFDRyxBQUFNLFFBQU4sQUFBYyxPQUFPLFVBQUEsQUFBQyxNQUFELEFBQU8sR0FBUDtXQUFhLElBQUksTUFBakIsQUFBdUI7QUFBNUMsS0FBQSxBQUF3RCxJQUFJLFVBQUEsQUFBQyxNQUFELEFBQU8sR0FBUDsyQkFDM0QsY0FBQTtXQUFBLEFBQ08sQUFDTDtlQUFTLG1CQUFNLEFBQ2I7Y0FBQSxBQUFNLGlCQUFOLEFBQXVCLEFBQ3ZCO2NBQUEsQUFBTSxRQUFOLEFBQWMsQUFDZjtBQUxIOztrQkFBQTtvQkFBQSxBQU9HO0FBUEg7QUFDRSxLQURGLFFBT0csQUFBTSxjQVJrRCxBQUMzRCxBQU9HLEFBQW9CO0FBVjVCLEFBQ0MsQUFDRyxRQTVCUCxBQUNBLEFBdUNNO0FBL0NSLEFBQXVELEFBbUR2RCxDQW5EdUQ7O2tCQW1EdkQsQUFBZSIsImZpbGUiOiJ0eXBlYWhlYWQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3Bhbmdwb25kL1NpdGVzL05leHRnZW5zb2Z0L2V4YW0ifQ==