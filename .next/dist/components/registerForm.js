'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _typeahead = require('./typeahead/');

var _typeahead2 = _interopRequireDefault(_typeahead);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pangpond/Sites/Nextgensoft/exam/components/registerForm.js',
    _this = undefined;

var steps = [{
  key: 'register',
  active: true,
  title: 'กรอกข้อมูล',
  description: 'ชื่อ-สกุล, สถานศึกษา'
}, {
  key: 'finish',
  disabled: true,
  title: 'สำเร็จ'
}];

var titles = [{ key: 'ด.ช.', text: 'เด็กชาย', value: 'ด.ช.' }, { key: 'ด.ญ.', text: 'เด็กหญิง', value: 'ด.ญ.' }, { key: 'นาย', text: 'นาย', value: 'นาย' }, { key: 'นางสาว', text: 'นางสาว', value: 'นางสาว' }];

var SchoolNameInput = function SchoolNameInput(defaultAddress) {
  var defaultAddressObject = {
    s: defaultAddress.prev_edu_name,
    a: defaultAddress.prev_edu_sub_district,
    d: defaultAddress.prev_edu_district,
    p: defaultAddress.prev_edu_province
  };

  console.log('defaultAddress');
  console.log(defaultAddress);

  return _react2.default.createElement(_typeahead2.default, {
    renderResult: function renderResult(data) {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, '\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19', _react2.default.createElement('b', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, data.s), ' \u0E08\u0E31\u0E07\u0E2B\u0E27\u0E31\u0E14', _react2.default.createElement('b', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, data.p), ' \u0E15\u0E33\u0E1A\u0E25', _react2.default.createElement('b', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, data.d), ' \u0E2D\u0E33\u0E40\u0E20\u0E2D', _react2.default.createElement('b', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, data.a));
    },
    onAddressSelected: function onAddressSelected(addressObject) {
      return _this.handleChangeAddress(addressObject);
    },
    defaultAddress: defaultAddressObject,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  });
};

