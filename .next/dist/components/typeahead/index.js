'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _finder = require('./finder');

var _address = require('./address');

var _address2 = _interopRequireDefault(_address);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pangpond/Sites/Nextgensoft/exam/components/typeahead/index.js';

// import styles from './styles.css'

var AddressForm = function (_React$Component) {
  (0, _inherits3.default)(AddressForm, _React$Component);

  function AddressForm(props) {
    (0, _classCallCheck3.default)(this, AddressForm);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AddressForm.__proto__ || (0, _getPrototypeOf2.default)(AddressForm)).call(this, props));

    _this.state = {
      addressObj: undefined
    };
    _this.setAddressObj = _this.setAddressObj.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(AddressForm, [{
    key: 'setAddressObj',
    value: function setAddressObj(addressObj) {
      this.setState({ addressObj: addressObj });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var addressObj = this.state.addressObj;
      var defaultAddress = this.props.defaultAddress;

      var autoFields = [];

      var defaultAddressArr = (0, _keys2.default)(defaultAddress).map(function (key) {
        var value = defaultAddress[key];
        return [key, value];
      });

      return _react2.default.createElement('div', {
        className: 'jsx-1567396296',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: '1567396296',
        css: '.typeahead-input-wrap{position:relative;width:100%;padding-left:.5em;padding-right:.5em;}.typeahead input[type=\'text\'],.typeahead-input-hint{width:100%;box-sizing:border-box;background:#fff;color:#666;border:none;-webkit-transition:0.2s ease-in-out;transition:0.2s ease-in-out;font-size:inherit;-webkit-transition-property:color,background-color,border;transition-property:color,background-color,border;}.typeahead input[type=\'text\']:focus{border-color:#1e87f0;outline:none;}.typeahead-selector{width:100%;border:1px solid #eee;border-top:none;list-style:none;}.typeahead ul{padding:0;margin:0;}.typeahead-selector li{padding:10px 5px;background:#fff;border-bottom:1px solid #eee;cursor:pointer;}.tt-cursor,.typeahead-selector li:hover{background:#f5f5f5;}.typeahead-input-hint{opacity:0.3 !important;position:absolute;width:100%;border:1px solid rgba(0,0,0,0);top:0;left:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;border:none;padding-left:.5em;padding-right:.5em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdHlwZWFoZWFkL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJDVyxBQUdpQyxBQVVQLEFBWVUsQUFLVixBQU1ELEFBSU8sQUFPRSxBQUdJLFVBYmQsQ0F2QmEsQUFpQkEsTUFVTixDQXJDTCxDQWtDYixBQVVBLEVBdEJlLEVBeUJLLE1BOUNBLElBVUYsQUFpQkEsQUFVYSxDQWYvQixPQXlCYSxNQTlDUSxFQVVSLEFBaUJLLEdBb0JrQixRQW5DdEIsRUF5QkcsR0FUakIsQ0EzQkEsTUFhOEIsS0F3QjlCLE1BVVEsTUFDQyxPQUNVLHdDQW5DQyxrQkFDa0MsMkJBbUNoQyxvQkFDUixZQUNNLGtCQUNDLG1CQUNyQixZQXRDQSIsImZpbGUiOiJjb21wb25lbnRzL3R5cGVhaGVhZC9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGFuZ3BvbmQvU2l0ZXMvTmV4dGdlbnNvZnQvZXhhbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEZvcm0sIElucHV0IH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgeyBmaWVsZHNFbnVtIH0gZnJvbSAnLi9maW5kZXInXG5pbXBvcnQgQWRkcmVzc1R5cGVhaGVhZCBmcm9tICcuL2FkZHJlc3MnXG4vLyBpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLmNzcydcblxudHlwZSBBZGRyZXNzRm9ybUlucHV0UHJvcFR5cGUgPSB7XG4gIHZhbHVlczoge1xuICAgIGE6IHN0cmluZyxcbiAgICBkOiBzdHJpbmcsXG4gICAgcDogc3RyaW5nLFxuICAgIHM6IHN0cmluZyxcbiAgfSxcbiAgb25BZGRyZXNzU2VsZWN0ZWQ6IGFkZHJlc09iamVjdCA9PiB2b2lkLFxuICByZW5kZXJSZXN1bHQ6IGRhdGEgPT4gUmVhY3QuQ29tcG9uZW50LFxufVxuXG5jbGFzcyBBZGRyZXNzRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFkZHJlc3NPYmo6IHVuZGVmaW5lZCxcbiAgICB9XG4gICAgdGhpcy5zZXRBZGRyZXNzT2JqID0gdGhpcy5zZXRBZGRyZXNzT2JqLmJpbmQodGhpcylcbiAgfVxuXG4gIHNldEFkZHJlc3NPYmooYWRkcmVzc09iaikge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhZGRyZXNzT2JqIH0pXG4gIH1cbiAgcHJvcHM6IEFkZHJlc3NGb3JtSW5wdXRQcm9wVHlwZVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBhZGRyZXNzT2JqIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgeyBkZWZhdWx0QWRkcmVzcyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IGF1dG9GaWVsZHMgPSBbXVxuXG4gICAgY29uc3QgZGVmYXVsdEFkZHJlc3NBcnIgPSBPYmplY3Qua2V5cyhkZWZhdWx0QWRkcmVzcykubWFwKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZGVmYXVsdEFkZHJlc3Nba2V5XVxuICAgICAgcmV0dXJuIFtrZXksIHZhbHVlXVxuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC50eXBlYWhlYWQtaW5wdXQtd3JhcCB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogLjVlbTtcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogLjVlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50eXBlYWhlYWQtYWRkcmVzcy1jb250YWluZXIge1xuICAgICAgICAgICAgICAvLyBwYWRkaW5nOiAwIDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50eXBlYWhlYWQgaW5wdXRbdHlwZT0ndGV4dCddLFxuICAgICAgICAgICAgLnR5cGVhaGVhZC1pbnB1dC1oaW50IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgIC8vIHBhZGRpbmc6IDhweCA2cHg7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJvcmRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50eXBlYWhlYWQgaW5wdXRbdHlwZT0ndGV4dCddOmZvY3VzIHtcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMWU4N2YwO1xuICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudHlwZWFoZWFkLXNlbGVjdG9yIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgICAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudHlwZWFoZWFkIHVsIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnR5cGVhaGVhZC1zZWxlY3RvciBsaSB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNXB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnR0LWN1cnNvcixcbiAgICAgICAgICAgIC50eXBlYWhlYWQtc2VsZWN0b3IgbGk6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnR5cGVhaGVhZC1pbnB1dC1oaW50IHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC4zICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogLjVlbTtcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogLjVlbTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICB7T2JqZWN0LmtleXMoZmllbGRzRW51bSkubWFwKChrZXkpID0+IHtcbiAgICAgICAgICBsZXQgbmFtZVxuICAgICAgICAgIHN3aXRjaCAoZmllbGRzRW51bVtrZXldKSB7XG4gICAgICAgICAgICBjYXNlICdkJzpcbiAgICAgICAgICAgICAgbmFtZSA9ICfguJXguLPguJrguKUv4LmB4LiC4Lin4LiHJ1xuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnYSc6XG4gICAgICAgICAgICAgIG5hbWUgPSAn4Lit4Liz4LmA4Lig4LitL+C5gOC4guC4lSdcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ3AnOlxuICAgICAgICAgICAgICBuYW1lID0gJ+C4iOC4seC4h+C4q+C4p+C4seC4lCdcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ3MnOlxuICAgICAgICAgICAgICBuYW1lID0gJ+C5guC4o+C4h+C5gOC4o+C4teC4ouC4meC4l+C4teC5iOC4geC4s+C4peC4seC4h+C4qOC4tuC4geC4qeC4sidcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIG5hbWUgPSAnJ1xuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGFkZHJlc3NUeXBlYWhlYWQgPSAoXG4gICAgICAgICAgICA8QWRkcmVzc1R5cGVhaGVhZFxuICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgbGFiZWw9e25hbWV9XG4gICAgICAgICAgICAgIHJlbmRlclJlc3VsdD17dGhpcy5wcm9wcy5yZW5kZXJSZXN1bHR9XG4gICAgICAgICAgICAgIG9uT3B0aW9uU2VsZWN0ZWQ9eyhyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFkZHJlc3NPYmoocmVzdWx0KVxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25BZGRyZXNzU2VsZWN0ZWQocmVzdWx0KVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICB2YWx1ZT17YWRkcmVzc09ialxuICAgICAgICAgICAgICAgID8gYWRkcmVzc09ialtmaWVsZHNFbnVtW2tleV1dXG4gICAgICAgICAgICAgICAgOiBuZXcgTWFwKGRlZmF1bHRBZGRyZXNzQXJyKS5nZXQoZmllbGRzRW51bVtrZXldKX1cbiAgICAgICAgICAgICAgZmllbGRUeXBlPXtmaWVsZHNFbnVtW2tleV19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIClcblxuICAgICAgICAgIGlmIChmaWVsZHNFbnVtW2tleV0gIT09ICdzJykge1xuICAgICAgICAgICAgYXV0b0ZpZWxkcy5wdXNoKGFkZHJlc3NUeXBlYWhlYWQpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGtleT17a2V5fSBjbGFzc05hbWU9XCJ0eXBlYWhlYWQtYWRkcmVzcy1jb250YWluZXJcIiB3aWR0aHM9XCJlcXVhbFwiPlxuICAgICAgICAgICAgICAgIHthZGRyZXNzVHlwZWFoZWFkfVxuICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9KX1cblxuICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJ0eXBlYWhlYWQtYWRkcmVzcy1jb250YWluZXJcIiB3aWR0aHM9XCJlcXVhbFwiPlxuICAgICAgICAgIHthdXRvRmllbGRzLm1hcChmaWVsZCA9PiBmaWVsZCl9XG4gICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBZGRyZXNzRm9ybVxuIl19 */\n/*@ sourceURL=components/typeahead/index.js */'
      }), (0, _keys2.default)(_finder.fieldsEnum).map(function (key) {
        var name = void 0;
        switch (_finder.fieldsEnum[key]) {
          case 'd':
            name = 'ตำบล/แขวง';
            break;
          case 'a':
            name = 'อำเภอ/เขต';
            break;
          case 'p':
            name = 'จังหวัด';
            break;
          case 's':
            name = 'โรงเรียนที่กำลังศึกษา';
            break;
          default:
            name = '';
            break;
        }

        var addressTypeahead = _react2.default.createElement(_address2.default, {
          key: key,
          label: name,
          renderResult: _this2.props.renderResult,
          onOptionSelected: function onOptionSelected(result) {
            _this2.setAddressObj(result);
            _this2.props.onAddressSelected(result);
          },
          value: addressObj ? addressObj[_finder.fieldsEnum[key]] : new _map2.default(defaultAddressArr).get(_finder.fieldsEnum[key]),
          fieldType: _finder.fieldsEnum[key],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          }
        });

        if (_finder.fieldsEnum[key] !== 's') {
          autoFields.push(addressTypeahead);
        } else {
          return _react2.default.createElement(_semanticUiReact.Form.Group, { key: key, className: 'typeahead-address-container', widths: 'equal', __source: {
              fileName: _jsxFileName,
              lineNumber: 148
            }
          }, addressTypeahead);
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Group, { className: 'typeahead-address-container', widths: 'equal', __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, autoFields.map(function (field) {
        return field;
      })));
    }
  }]);

  return AddressForm;
}(_react2.default.Component);

