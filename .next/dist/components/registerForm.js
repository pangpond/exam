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

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _semanticUiReact = require('semantic-ui-react');

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _reactThailandAddressTypeahead = require('react-thailand-address-typeahead');

var _reactThailandAddressTypeahead2 = _interopRequireDefault(_reactThailandAddressTypeahead);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pangpond/Sites/Nextgensoft/exam/components/registerForm.js';
// import createFilterOptions from "react-select-fast-filter-options"
// import VirtualizedSelect from "react-virtualized-select"
// import { default as schoolJson } from "../static/school.json"
// import "react-virtualized/styles.css"
// import "react-virtualized-select/styles.css"

// const lookup = schoolJson["lookup"].split("|");
// const words = schoolJson["words"].split("|");
// const schools = [];

// const t = text => {
//   if (typeof text === "number") {
//     text = lookup[text];
//   }

//   return text.replace(/[A-Z]/gi, m => {
//     var ch = m.charCodeAt(0);
//     return words[ch < 97 ? ch - 65 : 26 + ch - 97];
//   });
// };

var steps = [{
  key: 'register',
  active: true,
  title: "กรอกข้อมูล",
  description: "ชื่อ-สกุล, สถานศึกษา"
}, {
  key: "finish",
  disabled: true,
  title: "สำเร็จ"
}];

var titles = [{ key: "ด.ช.", text: "เด็กชาย", value: "ด.ช." }, { key: "ด.ญ.", text: "เด็กหญิง", value: "ด.ญ." }, { key: "นาย", text: "นาย", value: "นาย" }, { key: "นางสาว", text: "นางสาว", value: "นางสาว" }];