var RegisterForm = function (_Component) {
  (0, _inherits3.default)(RegisterForm, _Component);

  function RegisterForm(props) {
    var _this3 = this;

    (0, _classCallCheck3.default)(this, RegisterForm);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (RegisterForm.__proto__ || (0, _getPrototypeOf2.default)(RegisterForm)).call(this, props));

    _this2.handleChangeLevel = function (e, _ref) {
      var value = _ref.value;
      return _this2.setState({ prev_edu_source: value });
    };

    _this2.handleChangeTitle = function (e, _ref2) {
      var value = _ref2.value;
      return _this2.setState({ title: value });
    };

    _this2.handleChange = function (e, _ref3) {
      var name = _ref3.name,
          value = _ref3.value;

      _this2.setState((0, _defineProperty3.default)({}, name, value));
    };

    _this2.handleChangeAddress = function (address) {
      var prev_edu_name = address.s,
          prev_edu_sub_district = address.a,
          prev_edu_district = address.d,
          prev_edu_province = address.p;

      _this2.setState({
        prev_edu_name: prev_edu_name,
        prev_edu_sub_district: prev_edu_sub_district,
        prev_edu_district: prev_edu_district,
        prev_edu_province: prev_edu_province
      });
    };

    _this2.handleSubmit = function (event) {
      event.preventDefault();
      var _this2$state = _this2.state,
          citizen = _this2$state.citizen,
          title = _this2$state.title,
          firstname = _this2$state.firstname,
          lastname = _this2$state.lastname,
          prev_edu_name = _this2$state.prev_edu_name,
          prev_edu_sub_district = _this2$state.prev_edu_sub_district,
          prev_edu_district = _this2$state.prev_edu_district,
          prev_edu_province = _this2$state.prev_edu_province,
          prev_edu_source = _this2$state.prev_edu_source;

      if (citizen !== '') {
        var registrantInfo = {
          title: title,
          firstname: firstname,
          lastname: lastname,
          citizen_id: citizen,
          school_id: '159',
          target_id: '7',
          prev_edu_name: prev_edu_name,
          prev_edu_sub_district: prev_edu_sub_district,
          prev_edu_district: prev_edu_district,
          prev_edu_province: prev_edu_province,
          prev_edu_source: prev_edu_source

          // console.log(registrantInfo)
        };_this2.register(registrantInfo);
      } else {
        _this2.setState({ error: true, errorMsg: 'กรุณากรอกข้อมูลให้ครบถ้วน' });
      }
    };

    _this2.register = function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(bodyProperty) {
        var res;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch('https://rest.nextschool.io/v1/exam/registrant', {
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: (0, _stringify2.default)((0, _extends3.default)({}, bodyProperty)),
                  credentials: 'same-origin'
                }).then(function (response) {
                  if (response.status >= 400) {
                    throw new Error('API Server Error');
                  }
                  if (response.status === 204) {
                    return {
                      status: 'options'
                    };
                  }
                  return response.json();
                }).then(function (data) {
                  if (data.status === 'ok') {
                    steps = [{
                      key: 'register',
                      title: 'กรอกข้อมูล',
                      completed: true,
                      description: 'ชื่อ-สกุล, สถานศึกษา'
                    }, {
                      key: 'finish',
                      active: true,
                      completed: true,
                      title: 'สำเร็จ',
                      description: 'ได้รับข้อมูลเรียบร้อยแล้ว'
                    }];
                    _this2.setState({ finish: true, steps: steps });
                  } else if (data.status === 'fail') {
                    // console.log(bodyProperty)
                    // console.log(data)
                    _this2.setState({
                      error: true,
                      errorMsg: 'ผิดพลาด ไม่สามารถบันทึกข้อมูลสมัครได้'
                    });
                  }
                });

              case 2:
                res = _context.sent;

                _this2.setState({ loading: false });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this3);
      }));

      return function (_x) {
        return _ref4.apply(this, arguments);
      };
    }();

    _this2.state = {
      steps: steps,
      title: '',
      firstname: '',
      lastname: '',
      prev_edu_name: '',
      prev_edu_sub_district: '',
      prev_edu_district: '',
      prev_edu_province: '',
      prev_edu_source: '',
      loading: false,
      error: false,
      errorMsg: '',
      finish: false
    };

    _this2.handleChange = _this2.handleChange.bind(_this2);
    _this2.handleSubmit = _this2.handleSubmit.bind(_this2);
    return _this2;
  }

  (0, _createClass3.default)(RegisterForm, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        citizen: this.props.citizen,
        title: this.props.title,
        firstname: this.props.firstname,
        lastname: this.props.lastname,
        prev_edu_name: this.props.prev_edu_name,
        prev_edu_sub_district: this.props.prev_edu_sub_district,
        prev_edu_district: this.props.prev_edu_district,
        prev_edu_province: this.props.prev_edu_province,
        prev_edu_source: this.props.prev_edu_source
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.state.citizen === '' || typeof this.state.citizen === 'undefined') {
        _index2.default.push('/');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _state = this.state,
          citizen = _state.citizen,
          title = _state.title,
          firstname = _state.firstname,
          lastname = _state.lastname,
          prev_edu_name = _state.prev_edu_name,
          prev_edu_sub_district = _state.prev_edu_sub_district,
          prev_edu_district = _state.prev_edu_district,
          prev_edu_province = _state.prev_edu_province,
          prev_edu_source = _state.prev_edu_source,
          loading = _state.loading,
          error = _state.error,
          errorMsg = _state.errorMsg,
          finish = _state.finish;

      var defaultAddress = {
        s: this.props.prev_edu_name,
        a: this.props.prev_edu_sub_district,
        d: this.props.prev_edu_district,
        p: this.props.prev_edu_province

        // const defaultAddress = {}

      };return _react2.default.createElement('div', {
        style: { display: 'flex', minHeight: '100vh', flexDirection: 'column' },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        }
      }, _react2.default.createElement('div', { style: { flex: 1 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: '1606080505',
        css: '.ui.text.container{max-width:fit-content !important;}.bgMain{background-color:#ee4616 !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmVnaXN0ZXJGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlRZSxBQUdvRCxBQUdHLGlDQUZ0QyxHQUdBIiwiZmlsZSI6ImNvbXBvbmVudHMvcmVnaXN0ZXJGb3JtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wYW5ncG9uZC9TaXRlcy9OZXh0Z2Vuc29mdC9leGFtIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBDb250YWluZXIsXG4gIFNlZ21lbnQsXG4gIEhlYWRlcixcbiAgSWNvbixcbiAgU3RlcCxcbiAgQnV0dG9uLFxuICBDaGVja2JveCxcbiAgRm9ybSxcbiAgSW5wdXQsXG4gIFJhZGlvLFxuICBTZWxlY3QsXG4gIERpdmlkZXIsXG4gIEdyaWQsXG4gIE1lc3NhZ2UsXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBUeXBlYWhlYWQgZnJvbSAnLi90eXBlYWhlYWQvJ1xuXG5sZXQgc3RlcHMgPSBbXG4gIHtcbiAgICBrZXk6ICdyZWdpc3RlcicsXG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIHRpdGxlOiAn4LiB4Lij4Lit4LiB4LiC4LmJ4Lit4Lih4Li54LilJyxcbiAgICBkZXNjcmlwdGlvbjogJ+C4iuC4t+C5iOC4rS3guKrguIHguLjguKUsIOC4quC4luC4suC4meC4qOC4tuC4geC4qeC4sicsXG4gIH0sXG4gIHtcbiAgICBrZXk6ICdmaW5pc2gnLFxuICAgIGRpc2FibGVkOiB0cnVlLFxuICAgIHRpdGxlOiAn4Liq4Liz4LmA4Lij4LmH4LiIJyxcbiAgfSxcbl1cblxuY29uc3QgdGl0bGVzID0gW1xuICB7IGtleTogJ+C4lC7guIouJywgdGV4dDogJ+C5gOC4lOC5h+C4geC4iuC4suC4oicsIHZhbHVlOiAn4LiULuC4ii4nIH0sXG4gIHsga2V5OiAn4LiULuC4jS4nLCB0ZXh0OiAn4LmA4LiU4LmH4LiB4Lir4LiN4Li04LiHJywgdmFsdWU6ICfguJQu4LiNLicgfSxcbiAgeyBrZXk6ICfguJnguLLguKInLCB0ZXh0OiAn4LiZ4Liy4LiiJywgdmFsdWU6ICfguJnguLLguKInIH0sXG4gIHsga2V5OiAn4LiZ4Liy4LiH4Liq4Liy4LinJywgdGV4dDogJ+C4meC4suC4h+C4quC4suC4pycsIHZhbHVlOiAn4LiZ4Liy4LiH4Liq4Liy4LinJyB9LFxuXVxuXG5jb25zdCBTY2hvb2xOYW1lSW5wdXQgPSAoZGVmYXVsdEFkZHJlc3MpID0+IHtcbiAgY29uc3QgZGVmYXVsdEFkZHJlc3NPYmplY3QgPSB7XG4gICAgczogZGVmYXVsdEFkZHJlc3MucHJldl9lZHVfbmFtZSxcbiAgICBhOiBkZWZhdWx0QWRkcmVzcy5wcmV2X2VkdV9zdWJfZGlzdHJpY3QsXG4gICAgZDogZGVmYXVsdEFkZHJlc3MucHJldl9lZHVfZGlzdHJpY3QsXG4gICAgcDogZGVmYXVsdEFkZHJlc3MucHJldl9lZHVfcHJvdmluY2UsXG4gIH1cblxuICBjb25zb2xlLmxvZygnZGVmYXVsdEFkZHJlc3MnKVxuICBjb25zb2xlLmxvZyhkZWZhdWx0QWRkcmVzcylcblxuICByZXR1cm4gKFxuICAgIDxUeXBlYWhlYWRcbiAgICAgIHJlbmRlclJlc3VsdD17ZGF0YSA9PiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAg4LmC4Lij4LiH4LmA4Lij4Li14Lii4LiZXG4gICAgICAgICAgPGI+e2RhdGEuc308L2I+IOC4iOC4seC4h+C4q+C4p+C4seC4lFxuICAgICAgICAgIDxiPntkYXRhLnB9PC9iPiDguJXguLPguJrguKVcbiAgICAgICAgICA8Yj57ZGF0YS5kfTwvYj4g4Lit4Liz4LmA4Lig4LitXG4gICAgICAgICAgPGI+e2RhdGEuYX08L2I+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIG9uQWRkcmVzc1NlbGVjdGVkPXthZGRyZXNzT2JqZWN0ID0+IHRoaXMuaGFuZGxlQ2hhbmdlQWRkcmVzcyhhZGRyZXNzT2JqZWN0KX1cbiAgICAgIGRlZmF1bHRBZGRyZXNzPXtkZWZhdWx0QWRkcmVzc09iamVjdH1cbiAgICAvPlxuICApXG59XG5cbmNsYXNzIFJlZ2lzdGVyRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0ZXBzLFxuICAgICAgdGl0bGU6ICcnLFxuICAgICAgZmlyc3RuYW1lOiAnJyxcbiAgICAgIGxhc3RuYW1lOiAnJyxcbiAgICAgIHByZXZfZWR1X25hbWU6ICcnLFxuICAgICAgcHJldl9lZHVfc3ViX2Rpc3RyaWN0OiAnJyxcbiAgICAgIHByZXZfZWR1X2Rpc3RyaWN0OiAnJyxcbiAgICAgIHByZXZfZWR1X3Byb3ZpbmNlOiAnJyxcbiAgICAgIHByZXZfZWR1X3NvdXJjZTogJycsXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgIGVycm9yTXNnOiAnJyxcbiAgICAgIGZpbmlzaDogZmFsc2UsXG4gICAgfVxuXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpXG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjaXRpemVuOiB0aGlzLnByb3BzLmNpdGl6ZW4sXG4gICAgICB0aXRsZTogdGhpcy5wcm9wcy50aXRsZSxcbiAgICAgIGZpcnN0bmFtZTogdGhpcy5wcm9wcy5maXJzdG5hbWUsXG4gICAgICBsYXN0bmFtZTogdGhpcy5wcm9wcy5sYXN0bmFtZSxcbiAgICAgIHByZXZfZWR1X25hbWU6IHRoaXMucHJvcHMucHJldl9lZHVfbmFtZSxcbiAgICAgIHByZXZfZWR1X3N1Yl9kaXN0cmljdDogdGhpcy5wcm9wcy5wcmV2X2VkdV9zdWJfZGlzdHJpY3QsXG4gICAgICBwcmV2X2VkdV9kaXN0cmljdDogdGhpcy5wcm9wcy5wcmV2X2VkdV9kaXN0cmljdCxcbiAgICAgIHByZXZfZWR1X3Byb3ZpbmNlOiB0aGlzLnByb3BzLnByZXZfZWR1X3Byb3ZpbmNlLFxuICAgICAgcHJldl9lZHVfc291cmNlOiB0aGlzLnByb3BzLnByZXZfZWR1X3NvdXJjZSxcbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5zdGF0ZS5jaXRpemVuID09PSAnJyB8fFxuICAgICAgdHlwZW9mIHRoaXMuc3RhdGUuY2l0aXplbiA9PT0gJ3VuZGVmaW5lZCdcbiAgICApIHtcbiAgICAgIFJvdXRlci5wdXNoKCcvJylcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDaGFuZ2VMZXZlbCA9IChlLCB7IHZhbHVlIH0pID0+XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByZXZfZWR1X3NvdXJjZTogdmFsdWUgfSlcblxuICBoYW5kbGVDaGFuZ2VUaXRsZSA9IChlLCB7IHZhbHVlIH0pID0+IHRoaXMuc2V0U3RhdGUoeyB0aXRsZTogdmFsdWUgfSlcblxuICBoYW5kbGVDaGFuZ2UgPSAoZSwgeyBuYW1lLCB2YWx1ZSB9KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtuYW1lXTogdmFsdWUgfSlcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZUFkZHJlc3MgPSAoYWRkcmVzcykgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHM6IHByZXZfZWR1X25hbWUsXG4gICAgICBhOiBwcmV2X2VkdV9zdWJfZGlzdHJpY3QsXG4gICAgICBkOiBwcmV2X2VkdV9kaXN0cmljdCxcbiAgICAgIHA6IHByZXZfZWR1X3Byb3ZpbmNlXG4gICAgfSA9IGFkZHJlc3NcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcHJldl9lZHVfbmFtZSxcbiAgICAgIHByZXZfZWR1X3N1Yl9kaXN0cmljdCxcbiAgICAgIHByZXZfZWR1X2Rpc3RyaWN0LFxuICAgICAgcHJldl9lZHVfcHJvdmluY2UsXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCB7XG4gICAgICBjaXRpemVuLFxuICAgICAgdGl0bGUsXG4gICAgICBmaXJzdG5hbWUsXG4gICAgICBsYXN0bmFtZSxcbiAgICAgIHByZXZfZWR1X25hbWUsXG4gICAgICBwcmV2X2VkdV9zdWJfZGlzdHJpY3QsXG4gICAgICBwcmV2X2VkdV9kaXN0cmljdCxcbiAgICAgIHByZXZfZWR1X3Byb3ZpbmNlLFxuICAgICAgcHJldl9lZHVfc291cmNlXG4gICAgfSA9IHRoaXMuc3RhdGVcblxuICAgIGlmIChcbiAgICAgIGNpdGl6ZW4gIT09ICcnXG4gICAgKSB7XG4gICAgICBjb25zdCByZWdpc3RyYW50SW5mbyA9IHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGZpcnN0bmFtZSxcbiAgICAgICAgbGFzdG5hbWUsXG4gICAgICAgIGNpdGl6ZW5faWQ6IGNpdGl6ZW4sXG4gICAgICAgIHNjaG9vbF9pZDogJzE1OScsXG4gICAgICAgIHRhcmdldF9pZDogJzcnLFxuICAgICAgICBwcmV2X2VkdV9uYW1lLFxuICAgICAgICBwcmV2X2VkdV9zdWJfZGlzdHJpY3QsXG4gICAgICAgIHByZXZfZWR1X2Rpc3RyaWN0LFxuICAgICAgICBwcmV2X2VkdV9wcm92aW5jZSxcbiAgICAgICAgcHJldl9lZHVfc291cmNlLFxuICAgICAgfVxuXG4gICAgICAvLyBjb25zb2xlLmxvZyhyZWdpc3RyYW50SW5mbylcbiAgICAgIHRoaXMucmVnaXN0ZXIocmVnaXN0cmFudEluZm8pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogdHJ1ZSwgZXJyb3JNc2c6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguILguYnguK3guKHguLnguKXguYPguKvguYnguITguKPguJrguJbguYnguKfguJknIH0pXG4gICAgfVxuICB9O1xuXG4gIHJlZ2lzdGVyID0gYXN5bmMgKGJvZHlQcm9wZXJ0eSkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL3Jlc3QubmV4dHNjaG9vbC5pby92MS9leGFtL3JlZ2lzdHJhbnQnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAuLi5ib2R5UHJvcGVydHksXG4gICAgICB9KSxcbiAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDQwMCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQVBJIFNlcnZlciBFcnJvcicpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjA0KSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXR1czogJ29wdGlvbnMnXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICAgIH0pXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT09ICdvaycpIHtcbiAgICAgICAgICBzdGVwcyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiAncmVnaXN0ZXInLFxuICAgICAgICAgICAgICB0aXRsZTogJ+C4geC4o+C4reC4geC4guC5ieC4reC4oeC4ueC4pScsXG4gICAgICAgICAgICAgIGNvbXBsZXRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICfguIrguLfguYjguK0t4Liq4LiB4Li44LilLCDguKrguJbguLLguJnguKjguLbguIHguKnguLInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiAnZmluaXNoJyxcbiAgICAgICAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICAgICAgICBjb21wbGV0ZWQ6IHRydWUsXG4gICAgICAgICAgICAgIHRpdGxlOiAn4Liq4Liz4LmA4Lij4LmH4LiIJyxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICfguYTguJTguYnguKPguLHguJrguILguYnguK3guKHguLnguKXguYDguKPguLXguKLguJrguKPguYnguK3guKLguYHguKXguYnguKcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZpbmlzaDogdHJ1ZSwgc3RlcHMgfSlcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLnN0YXR1cyA9PT0gJ2ZhaWwnKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coYm9keVByb3BlcnR5KVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlcnJvcjogdHJ1ZSxcbiAgICAgICAgICAgIGVycm9yTXNnOiAn4Lic4Li04LiU4Lie4Lil4Liy4LiUIOC5hOC4oeC5iOC4quC4suC4oeC4suC4o+C4luC4muC4seC4meC4l+C4tuC4geC4guC5ieC4reC4oeC4ueC4peC4quC4oeC4seC4hOC4o+C5hOC4lOC5iScsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNpdGl6ZW4sXG4gICAgICB0aXRsZSxcbiAgICAgIGZpcnN0bmFtZSxcbiAgICAgIGxhc3RuYW1lLFxuICAgICAgcHJldl9lZHVfbmFtZSxcbiAgICAgIHByZXZfZWR1X3N1Yl9kaXN0cmljdCxcbiAgICAgIHByZXZfZWR1X2Rpc3RyaWN0LFxuICAgICAgcHJldl9lZHVfcHJvdmluY2UsXG4gICAgICBwcmV2X2VkdV9zb3VyY2UsXG4gICAgICBsb2FkaW5nLFxuICAgICAgZXJyb3IsXG4gICAgICBlcnJvck1zZyxcbiAgICAgIGZpbmlzaFxuICAgIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBjb25zdCBkZWZhdWx0QWRkcmVzcyA9IHtcbiAgICAgIHM6IHRoaXMucHJvcHMucHJldl9lZHVfbmFtZSxcbiAgICAgIGE6IHRoaXMucHJvcHMucHJldl9lZHVfc3ViX2Rpc3RyaWN0LFxuICAgICAgZDogdGhpcy5wcm9wcy5wcmV2X2VkdV9kaXN0cmljdCxcbiAgICAgIHA6IHRoaXMucHJvcHMucHJldl9lZHVfcHJvdmluY2UsXG4gICAgfVxuXG4gICAgLy8gY29uc3QgZGVmYXVsdEFkZHJlc3MgPSB7fVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBtaW5IZWlnaHQ6ICcxMDB2aCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogMSB9fT5cbiAgICAgICAgICA8U2VnbWVudD5cbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIC51aS50ZXh0LmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5iZ01haW4ge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlNDYxNiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG5cbiAgICAgICAgICAgIDxDb250YWluZXIgdGV4dD5cbiAgICAgICAgICAgICAgPFN0ZXAuR3JvdXAgb3JkZXJlZCBpdGVtcz17dGhpcy5zdGF0ZS5zdGVwc30gLz5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgIDwvU2VnbWVudD5cbiAgICAgICAgICA8U2VnbWVudD5cbiAgICAgICAgICAgIDxDb250YWluZXIgdGV4dD5cbiAgICAgICAgICAgICAgPEdyaWQgY29sdW1ucz1cImVxdWFsXCI+XG4gICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgPEhlYWRlciBhcz1cImgyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXIuU3ViaGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgIOC4q+C4oeC4suC4ouC5gOC4peC4guC4muC4seC4leC4o+C4m+C4o+C4sOC4iuC4suC4iuC4meC4l+C4teC5iOC5g+C4iuC5ieC4quC4oeC4seC4hOC4o1xuICAgICAgICAgICAgICAgICAgICA8L0hlYWRlci5TdWJoZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIHtjaXRpemVufVxuICAgICAgICAgICAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gdGV4dEFsaWduPVwicmlnaHRcIiB2ZXJ0aWNhbEFsaWduPVwibWlkZGxlXCI+XG4gICAgICAgICAgICAgICAgICA8SGVhZGVyIGFzPVwiaDJcIiBpY29uPlxuICAgICAgICAgICAgICAgICAgICBLSlNUIFByZS10ZXN0IDIwMThcbiAgICAgICAgICAgICAgICAgIDwvSGVhZGVyPlxuICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgPERpdmlkZXIgc2VjdGlvbiAvPlxuICAgICAgICAgICAgICB7ZmluaXNoID8gKFxuICAgICAgICAgICAgICAgIDxIZWFkZXIgYXM9XCJoMlwiIGljb24gdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiY2hlY2tcIiBjaXJjdWxhciBjb2xvcj1cImdyZWVuXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxIZWFkZXIgYXM9XCJoMVwiPuC5gOC4o+C4teC4ouC4muC4o+C5ieC4reC4ojwvSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgPEhlYWRlci5Db250ZW50IGNvbG9yPVwiZ3JleVwiPuC4guC4seC5ieC4meC4leC4reC4meC4leC5iOC4reC5hOC4mzwvSGVhZGVyLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8SGVhZGVyLlN1YmhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAg4Lib4Lij4Liw4LiB4Liy4Lio4Lij4Liy4Lii4LiK4Li34LmI4Lit4Lic4Li54LmJ4Lih4Li14Liq4Li04LiX4LiY4Li04LmM4Liq4Lit4LiaIOC4p+C4seC4meC4l+C4teC5iCAxOCDguKHguIHguKPguLLguITguKEgMjU2MSA8YnIgLz7guJfguLXguYjguJrguK3guKPguYzguJTguJvguKPguLDguIrguLLguKrguLHguKHguJ7guLHguJnguJjguYzguJrguKPguLTguYDguKfguJPguKHguLjguILguIHguKXguLLguIc8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAg4LmB4Lil4Liw4LiX4Liy4LiHIHd3dy5ranN0LmFjLnRoXG5cbiAgICAgICAgICAgICAgICAgIDwvSGVhZGVyLlN1YmhlYWRlcj5cbiAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaCgnLycpfT5cbiAgICAgICAgICAgICAgICAgICAg4Liq4Lih4Lix4LiE4Lij4LmA4Lie4Li04LmI4LihXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9XCJlcXVhbFwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1NlbGVjdH1cbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuC4hOC4s+C4meC4s+C4q+C4meC5ieC4suC4iuC4t+C5iOC4rVwiXG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGl0bGVzfVxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LiE4Liz4LiZ4Liz4Lir4LiZ4LmJ4Liy4LiK4Li34LmI4LitXCJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlVGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuC4iuC4t+C5iOC4rVwiXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguIrguLfguYjguK1cIlxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaXJzdG5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmaXJzdG5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLguJnguLLguKHguKrguIHguLjguKVcIlxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LiZ4Liy4Lih4Liq4LiB4Li44LilXCJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFzdG5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsYXN0bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgICAgICAgICAgIDxUeXBlYWhlYWRcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyUmVzdWx0PXtkYXRhID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAg4LmC4Lij4LiH4LmA4Lij4Li14Lii4LiZXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yj57ZGF0YS5zfTwvYj4g4LiI4Lix4LiH4Lir4Lin4Lix4LiUXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yj57ZGF0YS5wfTwvYj4g4LiV4Liz4Lia4LilXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yj57ZGF0YS5kfTwvYj4g4Lit4Liz4LmA4Lig4LitXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yj57ZGF0YS5hfTwvYj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgb25BZGRyZXNzU2VsZWN0ZWQ9e2FkZHJlc3NPYmplY3QgPT4gdGhpcy5oYW5kbGVDaGFuZ2VBZGRyZXNzKGFkZHJlc3NPYmplY3QpfVxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0QWRkcmVzcz17ZGVmYXVsdEFkZHJlc3N9XG4gICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBpbmxpbmU+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicHJldl9lZHVfcHJvdmluY2VcIj7guIHguLPguKXguLHguIfguKjguLbguIHguKnguLLguKPguLDguJTguLHguJrguIrguLHguYnguJk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1JhZGlvfVxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwicHJldl9lZHVfc291cmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuC4my40XCJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIjdcIlxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3ByZXZfZWR1X3NvdXJjZSA9PT0gJzcnfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZUxldmVsfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1JhZGlvfVxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi4LibLjVcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiOFwiXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17cHJldl9lZHVfc291cmNlID09PSAnOCd9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlTGV2ZWx9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17UmFkaW99XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLguJsuNlwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCI5XCJcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtwcmV2X2VkdV9zb3VyY2UgPT09ICc5J31cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VMZXZlbH1cbiAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGRcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbD17Q2hlY2tib3h9XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi4LiC4LmJ4Liy4Lie4LmA4LiI4LmJ4Liy4Lii4Lit4Lih4Lij4Lix4Lia4Lin4LmI4Liy4LiC4LmJ4Lit4Lih4Li54Lil4LiC4LmJ4Liy4LiH4LiV4LmJ4LiZ4LmA4Lib4LmH4LiZ4LiI4Lij4Li04LiH4LiX4Li44LiB4Lib4Lij4Liw4LiB4Liy4LijXCJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8TWVzc2FnZSBlcnJvciBjb250ZW50PXtlcnJvck1zZ30gLz5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gcG9zaXRpdmUgZmxvYXRlZD1cInJpZ2h0XCIgc2l6ZT1cImJpZ1wiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAg4Liq4Lih4Lix4LiE4LijXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxuICAgICAgICAgICAgICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XG4gICAgICAgICAgICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cbiAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Q29udGFpbmVyIHRleHQgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICBNYWRlIHdpdGggPEljb24gY29sb3I9XCJyZWRcIiBuYW1lPVwiaGVhcnRcIiAvPiBieXsnICd9XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5uZXh0c2Nob29sLmlvXCI+IE5leHRTY2hvb2w8L2E+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlckZvcm1cbiJdfQ== */\n/*@ sourceURL=components/registerForm.js */'
      }), _react2.default.createElement(_semanticUiReact.Container, { text: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        }
      }, _react2.default.createElement(_semanticUiReact.Step.Group, { ordered: true, items: this.state.steps, __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        }
      }))), _react2.default.createElement(_semanticUiReact.Segment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        }
      }, _react2.default.createElement(_semanticUiReact.Container, { text: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, { columns: 'equal', __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        }
      }, _react2.default.createElement(_semanticUiReact.Header.Subheader, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        }
      }, '\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E25\u0E02\u0E1A\u0E31\u0E15\u0E23\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E0A\u0E19\u0E17\u0E35\u0E48\u0E43\u0E0A\u0E49\u0E2A\u0E21\u0E31\u0E04\u0E23'), citizen)), _react2.default.createElement(_semanticUiReact.Grid.Column, { textAlign: 'right', verticalAlign: 'middle', __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', icon: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        }
      }, 'KJST Pre-test 2018'))), _react2.default.createElement(_semanticUiReact.Divider, { section: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        }
      }), finish ? _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', icon: true, textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'check', circular: true, color: 'green', __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        }
      }), _react2.default.createElement(_semanticUiReact.Header, { as: 'h1', __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        }
      }, '\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22'), _react2.default.createElement(_semanticUiReact.Header.Content, { color: 'grey', __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        }
      }, '\u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19\u0E15\u0E48\u0E2D\u0E44\u0E1B'), _react2.default.createElement(_semanticUiReact.Header.Subheader, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        }
      }, '\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E28\u0E23\u0E32\u0E22\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E21\u0E35\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C\u0E2A\u0E2D\u0E1A \u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 18 \u0E21\u0E01\u0E23\u0E32\u0E04\u0E21 2561 ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        }
      }), '\u0E17\u0E35\u0E48\u0E1A\u0E2D\u0E23\u0E4C\u0E14\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E2A\u0E31\u0E21\u0E1E\u0E31\u0E19\u0E18\u0E4C\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E21\u0E38\u0E02\u0E01\u0E25\u0E32\u0E07', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        }
      }), '\u0E41\u0E25\u0E30\u0E17\u0E32\u0E07 www.kjst.ac.th'), _react2.default.createElement(_semanticUiReact.Divider, { hidden: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { onClick: function onClick() {
          return _index2.default.push('/');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        }
      }, '\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E40\u0E1E\u0E34\u0E48\u0E21')) : _react2.default.createElement(_semanticUiReact.Form, {
        onSubmit: this.handleSubmit,
        loading: loading,
        error: error,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Group, { widths: 'equal', __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        control: _semanticUiReact.Select,
        label: '\u0E04\u0E33\u0E19\u0E33\u0E2B\u0E19\u0E49\u0E32\u0E0A\u0E37\u0E48\u0E2D',
        options: titles,
        placeholder: '\u0E04\u0E33\u0E19\u0E33\u0E2B\u0E19\u0E49\u0E32\u0E0A\u0E37\u0E48\u0E2D',
        value: title,
        onChange: this.handleChangeTitle,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Input, {
        label: '\u0E0A\u0E37\u0E48\u0E2D',
        placeholder: '\u0E0A\u0E37\u0E48\u0E2D',
        name: 'firstname',
        value: firstname,
        onChange: this.handleChange,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Input, {
        label: '\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25',
        placeholder: '\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25',
        name: 'lastname',
        value: lastname,
        onChange: this.handleChange,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        }
      })), _react2.default.createElement(_typeahead2.default, {
        renderResult: function renderResult(data) {
          return _react2.default.createElement('div', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 348
            }
          }, '\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19', _react2.default.createElement('b', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 350
            }
          }, data.s), ' \u0E08\u0E31\u0E07\u0E2B\u0E27\u0E31\u0E14', _react2.default.createElement('b', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 351
            }
          }, data.p), ' \u0E15\u0E33\u0E1A\u0E25', _react2.default.createElement('b', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 352
            }
          }, data.d), ' \u0E2D\u0E33\u0E40\u0E20\u0E2D', _react2.default.createElement('b', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 353
            }
          }, data.a));
        },
        onAddressSelected: function onAddressSelected(addressObject) {
          return _this4.handleChangeAddress(addressObject);
        },
        defaultAddress: defaultAddress,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Group, { inline: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        }
      }, _react2.default.createElement('label', { htmlFor: 'prev_edu_province', __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        }
      }, '\u0E01\u0E33\u0E25\u0E31\u0E07\u0E28\u0E36\u0E01\u0E29\u0E32\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19'), _react2.default.createElement(_semanticUiReact.Form.Field, {
        control: _semanticUiReact.Radio,
        id: 'prev_edu_source',
        label: '\u0E1B.4',
        value: '7',
        checked: prev_edu_source === '7',
        onChange: this.handleChangeLevel,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Field, {
        control: _semanticUiReact.Radio,
        label: '\u0E1B.5',
        value: '8',
        checked: prev_edu_source === '8',
        onChange: this.handleChangeLevel,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Field, {
        control: _semanticUiReact.Radio,
        label: '\u0E1B.6',
        value: '9',
        checked: prev_edu_source === '9',
        onChange: this.handleChangeLevel,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        control: _semanticUiReact.Checkbox,
        label: '\u0E02\u0E49\u0E32\u0E1E\u0E40\u0E08\u0E49\u0E32\u0E22\u0E2D\u0E21\u0E23\u0E31\u0E1A\u0E27\u0E48\u0E32\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E02\u0E49\u0E32\u0E07\u0E15\u0E49\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E08\u0E23\u0E34\u0E07\u0E17\u0E38\u0E01\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E23',
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        }
      }), _react2.default.createElement(_semanticUiReact.Message, { error: true, content: errorMsg, __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { positive: true, floated: 'right', size: 'big', type: 'submit', __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        }
      }, '\u0E2A\u0E21\u0E31\u0E04\u0E23'), _react2.default.createElement(_semanticUiReact.Divider, { hidden: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        }
      }), _react2.default.createElement(_semanticUiReact.Divider, { hidden: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 396
        }
      }), _react2.default.createElement(_semanticUiReact.Divider, { hidden: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 397
        }
      }))))), _react2.default.createElement(_semanticUiReact.Container, { text: true, textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 403
        }
      }, _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404
        }
      }, 'Made with ', _react2.default.createElement(_semanticUiReact.Icon, { color: 'red', name: 'heart', __source: {
          fileName: _jsxFileName,
          lineNumber: 405
        }
      }), ' by', ' ', _react2.default.createElement('a', { href: 'http://www.nextschool.io', __source: {
          fileName: _jsxFileName,
          lineNumber: 406
        }
      }, ' NextSchool'))));
    }
  }]);

  return RegisterForm;
}(_react.Component);