exports.default = AddressForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdHlwZWFoZWFkL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiRm9ybSIsIklucHV0IiwiZmllbGRzRW51bSIsIkFkZHJlc3NUeXBlYWhlYWQiLCJBZGRyZXNzRm9ybSIsInByb3BzIiwic3RhdGUiLCJhZGRyZXNzT2JqIiwidW5kZWZpbmVkIiwic2V0QWRkcmVzc09iaiIsImJpbmQiLCJzZXRTdGF0ZSIsImRlZmF1bHRBZGRyZXNzIiwiYXV0b0ZpZWxkcyIsImRlZmF1bHRBZGRyZXNzQXJyIiwibWFwIiwia2V5IiwidmFsdWUiLCJuYW1lIiwiYWRkcmVzc1R5cGVhaGVhZCIsInJlbmRlclJlc3VsdCIsInJlc3VsdCIsIm9uQWRkcmVzc1NlbGVjdGVkIiwiZ2V0IiwicHVzaCIsImZpZWxkIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTLEFBQU07O0FBQ2YsQUFBUyxBQUFrQjs7QUFDM0IsQUFBTyxBQUFzQjs7Ozs7Ozs7QUFDN0I7O0lBYU0sQTt1Q0FDSjs7dUJBQUEsQUFBWSxPQUFPO3dDQUFBOztnSkFBQSxBQUNYLEFBQ047O1VBQUEsQUFBSztrQkFBTCxBQUFhLEFBQ0MsQUFFZDtBQUhhLEFBQ1g7VUFFRixBQUFLLGdCQUFnQixNQUFBLEFBQUssY0FBTCxBQUFtQixLQUx2QixBQUtqQjtXQUNEOzs7OztrQyxBQUVhLFlBQVksQUFDeEI7V0FBQSxBQUFLLFNBQVMsRUFBRSxZQUFoQixBQUFjLEFBQ2Y7Ozs7NkJBRVE7bUJBQUE7O1VBQUEsQUFDQyxhQUFlLEtBRGhCLEFBQ3FCLE1BRHJCLEFBQ0M7VUFERCxBQUVDLGlCQUFtQixLQUZwQixBQUV5QixNQUZ6QixBQUVDLEFBQ1I7O1VBQU0sYUFBTixBQUFtQixBQUVuQjs7VUFBTSx3Q0FBb0IsQUFBWSxnQkFBWixBQUE0QixJQUFJLFVBQUEsQUFBQyxLQUFRLEFBQ2pFO1lBQU0sUUFBUSxlQUFkLEFBQWMsQUFBZSxBQUM3QjtlQUFPLENBQUEsQUFBQyxLQUFSLEFBQU8sQUFBTSxBQUNkO0FBSEQsQUFBMEIsQUFLMUIsT0FMMEI7OzZCQU14QixjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsT0FBQTtpQkFBQTthQUFBLEFBa0VHO0FBbEVILGtEQWtFRyxBQUF3QixJQUFJLFVBQUEsQUFBQyxLQUFRLEFBQ3BDO1lBQUksWUFBSixBQUNBO2dCQUFRLG1CQUFSLEFBQVEsQUFBVyxBQUNqQjtlQUFBLEFBQUssQUFDSDttQkFBQSxBQUFPLEFBQ1A7QUFDRjtlQUFBLEFBQUssQUFDSDttQkFBQSxBQUFPLEFBQ1A7QUFDRjtlQUFBLEFBQUssQUFDSDttQkFBQSxBQUFPLEFBQ1A7QUFDRjtlQUFBLEFBQUssQUFDSDttQkFBQSxBQUFPLEFBQ1A7QUFDRjtBQUNFO21CQUFBLEFBQU8sQUFDUDtBQWZKLEFBa0JBOzs7WUFBTSxtQ0FDSixBQUFDO2VBQUQsQUFDTyxBQUNMO2lCQUZGLEFBRVMsQUFDUDt3QkFBYyxPQUFBLEFBQUssTUFIckIsQUFHMkIsQUFDekI7NEJBQWtCLDBCQUFBLEFBQUMsUUFBVyxBQUM1QjttQkFBQSxBQUFLLGNBQUwsQUFBbUIsQUFDbkI7bUJBQUEsQUFBSyxNQUFMLEFBQVcsa0JBQVgsQUFBNkIsQUFDOUI7QUFQSCxBQVFFO2lCQUFPLGFBQ0gsV0FBVyxtQkFEUixBQUNILEFBQVcsQUFBVyxRQUN0QixrQkFBQSxBQUFRLG1CQUFSLEFBQTJCLElBQUksbUJBVnJDLEFBVU0sQUFBK0IsQUFBVyxBQUM5QztxQkFBVyxtQkFYYixBQVdhLEFBQVc7O3NCQVh4Qjt3QkFERixBQUNFLEFBZUY7QUFmRTtBQUNFLFNBREY7O1lBZUUsbUJBQUEsQUFBVyxTQUFmLEFBQXdCLEtBQUssQUFDM0I7cUJBQUEsQUFBVyxLQUFYLEFBQWdCLEFBQ2pCO0FBRkQsZUFFTyxBQUNMO2lDQUNHLGNBQUQsc0JBQUEsQUFBTSxTQUFNLEtBQVosQUFBaUIsS0FBSyxXQUF0QixBQUFnQywrQkFBOEIsUUFBOUQsQUFBcUU7d0JBQXJFOzBCQUFBLEFBQ0c7QUFESDtXQUFBLEVBREYsQUFDRSxBQUlIO0FBQ0Y7QUEvR0gsQUFrRUcsQUErQ0QsT0EvQ0MsQUFBWSxtQkErQ1osY0FBRCxzQkFBQSxBQUFNLFNBQU0sV0FBWixBQUFzQiwrQkFBOEIsUUFBcEQsQUFBMkQ7b0JBQTNEO3NCQUFBLEFBQ0c7QUFESDtvQkFDRyxBQUFXLElBQUksaUJBQUE7ZUFBQSxBQUFTO0FBbkgvQixBQUNFLEFBaUhFLEFBQ0csQUFJUjs7Ozs7RUE5SXVCLGdCQUFNLEEsQUFpSmhDOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wYW5ncG9uZC9TaXRlcy9OZXh0Z2Vuc29mdC9leGFtIn0=