var SchoolList = function SchoolList() {
  // const schoolOptions = schools.filter(school => {
  //   return school.text.toLowerCase().match("กาญ");
  // });

  // console.log(schoolOptions);

  return _react2.default.createElement('datalist', { id: 'languages', __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, _react2.default.createElement('option', { value: 'English', __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }), _react2.default.createElement('option', { value: 'Chinese', __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }), _react2.default.createElement('option', { value: 'Dutch', __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }));
};

var RegisterForm = function (_Component) {
  (0, _inherits3.default)(RegisterForm, _Component);

  function RegisterForm(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, RegisterForm);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RegisterForm.__proto__ || (0, _getPrototypeOf2.default)(RegisterForm)).call(this, props));

    _this.handleChangeLevel = function (e, _ref) {
      var value = _ref.value;
      return _this.setState({ prev_edu_source: value });
    };

    _this.handleChangeTitle = function (e, _ref2) {
      var value = _ref2.value;
      return _this.setState({ title: value });
    };

    _this.handleChange = function (e, _ref3) {
      var name = _ref3.name,
          value = _ref3.value;

      _this.setState((0, _defineProperty3.default)({}, name, value));
    };

    _this.handleSubmit = function (event) {
      event.preventDefault();
      var _this$state = _this.state,
          citizen = _this$state.citizen,
          title = _this$state.title,
          firstname = _this$state.firstname,
          lastname = _this$state.lastname,
          prev_edu_name = _this$state.prev_edu_name,
          prev_edu_sub_district = _this$state.prev_edu_sub_district,
          prev_edu_district = _this$state.prev_edu_district,
          prev_edu_province = _this$state.prev_edu_province,
          prev_edu_source = _this$state.prev_edu_source;

      if (citizen !== '') {
        var registrantInfo = {
          title: title,
          firstname: firstname,
          lastname: lastname,
          citizen_id: citizen,
          school_id: "159",
          target_id: "7",
          prev_edu_name: prev_edu_name,
          prev_edu_sub_district: prev_edu_sub_district,
          prev_edu_district: prev_edu_district,
          prev_edu_province: prev_edu_province
        };

        _this.register(registrantInfo);
      } else {
        _this.setState({ error: true, errorMsg: "กรุณากรอกข้อมูลให้ครบถ้วน" });
      }
    };

    _this.register = function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(bodyProperty) {
        var res;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch('https://rest.nextschool.io/v1/exam/registrant', {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                  },
                  body: (0, _stringify2.default)((0, _extends3.default)({}, bodyProperty)),
                  credentials: "same-origin"
                }).then(function (response) {
                  if (response.status >= 400) {
                    throw new Error("API Server Error");
                  }
                  if (response.status === 204) {
                    return {
                      status: "options"
                    };
                  }
                  return response.json();
                }).then(function (data) {
                  if (data.status === "ok") {
                    var _steps = [{
                      key: "register",
                      title: "กรอกข้อมูล",
                      completed: true,
                      description: "ชื่อ-สกุล, สถานศึกษา"
                    }, {
                      key: "finish",
                      active: true,
                      completed: true,
                      title: "สำเร็จ",
                      description: "ได้รับข้อมูลเรียบร้อยแล้ว"
                    }];
                    _this.setState({ finish: true, steps: _steps });
                  } else if (data.status === "fail") {
                    // console.log(bodyProperty)
                    // console.log(data)
                    _this.setState({
                      error: true,
                      errorMsg: "ผิดพลาด ไม่สามารถบันทึกข้อมูลสมัครได้"
                    });
                  }
                });

              case 2:
                res = _context.sent;

                _this.setState({ loading: false });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref4.apply(this, arguments);
      };
    }();

    _this.SchoolNameInput = function () {

      return _react2.default.createElement(AddressForm, {
        onAddressSelected: function onAddressSelected(addressObject) {
          return console.log(addressObject);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        }
      });

      // const options = schools.map((item, index) => ({
      //   label: `${index}: ${item.text}`,
      //   value: index
      // }));

      // console.log(options);
      // const filterOptions = createFilterOptions({ options });

      // return (
      //   <VirtualizedSelect
      //     filterOptions={filterOptions}
      //     options={options}
      //     onChange={value1 => this.setState({ value1 })}
      //     value={this.state.value1}
      //   />
      // );

      // return (
      //   <Form.Group widths="equal">
      //     <Form.Field
      //       control={Input}
      //       label="โรงเรียนที่กำลังศึกษา"
      //       list="languages"
      //       placeholder="โรงเรียนที่กำลังศึกษา"
      //       value={prev_edu_name}
      //       name="prev_edu_name"
      //       onChange={this.handleChange}
      //       required
      //     />
      //     <SchoolList />
      //   </Form.Group>
      // );
    };

    _this.state = {
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

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.SchoolNameInput = _this.SchoolNameInput.bind(_this);
    return _this;
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
      if (this.state.citizen === '' || typeof this.state.citizen === "undefined") {
        _index2.default.push("/");
      }

      // let i = 1;
      // schoolJson["data"].map(provinces => {
      //   provinces[1].map(districts => {
      //     districts[1].map(subDistricts => {
      //       subDistricts[1].map(schoolName => {
      //         schools.push({
      //           id: i,
      //           text:
      //             "โรงเรียน" +
      //             t(schoolName).trim() +
      //             " >> " +
      //             t(subDistricts[0]) +
      //             " >> " +
      //             t(districts[0]) +
      //             " >> " +
      //             t(provinces[0])
      //         });
      //         i++;
      //       });
      //     });
      //   });
      // });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          steps = _state.steps,
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

      return _react2.default.createElement('div', {
        style: { display: "flex", minHeight: "100vh", flexDirection: "column" },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        }
      }, _react2.default.createElement('div', { style: { flex: 1 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: '1606080505',
        css: '.ui.text.container{max-width:fit-content !important;}.bgMain{background-color:#ee4616 !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmVnaXN0ZXJGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStUZSxBQUdvRCxBQUdHLGlDQUZ0QyxHQUdBIiwiZmlsZSI6ImNvbXBvbmVudHMvcmVnaXN0ZXJGb3JtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wYW5ncG9uZC9TaXRlcy9OZXh0Z2Vuc29mdC9leGFtIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQge1xuICBDb250YWluZXIsXG4gIFNlZ21lbnQsXG4gIEhlYWRlcixcbiAgSWNvbixcbiAgU3RlcCxcbiAgQnV0dG9uLFxuICBDaGVja2JveCxcbiAgRm9ybSxcbiAgSW5wdXQsXG4gIFJhZGlvLFxuICBTZWxlY3QsXG4gIFRleHRBcmVhLFxuICBEaXZpZGVyLFxuICBHcmlkLFxuICBNZXNzYWdlXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbi8vIGltcG9ydCBjcmVhdGVGaWx0ZXJPcHRpb25zIGZyb20gXCJyZWFjdC1zZWxlY3QtZmFzdC1maWx0ZXItb3B0aW9uc1wiXG4vLyBpbXBvcnQgVmlydHVhbGl6ZWRTZWxlY3QgZnJvbSBcInJlYWN0LXZpcnR1YWxpemVkLXNlbGVjdFwiXG4vLyBpbXBvcnQgeyBkZWZhdWx0IGFzIHNjaG9vbEpzb24gfSBmcm9tIFwiLi4vc3RhdGljL3NjaG9vbC5qc29uXCJcbi8vIGltcG9ydCBcInJlYWN0LXZpcnR1YWxpemVkL3N0eWxlcy5jc3NcIlxuLy8gaW1wb3J0IFwicmVhY3QtdmlydHVhbGl6ZWQtc2VsZWN0L3N0eWxlcy5jc3NcIlxuXG5pbXBvcnQgQWRkcmVzc0Zvcm1UeXBlYWhlYWQgZnJvbSAncmVhY3QtdGhhaWxhbmQtYWRkcmVzcy10eXBlYWhlYWQnXG5cbi8vIGNvbnN0IGxvb2t1cCA9IHNjaG9vbEpzb25bXCJsb29rdXBcIl0uc3BsaXQoXCJ8XCIpO1xuLy8gY29uc3Qgd29yZHMgPSBzY2hvb2xKc29uW1wid29yZHNcIl0uc3BsaXQoXCJ8XCIpO1xuLy8gY29uc3Qgc2Nob29scyA9IFtdO1xuXG4vLyBjb25zdCB0ID0gdGV4dCA9PiB7XG4vLyAgIGlmICh0eXBlb2YgdGV4dCA9PT0gXCJudW1iZXJcIikge1xuLy8gICAgIHRleHQgPSBsb29rdXBbdGV4dF07XG4vLyAgIH1cblxuLy8gICByZXR1cm4gdGV4dC5yZXBsYWNlKC9bQS1aXS9naSwgbSA9PiB7XG4vLyAgICAgdmFyIGNoID0gbS5jaGFyQ29kZUF0KDApO1xuLy8gICAgIHJldHVybiB3b3Jkc1tjaCA8IDk3ID8gY2ggLSA2NSA6IDI2ICsgY2ggLSA5N107XG4vLyAgIH0pO1xuLy8gfTtcblxuY29uc3Qgc3RlcHMgPSBbXG4gIHtcbiAgICBrZXk6ICdyZWdpc3RlcicsXG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIHRpdGxlOiBcIuC4geC4o+C4reC4geC4guC5ieC4reC4oeC4ueC4pVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIuC4iuC4t+C5iOC4rS3guKrguIHguLjguKUsIOC4quC4luC4suC4meC4qOC4tuC4geC4qeC4slwiXG4gIH0sXG4gIHtcbiAgICBrZXk6IFwiZmluaXNoXCIsXG4gICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgdGl0bGU6IFwi4Liq4Liz4LmA4Lij4LmH4LiIXCIsXG4gIH1cbl1cblxuY29uc3QgdGl0bGVzID0gW1xuICB7IGtleTogXCLguJQu4LiKLlwiLCB0ZXh0OiBcIuC5gOC4lOC5h+C4geC4iuC4suC4olwiLCB2YWx1ZTogXCLguJQu4LiKLlwiIH0sXG4gIHsga2V5OiBcIuC4lC7guI0uXCIsIHRleHQ6IFwi4LmA4LiU4LmH4LiB4Lir4LiN4Li04LiHXCIsIHZhbHVlOiBcIuC4lC7guI0uXCIgfSxcbiAgeyBrZXk6IFwi4LiZ4Liy4LiiXCIsIHRleHQ6IFwi4LiZ4Liy4LiiXCIsIHZhbHVlOiBcIuC4meC4suC4olwiIH0sXG4gIHsga2V5OiBcIuC4meC4suC4h+C4quC4suC4p1wiLCB0ZXh0OiBcIuC4meC4suC4h+C4quC4suC4p1wiLCB2YWx1ZTogXCLguJnguLLguIfguKrguLLguKdcIiB9XG5dXG5cbmNvbnN0IFNjaG9vbExpc3QgPSAoKSA9PiB7XG4gIC8vIGNvbnN0IHNjaG9vbE9wdGlvbnMgPSBzY2hvb2xzLmZpbHRlcihzY2hvb2wgPT4ge1xuICAvLyAgIHJldHVybiBzY2hvb2wudGV4dC50b0xvd2VyQ2FzZSgpLm1hdGNoKFwi4LiB4Liy4LiNXCIpO1xuICAvLyB9KTtcblxuICAvLyBjb25zb2xlLmxvZyhzY2hvb2xPcHRpb25zKTtcblxuICByZXR1cm4gKFxuICAgIDxkYXRhbGlzdCBpZD1cImxhbmd1YWdlc1wiPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIkVuZ2xpc2hcIiAvPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNoaW5lc2VcIiAvPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIkR1dGNoXCIgLz5cbiAgICA8L2RhdGFsaXN0PlxuICApXG59XG5cbmNsYXNzIFJlZ2lzdGVyRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzdGVwcyxcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIGZpcnN0bmFtZTogJycsXG4gICAgICBsYXN0bmFtZTogJycsXG4gICAgICBwcmV2X2VkdV9uYW1lOiAnJyxcbiAgICAgIHByZXZfZWR1X3N1Yl9kaXN0cmljdDogJycsXG4gICAgICBwcmV2X2VkdV9kaXN0cmljdDogJycsXG4gICAgICBwcmV2X2VkdV9wcm92aW5jZTogJycsXG4gICAgICBwcmV2X2VkdV9zb3VyY2U6ICcnLFxuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBlcnJvcjogZmFsc2UsXG4gICAgICBlcnJvck1zZzogJycsXG4gICAgICBmaW5pc2g6IGZhbHNlLFxuICAgIH1cblxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5TY2hvb2xOYW1lSW5wdXQgPSB0aGlzLlNjaG9vbE5hbWVJbnB1dC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY2l0aXplbjogdGhpcy5wcm9wcy5jaXRpemVuLFxuICAgICAgdGl0bGU6IHRoaXMucHJvcHMudGl0bGUsXG4gICAgICBmaXJzdG5hbWU6IHRoaXMucHJvcHMuZmlyc3RuYW1lLFxuICAgICAgbGFzdG5hbWU6IHRoaXMucHJvcHMubGFzdG5hbWUsXG4gICAgICBwcmV2X2VkdV9uYW1lOiB0aGlzLnByb3BzLnByZXZfZWR1X25hbWUsXG4gICAgICBwcmV2X2VkdV9zdWJfZGlzdHJpY3Q6IHRoaXMucHJvcHMucHJldl9lZHVfc3ViX2Rpc3RyaWN0LFxuICAgICAgcHJldl9lZHVfZGlzdHJpY3Q6IHRoaXMucHJvcHMucHJldl9lZHVfZGlzdHJpY3QsXG4gICAgICBwcmV2X2VkdV9wcm92aW5jZTogdGhpcy5wcm9wcy5wcmV2X2VkdV9wcm92aW5jZSxcbiAgICAgIHByZXZfZWR1X3NvdXJjZTogdGhpcy5wcm9wcy5wcmV2X2VkdV9zb3VyY2VcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmIChcbiAgICAgIHRoaXMuc3RhdGUuY2l0aXplbiA9PT0gJycgfHxcbiAgICAgIHR5cGVvZiB0aGlzLnN0YXRlLmNpdGl6ZW4gPT09IFwidW5kZWZpbmVkXCJcbiAgICApIHtcbiAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICB9XG5cbiAgICAvLyBsZXQgaSA9IDE7XG4gICAgLy8gc2Nob29sSnNvbltcImRhdGFcIl0ubWFwKHByb3ZpbmNlcyA9PiB7XG4gICAgLy8gICBwcm92aW5jZXNbMV0ubWFwKGRpc3RyaWN0cyA9PiB7XG4gICAgLy8gICAgIGRpc3RyaWN0c1sxXS5tYXAoc3ViRGlzdHJpY3RzID0+IHtcbiAgICAvLyAgICAgICBzdWJEaXN0cmljdHNbMV0ubWFwKHNjaG9vbE5hbWUgPT4ge1xuICAgIC8vICAgICAgICAgc2Nob29scy5wdXNoKHtcbiAgICAvLyAgICAgICAgICAgaWQ6IGksXG4gICAgLy8gICAgICAgICAgIHRleHQ6XG4gICAgLy8gICAgICAgICAgICAgXCLguYLguKPguIfguYDguKPguLXguKLguJlcIiArXG4gICAgLy8gICAgICAgICAgICAgdChzY2hvb2xOYW1lKS50cmltKCkgK1xuICAgIC8vICAgICAgICAgICAgIFwiID4+IFwiICtcbiAgICAvLyAgICAgICAgICAgICB0KHN1YkRpc3RyaWN0c1swXSkgK1xuICAgIC8vICAgICAgICAgICAgIFwiID4+IFwiICtcbiAgICAvLyAgICAgICAgICAgICB0KGRpc3RyaWN0c1swXSkgK1xuICAgIC8vICAgICAgICAgICAgIFwiID4+IFwiICtcbiAgICAvLyAgICAgICAgICAgICB0KHByb3ZpbmNlc1swXSlcbiAgICAvLyAgICAgICAgIH0pO1xuICAgIC8vICAgICAgICAgaSsrO1xuICAgIC8vICAgICAgIH0pO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyAgIH0pO1xuICAgIC8vIH0pO1xuICB9XG5cblxuXG4gIGhhbmRsZUNoYW5nZUxldmVsID0gKGUsIHsgdmFsdWUgfSkgPT5cbiAgICB0aGlzLnNldFN0YXRlKHsgcHJldl9lZHVfc291cmNlOiB2YWx1ZSB9KTtcbiAgaGFuZGxlQ2hhbmdlVGl0bGUgPSAoZSwgeyB2YWx1ZSB9KSA9PiB0aGlzLnNldFN0YXRlKHsgdGl0bGU6IHZhbHVlIH0pO1xuXG4gIGhhbmRsZUNoYW5nZSA9IChlLCB7IG5hbWUsIHZhbHVlIH0pID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgW25hbWVdOiB2YWx1ZSB9KTtcbiAgfTtcblxuICBoYW5kbGVTdWJtaXQgPSBldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB7XG4gICAgICBjaXRpemVuLFxuICAgICAgdGl0bGUsXG4gICAgICBmaXJzdG5hbWUsXG4gICAgICBsYXN0bmFtZSxcbiAgICAgIHByZXZfZWR1X25hbWUsXG4gICAgICBwcmV2X2VkdV9zdWJfZGlzdHJpY3QsXG4gICAgICBwcmV2X2VkdV9kaXN0cmljdCxcbiAgICAgIHByZXZfZWR1X3Byb3ZpbmNlLFxuICAgICAgcHJldl9lZHVfc291cmNlXG4gICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAoXG4gICAgICBjaXRpemVuICE9PSAnJ1xuICAgICkge1xuICAgICAgY29uc3QgcmVnaXN0cmFudEluZm8gPSB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBmaXJzdG5hbWUsXG4gICAgICAgIGxhc3RuYW1lLFxuICAgICAgICBjaXRpemVuX2lkOiBjaXRpemVuLFxuICAgICAgICBzY2hvb2xfaWQ6IFwiMTU5XCIsXG4gICAgICAgIHRhcmdldF9pZDogXCI3XCIsXG4gICAgICAgIHByZXZfZWR1X25hbWUsXG4gICAgICAgIHByZXZfZWR1X3N1Yl9kaXN0cmljdCxcbiAgICAgICAgcHJldl9lZHVfZGlzdHJpY3QsXG4gICAgICAgIHByZXZfZWR1X3Byb3ZpbmNlXG4gICAgICB9O1xuXG4gICAgICB0aGlzLnJlZ2lzdGVyKHJlZ2lzdHJhbnRJbmZvKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiB0cnVlLCBlcnJvck1zZzogXCLguIHguKPguLjguJPguLLguIHguKPguK3guIHguILguYnguK3guKHguLnguKXguYPguKvguYnguITguKPguJrguJbguYnguKfguJlcIiB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmVnaXN0ZXIgPSBhc3luYyBib2R5UHJvcGVydHkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL3Jlc3QubmV4dHNjaG9vbC5pby92MS9leGFtL3JlZ2lzdHJhbnRgLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgLi4uYm9keVByb3BlcnR5XG4gICAgICB9KSxcbiAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCJcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDQwMCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFQSSBTZXJ2ZXIgRXJyb3JcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjA0KSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXR1czogXCJvcHRpb25zXCJcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGlmIChkYXRhLnN0YXR1cyA9PT0gXCJva1wiKSB7XG4gICAgICAgICAgY29uc3Qgc3RlcHMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJyZWdpc3RlclwiLFxuICAgICAgICAgICAgICB0aXRsZTogXCLguIHguKPguK3guIHguILguYnguK3guKHguLnguKVcIixcbiAgICAgICAgICAgICAgY29tcGxldGVkOiB0cnVlLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCLguIrguLfguYjguK0t4Liq4LiB4Li44LilLCDguKrguJbguLLguJnguKjguLbguIHguKnguLJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcImZpbmlzaFwiLFxuICAgICAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgICAgICAgIGNvbXBsZXRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgdGl0bGU6IFwi4Liq4Liz4LmA4Lij4LmH4LiIXCIsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIuC5hOC4lOC5ieC4o+C4seC4muC4guC5ieC4reC4oeC4ueC4peC5gOC4o+C4teC4ouC4muC4o+C5ieC4reC4ouC5geC4peC5ieC4p1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZmluaXNoOiB0cnVlLCBzdGVwcyB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLnN0YXR1cyA9PT0gXCJmYWlsXCIpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhib2R5UHJvcGVydHkpXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGVycm9yOiB0cnVlLFxuICAgICAgICAgICAgZXJyb3JNc2c6IFwi4Lic4Li04LiU4Lie4Lil4Liy4LiUIOC5hOC4oeC5iOC4quC4suC4oeC4suC4o+C4luC4muC4seC4meC4l+C4tuC4geC4guC5ieC4reC4oeC4ueC4peC4quC4oeC4seC4hOC4o+C5hOC4lOC5iVwiXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xuICB9O1xuXG5cblxuICBTY2hvb2xOYW1lSW5wdXQgPSAoKSA9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEFkZHJlc3NGb3JtXG4gICAgICAgICBvbkFkZHJlc3NTZWxlY3RlZD17KGFkZHJlc3NPYmplY3QpID0+IGNvbnNvbGUubG9nKGFkZHJlc3NPYmplY3QpfVxuICAgICAgICAvPlxuICAgIClcblxuICAgIC8vIGNvbnN0IG9wdGlvbnMgPSBzY2hvb2xzLm1hcCgoaXRlbSwgaW5kZXgpID0+ICh7XG4gICAgLy8gICBsYWJlbDogYCR7aW5kZXh9OiAke2l0ZW0udGV4dH1gLFxuICAgIC8vICAgdmFsdWU6IGluZGV4XG4gICAgLy8gfSkpO1xuXG4gICAgLy8gY29uc29sZS5sb2cob3B0aW9ucyk7XG4gICAgLy8gY29uc3QgZmlsdGVyT3B0aW9ucyA9IGNyZWF0ZUZpbHRlck9wdGlvbnMoeyBvcHRpb25zIH0pO1xuXG4gICAgLy8gcmV0dXJuIChcbiAgICAvLyAgIDxWaXJ0dWFsaXplZFNlbGVjdFxuICAgIC8vICAgICBmaWx0ZXJPcHRpb25zPXtmaWx0ZXJPcHRpb25zfVxuICAgIC8vICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgIC8vICAgICBvbkNoYW5nZT17dmFsdWUxID0+IHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTEgfSl9XG4gICAgLy8gICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlMX1cbiAgICAvLyAgIC8+XG4gICAgLy8gKTtcblxuICAgIC8vIHJldHVybiAoXG4gICAgLy8gICA8Rm9ybS5Hcm91cCB3aWR0aHM9XCJlcXVhbFwiPlxuICAgIC8vICAgICA8Rm9ybS5GaWVsZFxuICAgIC8vICAgICAgIGNvbnRyb2w9e0lucHV0fVxuICAgIC8vICAgICAgIGxhYmVsPVwi4LmC4Lij4LiH4LmA4Lij4Li14Lii4LiZ4LiX4Li14LmI4LiB4Liz4Lil4Lix4LiH4Lio4Li24LiB4Lip4LiyXCJcbiAgICAvLyAgICAgICBsaXN0PVwibGFuZ3VhZ2VzXCJcbiAgICAvLyAgICAgICBwbGFjZWhvbGRlcj1cIuC5guC4o+C4h+C5gOC4o+C4teC4ouC4meC4l+C4teC5iOC4geC4s+C4peC4seC4h+C4qOC4tuC4geC4qeC4slwiXG4gICAgLy8gICAgICAgdmFsdWU9e3ByZXZfZWR1X25hbWV9XG4gICAgLy8gICAgICAgbmFtZT1cInByZXZfZWR1X25hbWVcIlxuICAgIC8vICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAvLyAgICAgICByZXF1aXJlZFxuICAgIC8vICAgICAvPlxuICAgIC8vICAgICA8U2Nob29sTGlzdCAvPlxuICAgIC8vICAgPC9Gb3JtLkdyb3VwPlxuICAgIC8vICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgc3RlcHMsXG4gICAgICBjaXRpemVuLFxuICAgICAgdGl0bGUsXG4gICAgICBmaXJzdG5hbWUsXG4gICAgICBsYXN0bmFtZSxcbiAgICAgIHByZXZfZWR1X25hbWUsXG4gICAgICBwcmV2X2VkdV9zdWJfZGlzdHJpY3QsXG4gICAgICBwcmV2X2VkdV9kaXN0cmljdCxcbiAgICAgIHByZXZfZWR1X3Byb3ZpbmNlLFxuICAgICAgcHJldl9lZHVfc291cmNlLFxuICAgICAgbG9hZGluZyxcbiAgICAgIGVycm9yLFxuICAgICAgZXJyb3JNc2csXG4gICAgICBmaW5pc2hcbiAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBtaW5IZWlnaHQ6IFwiMTAwdmhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IDEgfX0+XG4gICAgICAgICAgPFNlZ21lbnQ+XG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAudWkudGV4dC5jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYmdNYWluIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZTQ2MTYgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuXG4gICAgICAgICAgICA8Q29udGFpbmVyIHRleHQ+XG4gICAgICAgICAgICAgIDxTdGVwLkdyb3VwIG9yZGVyZWQgaXRlbXM9e3N0ZXBzfSAvPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgPC9TZWdtZW50PlxuICAgICAgICAgIDxTZWdtZW50PlxuICAgICAgICAgICAgPENvbnRhaW5lciB0ZXh0PlxuICAgICAgICAgICAgICA8R3JpZCBjb2x1bW5zPVwiZXF1YWxcIj5cbiAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICA8SGVhZGVyIGFzPVwiaDJcIj5cbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlci5TdWJoZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAg4Lir4Lih4Liy4Lii4LmA4Lil4LiC4Lia4Lix4LiV4Lij4Lib4Lij4Liw4LiK4Liy4LiK4LiZ4LiX4Li14LmI4LmD4LiK4LmJ4Liq4Lih4Lix4LiE4LijXG4gICAgICAgICAgICAgICAgICAgIDwvSGVhZGVyLlN1YmhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAge2NpdGl6ZW59XG4gICAgICAgICAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB0ZXh0QWxpZ249XCJyaWdodFwiIHZlcnRpY2FsQWxpZ249XCJtaWRkbGVcIj5cbiAgICAgICAgICAgICAgICAgIDxIZWFkZXIgYXM9XCJoMlwiIGljb24+XG4gICAgICAgICAgICAgICAgICAgIEtKU1QgUHJlLXRlc3QgMjAxOFxuICAgICAgICAgICAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8RGl2aWRlciBzZWN0aW9uIC8+XG4gICAgICAgICAgICAgIHtmaW5pc2ggPyAoXG4gICAgICAgICAgICAgICAgPEhlYWRlciBhcz1cImgyXCIgaWNvbiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJjaGVja1wiIGNpcmN1bGFyIGNvbG9yPVwiZ3JlZW5cIiAvPlxuICAgICAgICAgICAgICAgICAgPEhlYWRlciBhcz1cImgxXCI+4LmA4Lij4Li14Lii4Lia4Lij4LmJ4Lit4LiiPC9IZWFkZXI+XG4gICAgICAgICAgICAgICAgICA8SGVhZGVyLkNvbnRlbnQgY29sb3I9XCJncmV5XCI+4LiC4Lix4LmJ4LiZ4LiV4Lit4LiZ4LiV4LmI4Lit4LmE4LibPC9IZWFkZXIuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgIDxIZWFkZXIuU3ViaGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICDguJvguKPguLDguIHguLLguKjguKPguLLguKLguIrguLfguYjguK3guJzguLnguYnguKHguLXguKrguLTguJfguJjguLTguYzguKrguK3guJog4Lin4Lix4LiZ4LiX4Li14LmIIDE4IOC4oeC4geC4o+C4suC4hOC4oSAyNTYxIDxiciAvPuC4l+C4teC5iOC4muC4reC4o+C5jOC4lOC4m+C4o+C4sOC4iuC4suC4quC4seC4oeC4nuC4seC4meC4mOC5jOC4muC4o+C4tOC5gOC4p+C4k+C4oeC4uOC4guC4geC4peC4suC4hzxiciAvPlxuICAgICAgICAgICAgICAgICAgICDguYHguKXguLDguJfguLLguIcgd3d3Lmtqc3QuYWMudGhcbiAgICAgICAgICAgICAgICAgIDwvSGVhZGVyLlN1YmhlYWRlcj5cbiAgICAgICAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9XCJlcXVhbFwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1NlbGVjdH1cbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuC4hOC4s+C4meC4s+C4q+C4meC5ieC4suC4iuC4t+C5iOC4rVwiXG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGl0bGVzfVxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LiE4Liz4LiZ4Liz4Lir4LiZ4LmJ4Liy4LiK4Li34LmI4LitXCJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlVGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuC4iuC4t+C5iOC4rVwiXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguIrguLfguYjguK1cIlxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaXJzdG5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmaXJzdG5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLguJnguLLguKHguKrguIHguLjguKVcIlxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LiZ4Liy4Lih4Liq4LiB4Li44LilXCJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFzdG5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsYXN0bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cblxuICAgICAgICAgICAgICAgICAge3RoaXMuU2Nob29sTmFtZUlucHV0KCl9XG5cbiAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz1cImVxdWFsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLguJXguLPguJrguKUv4LmB4LiC4Lin4LiHXCJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJldl9lZHVfc3ViX2Rpc3RyaWN0fVxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcmV2X2VkdV9zdWJfZGlzdHJpY3RcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi4Lit4Liz4LmA4Lig4LitL+C5gOC4guC4lVwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ByZXZfZWR1X2Rpc3RyaWN0fVxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcmV2X2VkdV9kaXN0cmljdFwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLguIjguLHguIfguKvguKfguLHguJRcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcmV2X2VkdV9wcm92aW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJldl9lZHVfcHJvdmluY2VcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgaW5saW5lPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+4LiB4Liz4Lil4Lix4LiH4Lio4Li24LiB4Lip4Liy4Lij4Liw4LiU4Lix4Lia4LiK4Lix4LmJ4LiZPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGRcbiAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtSYWRpb31cbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuC4my40XCJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3ByZXZfZWR1X3NvdXJjZSA9PT0gXCIxXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlTGV2ZWx9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17UmFkaW99XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLguJsuNVwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtwcmV2X2VkdV9zb3VyY2UgPT09IFwiMlwifVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZUxldmVsfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1JhZGlvfVxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi4LibLjZcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiM1wiXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17cHJldl9lZHVfc291cmNlID09PSBcIjNcIn1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VMZXZlbH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e0NoZWNrYm94fVxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuC4guC5ieC4suC4nuC5gOC4iOC5ieC4suC4ouC4reC4oeC4o+C4seC4muC4p+C5iOC4suC4guC5ieC4reC4oeC4ueC4peC4guC5ieC4suC4h+C4leC5ieC4meC5gOC4m+C5h+C4meC4iOC4o+C4tOC4h+C4l+C4uOC4geC4m+C4o+C4sOC4geC4suC4o1wiXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICA8TWVzc2FnZSBlcnJvciBjb250ZW50PXtlcnJvck1zZ30gLz5cblxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwb3NpdGl2ZSBmbG9hdGVkPVwicmlnaHRcIiBzaXplPVwiYmlnXCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICDguKrguKHguLHguITguKNcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XG4gICAgICAgICAgICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cbiAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxuICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgIDwvU2VnbWVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxDb250YWluZXIgdGV4dCB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIE1hZGUgd2l0aCA8SWNvbiBjb2xvcj1cInJlZFwiIG5hbWU9XCJoZWFydFwiIC8+IGJ5e1wiIFwifVxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly93d3cubmV4dHNjaG9vbC5pb1wiPiBOZXh0U2Nob29sPC9hPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyRm9ybTtcbiJdfQ== */\n/*@ sourceURL=components/registerForm.js */'
      }), _react2.default.createElement(_semanticUiReact.Container, { text: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        }
      }, _react2.default.createElement(_semanticUiReact.Step.Group, { ordered: true, items: steps, __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        }
      }))), _react2.default.createElement(_semanticUiReact.Segment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        }
      }, _react2.default.createElement(_semanticUiReact.Container, { text: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, { columns: 'equal', __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        }
      }, _react2.default.createElement(_semanticUiReact.Header.Subheader, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        }
      }, '\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E25\u0E02\u0E1A\u0E31\u0E15\u0E23\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E0A\u0E19\u0E17\u0E35\u0E48\u0E43\u0E0A\u0E49\u0E2A\u0E21\u0E31\u0E04\u0E23'), citizen)), _react2.default.createElement(_semanticUiReact.Grid.Column, { textAlign: 'right', verticalAlign: 'middle', __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', icon: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        }
      }, 'KJST Pre-test 2018'))), _react2.default.createElement(_semanticUiReact.Divider, { section: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        }
      }), finish ? _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', icon: true, textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'check', circular: true, color: 'green', __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        }
      }), _react2.default.createElement(_semanticUiReact.Header, { as: 'h1', __source: {
          fileName: _jsxFileName,
          lineNumber: 355
        }
      }, '\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22'), _react2.default.createElement(_semanticUiReact.Header.Content, { color: 'grey', __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        }
      }, '\u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19\u0E15\u0E48\u0E2D\u0E44\u0E1B'), _react2.default.createElement(_semanticUiReact.Header.Subheader, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        }
      }, '\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E28\u0E23\u0E32\u0E22\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E21\u0E35\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C\u0E2A\u0E2D\u0E1A \u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 18 \u0E21\u0E01\u0E23\u0E32\u0E04\u0E21 2561 ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        }
      }), '\u0E17\u0E35\u0E48\u0E1A\u0E2D\u0E23\u0E4C\u0E14\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E2A\u0E31\u0E21\u0E1E\u0E31\u0E19\u0E18\u0E4C\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E21\u0E38\u0E02\u0E01\u0E25\u0E32\u0E07', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        }
      }), '\u0E41\u0E25\u0E30\u0E17\u0E32\u0E07 www.kjst.ac.th')) : _react2.default.createElement(_semanticUiReact.Form, {
        onSubmit: this.handleSubmit,
        loading: loading,
        error: error,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Group, { widths: 'equal', __source: {
          fileName: _jsxFileName,
          lineNumber: 368
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
          lineNumber: 369
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
          lineNumber: 378
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
          lineNumber: 386
        }
      })), this.SchoolNameInput(), _react2.default.createElement(_semanticUiReact.Form.Group, { widths: 'equal', __source: {
          fileName: _jsxFileName,
          lineNumber: 398
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Input, {
        label: '\u0E15\u0E33\u0E1A\u0E25/\u0E41\u0E02\u0E27\u0E07',
        value: prev_edu_sub_district,
        name: 'prev_edu_sub_district',
        onChange: this.handleChange,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Input, {
        label: '\u0E2D\u0E33\u0E40\u0E20\u0E2D/\u0E40\u0E02\u0E15',
        value: prev_edu_district,
        name: 'prev_edu_district',
        onChange: this.handleChange,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Input, {
        label: '\u0E08\u0E31\u0E07\u0E2B\u0E27\u0E31\u0E14',
        value: prev_edu_province,
        name: 'prev_edu_province',
        onChange: this.handleChange,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Group, { inline: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 421
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 422
        }
      }, '\u0E01\u0E33\u0E25\u0E31\u0E07\u0E28\u0E36\u0E01\u0E29\u0E32\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19'), _react2.default.createElement(_semanticUiReact.Form.Field, {
        control: _semanticUiReact.Radio,
        label: '\u0E1B.4',
        value: '1',
        checked: prev_edu_source === "1",
        onChange: this.handleChangeLevel,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Field, {
        control: _semanticUiReact.Radio,
        label: '\u0E1B.5',
        value: '2',
        checked: prev_edu_source === "2",
        onChange: this.handleChangeLevel,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Field, {
        control: _semanticUiReact.Radio,
        label: '\u0E1B.6',
        value: '3',
        checked: prev_edu_source === "3",
        onChange: this.handleChangeLevel,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 437
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        control: _semanticUiReact.Checkbox,
        label: '\u0E02\u0E49\u0E32\u0E1E\u0E40\u0E08\u0E49\u0E32\u0E22\u0E2D\u0E21\u0E23\u0E31\u0E1A\u0E27\u0E48\u0E32\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E02\u0E49\u0E32\u0E07\u0E15\u0E49\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E08\u0E23\u0E34\u0E07\u0E17\u0E38\u0E01\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E23',
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 445
        }
      }), _react2.default.createElement(_semanticUiReact.Message, { error: true, content: errorMsg, __source: {
          fileName: _jsxFileName,
          lineNumber: 451
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { positive: true, floated: 'right', size: 'big', type: 'submit', __source: {
          fileName: _jsxFileName,
          lineNumber: 453
        }
      }, '\u0E2A\u0E21\u0E31\u0E04\u0E23'), _react2.default.createElement(_semanticUiReact.Divider, { hidden: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 456
        }
      }), _react2.default.createElement(_semanticUiReact.Divider, { hidden: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 457
        }
      }), _react2.default.createElement(_semanticUiReact.Divider, { hidden: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 458
        }
      }))))), _react2.default.createElement(_semanticUiReact.Container, { text: true, textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 464
        }
      }, _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465
        }
      }, 'Made with ', _react2.default.createElement(_semanticUiReact.Icon, { color: 'red', name: 'heart', __source: {
          fileName: _jsxFileName,
          lineNumber: 466
        }
      }), ' by', " ", _react2.default.createElement('a', { href: 'http://www.nextschool.io', __source: {
          fileName: _jsxFileName,
          lineNumber: 467
        }
      }, ' NextSchool'))));
    }
  }]);

  return RegisterForm;
}(_react.Component);