exports.default = RegisterForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmVnaXN0ZXJGb3JtLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIkNvbnRhaW5lciIsIlNlZ21lbnQiLCJIZWFkZXIiLCJJY29uIiwiU3RlcCIsIkJ1dHRvbiIsIkNoZWNrYm94IiwiRm9ybSIsIklucHV0IiwiUmFkaW8iLCJTZWxlY3QiLCJEaXZpZGVyIiwiR3JpZCIsIk1lc3NhZ2UiLCJSb3V0ZXIiLCJUeXBlYWhlYWQiLCJzdGVwcyIsImtleSIsImFjdGl2ZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkaXNhYmxlZCIsInRpdGxlcyIsInRleHQiLCJ2YWx1ZSIsIlNjaG9vbE5hbWVJbnB1dCIsImRlZmF1bHRBZGRyZXNzIiwiZGVmYXVsdEFkZHJlc3NPYmplY3QiLCJzIiwicHJldl9lZHVfbmFtZSIsImEiLCJwcmV2X2VkdV9zdWJfZGlzdHJpY3QiLCJkIiwicHJldl9lZHVfZGlzdHJpY3QiLCJwIiwicHJldl9lZHVfcHJvdmluY2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImhhbmRsZUNoYW5nZUFkZHJlc3MiLCJhZGRyZXNzT2JqZWN0IiwiUmVnaXN0ZXJGb3JtIiwicHJvcHMiLCJoYW5kbGVDaGFuZ2VMZXZlbCIsImUiLCJzZXRTdGF0ZSIsInByZXZfZWR1X3NvdXJjZSIsImhhbmRsZUNoYW5nZVRpdGxlIiwiaGFuZGxlQ2hhbmdlIiwibmFtZSIsImFkZHJlc3MiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RhdGUiLCJjaXRpemVuIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJyZWdpc3RyYW50SW5mbyIsImNpdGl6ZW5faWQiLCJzY2hvb2xfaWQiLCJ0YXJnZXRfaWQiLCJyZWdpc3RlciIsImVycm9yIiwiZXJyb3JNc2ciLCJib2R5UHJvcGVydHkiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJib2R5IiwiY3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJFcnJvciIsImpzb24iLCJjb21wbGV0ZWQiLCJmaW5pc2giLCJyZXMiLCJsb2FkaW5nIiwiYmluZCIsInB1c2giLCJkaXNwbGF5IiwibWluSGVpZ2h0IiwiZmxleERpcmVjdGlvbiIsImZsZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7OztBQUNULEFBQ0UsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQTs7QUFFRixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFlOzs7Ozs7Ozs7QUFFdEIsSUFBSTtPQUNGLEFBQ08sQUFDTDtVQUZGLEFBRVUsQUFDUjtTQUhGLEFBR1MsQUFDUDtlQUxRLEFBQ1YsQUFJZTtBQUpmLEFBQ0UsQ0FGUTtPQU9WLEFBQ08sQUFDTDtZQUZGLEFBRVksQUFDVjtTQVZKLEFBQVksQUFPVixBQUdTO0FBSFQsQUFDRTs7QUFNSixJQUFNLFNBQVMsQ0FDYixFQUFFLEtBQUYsQUFBTyxRQUFRLE1BQWYsQUFBcUIsV0FBVyxPQURuQixBQUNiLEFBQXVDLFVBQ3ZDLEVBQUUsS0FBRixBQUFPLFFBQVEsTUFBZixBQUFxQixZQUFZLE9BRnBCLEFBRWIsQUFBd0MsVUFDeEMsRUFBRSxLQUFGLEFBQU8sT0FBTyxNQUFkLEFBQW9CLE9BQU8sT0FIZCxBQUdiLEFBQWtDLFNBQ2xDLEVBQUUsS0FBRixBQUFPLFVBQVUsTUFBakIsQUFBdUIsVUFBVSxPQUpuQyxBQUFlLEFBSWIsQUFBd0M7O0FBRzFDLElBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLGdCQUFBLEFBQUMsZ0JBQW1CLEFBQzFDO01BQU07T0FDRCxlQUR3QixBQUNULEFBQ2xCO09BQUcsZUFGd0IsQUFFVCxBQUNsQjtPQUFHLGVBSHdCLEFBR1QsQUFDbEI7T0FBRyxlQUpMLEFBQTZCLEFBSVQsQUFHcEI7QUFQNkIsQUFDM0I7O1VBTUYsQUFBUSxJQUFSLEFBQVksQUFDWjtV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QywwQ0FBUSxPQUFULE1BQWUsU0FBZixBQUF3QjtvQkFBeEI7c0JBN0VGLEFBNkVFLEFBQ0E7QUFEQTswQkFDQSxBQUFDLHlDQUFPLFVBQVIsTUFBaUIsU0FBakIsQUFBeUIsU0FBUSxNQUFqQyxBQUFzQyxPQUFNLE1BQTVDLEFBQWlEO29CQUFqRDtzQkFBQTtBQUFBO1NBOUVGLEFBOEVFLEFBR0EsbURBQUEsQUFBQywwQ0FBUSxRQUFUO29CQUFBO3NCQWpGRixBQWlGRSxBQUNBO0FBREE7MEJBQ0EsQUFBQywwQ0FBUSxRQUFUO29CQUFBO3NCQWxGRixBQWtGRSxBQUNBO0FBREE7MEJBQ0EsQUFBQywwQ0FBUSxRQUFUO29CQUFBO3NCQXpJWixBQUdFLEFBaUJFLEFBQ0UsQUFpQ0ksQUFtRkUsQUFNVjtBQU5VOzhCQU1WLEFBQUMsNENBQVUsTUFBWCxNQUFnQixXQUFoQixBQUEwQjtvQkFBMUI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUNZLDhCQUFBLEFBQUMsdUNBQUssT0FBTixBQUFZLE9BQU0sTUFBbEIsQUFBdUI7b0JBQXZCO3NCQURaLEFBQ1k7QUFBQTtVQUFxQyxPQURqRCxBQUVFLHFCQUFBLGNBQUEsT0FBRyxNQUFILEFBQVE7b0JBQVI7c0JBQUE7QUFBQTtTQW5KUixBQUNFLEFBK0lFLEFBQ0UsQUFFRSxBQUtUOzs7OztBQXJWd0IsQSxBQXdWM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoicmVnaXN0ZXJGb3JtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wYW5ncG9uZC9TaXRlcy9OZXh0Z2Vuc29mdC9leGFtIn0=