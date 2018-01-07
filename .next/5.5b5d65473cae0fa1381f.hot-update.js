webpackHotUpdate(5,{

/***/ 836:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = __webpack_require__(608);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _typeahead = __webpack_require__(841);

var _typeahead2 = _interopRequireDefault(_typeahead);

var _finder = __webpack_require__(607);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/pangpond/Sites/Nextgensoft/exam/components/typeahead/address.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/pangpond/Sites/Nextgensoft/exam/components/typeahead/address.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS41YjVkNjU0NzNjYWUwZmExMzgxZi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90eXBlYWhlYWQvYWRkcmVzcy5qcz85OWU0Y2VhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbXBvc2UsIHdpdGhTdGF0ZSwgd2l0aFByb3BzLCBsaWZlY3ljbGUsIGRlZmF1bHRQcm9wcyB9IGZyb20gJ3JlY29tcG9zZSdcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IFR5cGVhaGVhZCBmcm9tICcuL3R5cGVhaGVhZCdcbmltcG9ydCB7IHJlc29sdmVSZXN1bHRieUZpZWxkIH0gZnJvbSAnLi9maW5kZXInXG5cbnR5cGUgQWRkcmVzc0lucHV0VHlwZSA9IHtcbiAgLy8gbG9jYWwgc3RhdGVcbiAgc2VhcmNoU3RyOiBzdHJpbmcsXG4gIG9wdGlvbjogc3RyaW5nW10sXG5cbiAgLy8gbG9jYWwgcHJvcHNcbiAgY2xlYXJlZDogYm9vbGVhbixcbiAgc2V0Q2xlYXJlZDogYm9vbGVhbiA9PiB2b2lkLFxuXG4gIC8vIGV4dGVybmFsIHByb3BzXG4gIGZpZWxkVHlwZTogc3RyaW5nLFxuICB2YWx1ZTogc3RyaW5nLFxuICBvbk9wdGlvblNlbGVjdGVkOiAob3B0aW9uOiBhbnkpID0+IHZvaWQsXG4gIHJlbmRlclJlc3VsdDogKGRhdGE6IGFueSkgPT4gUmVhY3QuQ29tcG9uZW50LFxufVxuY29uc3QgQWRkcmVzc1R5cGVhaGVhZENvbXBvbmVudCA9IChwcm9wczogQWRkcmVzc0lucHV0VHlwZSkgPT4ge1xuICBjb25zdCB7XG4gICAgc2VhcmNoU3RyLCBzZXRTZWFyY2hTdHIsIGZpZWxkVHlwZSwgb3B0aW9ucywgbGFiZWwsIHZhbHVlLFxuICB9ID0gcHJvcHNcbiAgaWYgKCFmaWVsZFR5cGUpIHtcbiAgICBjb25zb2xlLndhcm4oJ05vIGZpZWxkIHR5cGUgcHJvdmlkZScpXG4gICAgcmV0dXJuIDxkaXYgLz5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFR5cGVhaGVhZFxuICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgZGlzcGxheU9wdGlvbj17cHJvcHMucmVuZGVyUmVzdWx0fVxuICAgICAgZmlsdGVyT3B0aW9uPXtmaWVsZFR5cGV9XG4gICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgbWF4VmlzaWJsZT17NX1cbiAgICAgIHZhbHVlPXtzZWFyY2hTdHIubGVuZ3RoID8gc2VhcmNoU3RyIDogIXByb3BzLmNsZWFyZWQgPyB2YWx1ZSA6ICcnfVxuICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0U2VhcmNoU3RyKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgIG9uT3B0aW9uU2VsZWN0ZWQ9e29wdGlvbiA9PiBwcm9wcy5vbk9wdGlvblNlbGVjdGVkKG9wdGlvbil9XG4gICAgICBvbkNsZWFyPXsoKSA9PiB7XG4gICAgICAgIHByb3BzLnNldENsZWFyZWQodHJ1ZSlcbiAgICAgICAgc2V0U2VhcmNoU3RyKCcnKVxuICAgICAgfX1cbiAgICAvPlxuICApXG59XG5cbmNvbnN0IEFkZHJlc3NUeXBlYWhlYWQ6IENvbXBvbmVudDxBZGRyZXNzSW5wdXRUeXBlPiA9IGNvbXBvc2UoXG4gIHdpdGhTdGF0ZSgnc2VhcmNoU3RyJywgJ3NldFNlYXJjaFN0cicsICcnKSxcbiAgd2l0aFN0YXRlKCdjbGVhcmVkJywgJ3NldENsZWFyZWQnLCBmYWxzZSksXG4gIGxpZmVjeWNsZSh7XG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGlmIChuZXh0UHJvcHMudmFsdWUgIT09IHRoaXMucHJvcHMudmFsdWUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRTZWFyY2hTdHIobmV4dFByb3BzLnZhbHVlKVxuICAgICAgfVxuICAgIH0sXG4gIH0pLFxuICB3aXRoUHJvcHMoKHsgc2VhcmNoU3RyLCBmaWVsZFR5cGUsIHZhbHVlIH0pID0+ICh7XG4gICAgb3B0aW9uczogcmVzb2x2ZVJlc3VsdGJ5RmllbGQoZmllbGRUeXBlLCBzZWFyY2hTdHIubGVuZ3RoID8gc2VhcmNoU3RyIDogdmFsdWUpLFxuICB9KSksXG4gIGRlZmF1bHRQcm9wcyh7XG4gICAgcmVuZGVyUmVzdWx0OiBkYXRhID0+IChcbiAgICAgIDxzcGFuPlxuICAgICAgICB7ZGF0YS5zIHx8IDxsaT7guYTguKHguYjguKHguLXguYLguKPguIfguYDguKPguLXguKLguJnguJnguLXguYk8L2xpPn1cbiAgICAgICAge2AgwrsgJHtkYXRhLmR9IMK7ICR7ZGF0YS5hfSDCuyAke2RhdGEucH1gfVxuICAgICAgPC9zcGFuPlxuICAgICksXG4gICAgdmFsdWU6ICcnLFxuICB9KSxcbikoQWRkcmVzc1R5cGVhaGVhZENvbXBvbmVudClcblxuZXhwb3J0IGRlZmF1bHQgQWRkcmVzc1R5cGVhaGVhZFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy90eXBlYWhlYWQvYWRkcmVzcy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7OztBQWdCQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFaQTs7QUFBQTtBQWVBO0FBZkE7QUFDQTtBQVhBO0FBQ0E7QUEwQkE7QUFHQTtBQUVBO0FBQ0E7QUFFQTtBQUxBO0FBQ0E7QUFNQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQURBO0FBSUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFOQTtBQUNBO0FBU0E7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==