exports.default = RegisterForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmVnaXN0ZXJGb3JtLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIkxpbmsiLCJDb250YWluZXIiLCJTZWdtZW50IiwiSGVhZGVyIiwiSWNvbiIsIlN0ZXAiLCJCdXR0b24iLCJDaGVja2JveCIsIkZvcm0iLCJJbnB1dCIsIlJhZGlvIiwiU2VsZWN0IiwiVGV4dEFyZWEiLCJEaXZpZGVyIiwiR3JpZCIsIk1lc3NhZ2UiLCJSb3V0ZXIiLCJBZGRyZXNzRm9ybVR5cGVhaGVhZCIsInN0ZXBzIiwia2V5IiwiYWN0aXZlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImRpc2FibGVkIiwidGl0bGVzIiwidGV4dCIsInZhbHVlIiwiU2Nob29sTGlzdCIsIlJlZ2lzdGVyRm9ybSIsInByb3BzIiwiaGFuZGxlQ2hhbmdlTGV2ZWwiLCJlIiwic2V0U3RhdGUiLCJwcmV2X2VkdV9zb3VyY2UiLCJoYW5kbGVDaGFuZ2VUaXRsZSIsImhhbmRsZUNoYW5nZSIsIm5hbWUiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RhdGUiLCJjaXRpemVuIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJwcmV2X2VkdV9uYW1lIiwicHJldl9lZHVfc3ViX2Rpc3RyaWN0IiwicHJldl9lZHVfZGlzdHJpY3QiLCJwcmV2X2VkdV9wcm92aW5jZSIsInJlZ2lzdHJhbnRJbmZvIiwiY2l0aXplbl9pZCIsInNjaG9vbF9pZCIsInRhcmdldF9pZCIsInJlZ2lzdGVyIiwiZXJyb3IiLCJlcnJvck1zZyIsImJvZHlQcm9wZXJ0eSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsImJvZHkiLCJjcmVkZW50aWFscyIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsIkVycm9yIiwianNvbiIsImRhdGEiLCJjb21wbGV0ZWQiLCJmaW5pc2giLCJyZXMiLCJsb2FkaW5nIiwiU2Nob29sTmFtZUlucHV0IiwiYWRkcmVzc09iamVjdCIsImNvbnNvbGUiLCJsb2ciLCJiaW5kIiwicHVzaCIsImRpc3BsYXkiLCJtaW5IZWlnaHQiLCJmbGV4RGlyZWN0aW9uIiwiZmxleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTOzs7O0FBQ1QsQUFBTzs7OztBQUNQLEFBQ0UsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBOztBQUVGLEFBQU87Ozs7QUFPUCxBQUFPOzs7Ozs7O0FBTlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNO09BQ0osQUFDTyxBQUNMO1VBRkYsQUFFVSxBQUNSO1NBSEYsQUFHUyxBQUNQO2VBTFUsQUFDWixBQUllO0FBSmYsQUFDRSxDQUZVO09BT1osQUFDTyxBQUNMO1lBRkYsQUFFWSxBQUNWO1NBVkosQUFBYyxBQU9aLEFBR1M7QUFIVCxBQUNFOztBQU1KLElBQU0sU0FBUyxDQUNiLEVBQUUsS0FBRixBQUFPLFFBQVEsTUFBZixBQUFxQixXQUFXLE9BRG5CLEFBQ2IsQUFBdUMsVUFDdkMsRUFBRSxLQUFGLEFBQU8sUUFBUSxNQUFmLEFBQXFCLFlBQVksT0FGcEIsQUFFYixBQUF3QyxVQUN4QyxFQUFFLEtBQUYsQUFBTyxPQUFPLE1BQWQsQUFBb0IsT0FBTyxPQUhkLEFBR2IsQUFBa0MsU0FDbEMsRUFBRSxLQUFGLEFBQU8sVUFBVSxNQUFqQixBQUF1QixVQUFVLE9BSm5DLEFBQWUsQUFJYixBQUF3Qzs7QUFHMUMsSUFBTSxhQUFhLFNBQWIsQUFBYSxhQUFNLEFBQ3ZCO0FBQ0E7QUFDQTtBQUVBOztBQUVBOzt5QkFDRSxjQUFBLGNBQVUsSUFBVixBQUFhO2dCQUFiO2tCQUFBLEFBQ0U7QUFERjtHQUFBLDRDQUNVLE9BQVIsQUFBYztnQkFBZDtrQkFE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QjtrQkFBVSxLQUxaLEFBS2lCOztvQkFMakI7c0JBRkYsQUFFRSxBQU9BO0FBUEE7QUFDRSx3Q0FNRixBQUFDLHNCQUFELEFBQU07QUFBTixBQUNXLEFBQ1Q7ZUFGRixBQUVRLEFBQ047ZUFIRixBQUdRLEFBQ047aUJBQVMsb0JBSlgsQUFJK0IsQUFDN0I7a0JBQVUsS0FMWixBQUtpQjs7b0JBTGpCO3NCQVRGLEFBU0UsQUFPQTtBQVBBO0FBQ0Usd0NBTUYsQUFBQyxzQkFBRCxBQUFNO0FBQU4sQUFDVyxBQUNUO2VBRkYsQUFFUSxBQUNOO2VBSEYsQUFHUSxBQUNOO2lCQUFTLG9CQUpYLEFBSStCLEFBQzdCO2tCQUFVLEtBTFosQUFLaUI7O29CQUxqQjtzQkExRUosQUEwREUsQUFnQkUsQUFRRjtBQVJFO0FBQ0UseUNBT0osQUFBQyxzQkFBRCxBQUFNO0FBQU4sQUFDVyxBQUNUO2VBRkYsQUFFUSxBQUNOO2tCQUhGOztvQkFBQTtzQkFsRkYsQUFrRkUsQUFNQTtBQU5BO0FBQ0UsMEJBS0YsQUFBQywwQ0FBUSxPQUFULE1BQWUsU0FBZixBQUF3QjtvQkFBeEI7c0JBeEZGLEFBd0ZFLEFBRUE7QUFGQTswQkFFQSxBQUFDLHlDQUFPLFVBQVIsTUFBaUIsU0FBakIsQUFBeUIsU0FBUSxNQUFqQyxBQUFzQyxPQUFNLE1BQTVDLEFBQWlEO29CQUFqRDtzQkFBQTtBQUFBO1NBMUZGLEFBMEZFLEFBR0EsbURBQUEsQUFBQywwQ0FBUSxRQUFUO29CQUFBO3NCQTdGRixBQTZGRSxBQUNBO0FBREE7MEJBQ0EsQUFBQywwQ0FBUSxRQUFUO29CQUFBO3NCQTlGRixBQThGRSxBQUNBO0FBREE7MEJBQ0EsQUFBQywwQ0FBUSxRQUFUO29CQUFBO3NCQWhKWixBQUdFLEFBaUJFLEFBQ0UsQUE0QkksQUErRkUsQUFNVjtBQU5VOzhCQU1WLEFBQUMsNENBQVUsTUFBWCxNQUFnQixXQUFoQixBQUEwQjtvQkFBMUI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUNZLDhCQUFBLEFBQUMsdUNBQUssT0FBTixBQUFZLE9BQU0sTUFBbEIsQUFBdUI7b0JBQXZCO3NCQURaLEFBQ1k7QUFBQTtVQUFxQyxPQURqRCxBQUVFLHFCQUFBLGNBQUEsT0FBRyxNQUFILEFBQVE7b0JBQVI7c0JBQUE7QUFBQTtTQTFKUixBQUNFLEFBc0pFLEFBQ0UsQUFFRSxBQUtUOzs7OztBQXZZd0IsQSxBQTBZM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoicmVnaXN0ZXJGb3JtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wYW5ncG9uZC9TaXRlcy9OZXh0Z2Vuc29mdC9leGFtIn0=