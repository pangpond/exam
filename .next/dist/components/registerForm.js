"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

var _semanticUiReact = require("semantic-ui-react");

var _index = require("next/dist/lib/router/index.js");

var _index2 = _interopRequireDefault(_index);

var _reactSelectFastFilterOptions = require("react-select-fast-filter-options");

var _reactSelectFastFilterOptions2 = _interopRequireDefault(_reactSelectFastFilterOptions);

var _reactVirtualizedSelect = require("react-virtualized-select");

var _reactVirtualizedSelect2 = _interopRequireDefault(_reactVirtualizedSelect);

var _school = require("../static/school.json");

var _school2 = _interopRequireDefault(_school);

require("react-virtualized/styles.css");

require("react-virtualized-select/styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/pangpond/Sites/Nextgensoft/exam/components/registerForm.js";


var lookup = _school2.default["lookup"].split("|");
var words = _school2.default["words"].split("|");
var schools = [];

var t = function t(text) {
  if (typeof text === "number") {
    text = lookup[text];
  }

  return text.replace(/[A-Z]/gi, function (m) {
    var ch = m.charCodeAt(0);
    return words[ch < 97 ? ch - 65 : 26 + ch - 97];
  });
};

var steps = [{
  key: "register",
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

  return _react2.default.createElement("datalist", { id: "languages", __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }, _react2.default.createElement("option", { value: "English", __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }), _react2.default.createElement("option", { value: "Chinese", __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }), _react2.default.createElement("option", { value: "Dutch", __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }));
};

var RegisterForm = function (_Component) {
  (0, _inherits3.default)(RegisterForm, _Component);

  function RegisterForm(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, RegisterForm);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RegisterForm.__proto__ || (0, _getPrototypeOf2.default)(RegisterForm)).call(this, props));

    _this.SchoolNameInput = function () {
      var options = schools.map(function (item, index) {
        return {
          label: index + ": " + item.text,
          value: index
        };
      });

      console.log(options);
      var filterOptions = (0, _reactSelectFastFilterOptions2.default)({ options: options });

      return _react2.default.createElement(_reactVirtualizedSelect2.default, {
        filterOptions: filterOptions,
        options: options,
        onChange: function onChange(value1) {
          return _this.setState({ value1: value1 });
        },
        value: _this.state.value1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      });

      return _react2.default.createElement(_semanticUiReact.Form.Group, { widths: "equal", __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        control: _semanticUiReact.Input,
        label: "\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E01\u0E33\u0E25\u0E31\u0E07\u0E28\u0E36\u0E01\u0E29\u0E32",
        list: "languages",
        placeholder: "\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E01\u0E33\u0E25\u0E31\u0E07\u0E28\u0E36\u0E01\u0E29\u0E32",
        value: prev_edu_name,
        name: "prev_edu_name",
        onChange: _this.handleChange,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }), _react2.default.createElement(SchoolList, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }));
    };

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

      if (citizen !== "" && title !== "" && firstname !== "" && lastname !== "" && prev_edu_name !== "" && prev_edu_sub_district !== "" && prev_edu_district !== "" && prev_edu_province !== "") {
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
                return fetch("https://rest.nextschool.io/v1/exam/registrant", {
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
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref4.apply(this, arguments);
      };
    }();

    _this.state = {
      steps: steps,
      title: "",
      firstname: "",
      lastname: "",
      prev_edu_name: "",
      prev_edu_sub_district: "",
      prev_edu_district: "",
      prev_edu_province: "",
      prev_edu_source: "",
      loading: false,
      error: false,
      errorMsg: "",
      finish: false
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.SchoolNameInput = _this.SchoolNameInput.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(RegisterForm, [{
    key: "componentWillMount",
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
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.state.citizen === "" || typeof this.state.citizen === "undefined") {
        _index2.default.push("/");
      }

      var i = 1;
      _school2.default["data"].map(function (provinces) {
        provinces[1].map(function (districts) {
          districts[1].map(function (subDistricts) {
            subDistricts[1].map(function (schoolName) {
              schools.push({
                id: i,
                text: "โรงเรียน" + t(schoolName).trim() + " >> " + t(subDistricts[0]) + " >> " + t(districts[0]) + " >> " + t(provinces[0])
              });
              i++;
            });
          });
        });
      });
    }
  }, {
    key: "render",
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

      return _react2.default.createElement("div", {
        style: { display: "flex", minHeight: "100vh", flexDirection: "column" },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        }
      }, _react2.default.createElement("div", { style: { flex: 1 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: "1606080505",
        css: ".ui.text.container{max-width:fit-content !important;}.bgMain{background-color:#ee4616 !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmVnaXN0ZXJGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlUZSxBQUdvRCxBQUdHLGlDQUZ0QyxHQUdBIiwiZmlsZSI6ImNvbXBvbmVudHMvcmVnaXN0ZXJGb3JtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wYW5ncG9uZC9TaXRlcy9OZXh0Z2Vuc29mdC9leGFtIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQge1xuICBDb250YWluZXIsXG4gIFNlZ21lbnQsXG4gIEhlYWRlcixcbiAgSWNvbixcbiAgU3RlcCxcbiAgQnV0dG9uLFxuICBDaGVja2JveCxcbiAgRm9ybSxcbiAgSW5wdXQsXG4gIFJhZGlvLFxuICBTZWxlY3QsXG4gIFRleHRBcmVhLFxuICBEaXZpZGVyLFxuICBHcmlkLFxuICBNZXNzYWdlXG59IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBjcmVhdGVGaWx0ZXJPcHRpb25zIGZyb20gXCJyZWFjdC1zZWxlY3QtZmFzdC1maWx0ZXItb3B0aW9uc1wiO1xuaW1wb3J0IFZpcnR1YWxpemVkU2VsZWN0IGZyb20gXCJyZWFjdC12aXJ0dWFsaXplZC1zZWxlY3RcIjtcbmltcG9ydCB7IGRlZmF1bHQgYXMgc2Nob29sSnNvbiB9IGZyb20gXCIuLi9zdGF0aWMvc2Nob29sLmpzb25cIjtcbmltcG9ydCBcInJlYWN0LXZpcnR1YWxpemVkL3N0eWxlcy5jc3NcIjtcbmltcG9ydCBcInJlYWN0LXZpcnR1YWxpemVkLXNlbGVjdC9zdHlsZXMuY3NzXCI7XG5cbmNvbnN0IGxvb2t1cCA9IHNjaG9vbEpzb25bXCJsb29rdXBcIl0uc3BsaXQoXCJ8XCIpO1xuY29uc3Qgd29yZHMgPSBzY2hvb2xKc29uW1wid29yZHNcIl0uc3BsaXQoXCJ8XCIpO1xuY29uc3Qgc2Nob29scyA9IFtdO1xuXG5jb25zdCB0ID0gdGV4dCA9PiB7XG4gIGlmICh0eXBlb2YgdGV4dCA9PT0gXCJudW1iZXJcIikge1xuICAgIHRleHQgPSBsb29rdXBbdGV4dF07XG4gIH1cblxuICByZXR1cm4gdGV4dC5yZXBsYWNlKC9bQS1aXS9naSwgbSA9PiB7XG4gICAgdmFyIGNoID0gbS5jaGFyQ29kZUF0KDApO1xuICAgIHJldHVybiB3b3Jkc1tjaCA8IDk3ID8gY2ggLSA2NSA6IDI2ICsgY2ggLSA5N107XG4gIH0pO1xufTtcblxuY29uc3Qgc3RlcHMgPSBbXG4gIHtcbiAgICBrZXk6IFwicmVnaXN0ZXJcIixcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgdGl0bGU6IFwi4LiB4Lij4Lit4LiB4LiC4LmJ4Lit4Lih4Li54LilXCIsXG4gICAgZGVzY3JpcHRpb246IFwi4LiK4Li34LmI4LitLeC4quC4geC4uOC4pSwg4Liq4LiW4Liy4LiZ4Lio4Li24LiB4Lip4LiyXCJcbiAgfSxcbiAge1xuICAgIGtleTogXCJmaW5pc2hcIixcbiAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICB0aXRsZTogXCLguKrguLPguYDguKPguYfguIhcIlxuICB9XG5dO1xuXG5jb25zdCB0aXRsZXMgPSBbXG4gIHsga2V5OiBcIuC4lC7guIouXCIsIHRleHQ6IFwi4LmA4LiU4LmH4LiB4LiK4Liy4LiiXCIsIHZhbHVlOiBcIuC4lC7guIouXCIgfSxcbiAgeyBrZXk6IFwi4LiULuC4jS5cIiwgdGV4dDogXCLguYDguJTguYfguIHguKvguI3guLTguIdcIiwgdmFsdWU6IFwi4LiULuC4jS5cIiB9LFxuICB7IGtleTogXCLguJnguLLguKJcIiwgdGV4dDogXCLguJnguLLguKJcIiwgdmFsdWU6IFwi4LiZ4Liy4LiiXCIgfSxcbiAgeyBrZXk6IFwi4LiZ4Liy4LiH4Liq4Liy4LinXCIsIHRleHQ6IFwi4LiZ4Liy4LiH4Liq4Liy4LinXCIsIHZhbHVlOiBcIuC4meC4suC4h+C4quC4suC4p1wiIH1cbl07XG5cbmNvbnN0IFNjaG9vbExpc3QgPSAoKSA9PiB7XG4gIC8vIGNvbnN0IHNjaG9vbE9wdGlvbnMgPSBzY2hvb2xzLmZpbHRlcihzY2hvb2wgPT4ge1xuICAvLyAgIHJldHVybiBzY2hvb2wudGV4dC50b0xvd2VyQ2FzZSgpLm1hdGNoKFwi4LiB4Liy4LiNXCIpO1xuICAvLyB9KTtcblxuICAvLyBjb25zb2xlLmxvZyhzY2hvb2xPcHRpb25zKTtcblxuICByZXR1cm4gKFxuICAgIDxkYXRhbGlzdCBpZD1cImxhbmd1YWdlc1wiPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIkVuZ2xpc2hcIiAvPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNoaW5lc2VcIiAvPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIkR1dGNoXCIgLz5cbiAgICA8L2RhdGFsaXN0PlxuICApO1xufTtcblxuY2xhc3MgUmVnaXN0ZXJGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0ZXBzLFxuICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICBmaXJzdG5hbWU6IFwiXCIsXG4gICAgICBsYXN0bmFtZTogXCJcIixcbiAgICAgIHByZXZfZWR1X25hbWU6IFwiXCIsXG4gICAgICBwcmV2X2VkdV9zdWJfZGlzdHJpY3Q6IFwiXCIsXG4gICAgICBwcmV2X2VkdV9kaXN0cmljdDogXCJcIixcbiAgICAgIHByZXZfZWR1X3Byb3ZpbmNlOiBcIlwiLFxuICAgICAgcHJldl9lZHVfc291cmNlOiBcIlwiLFxuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBlcnJvcjogZmFsc2UsXG4gICAgICBlcnJvck1zZzogXCJcIixcbiAgICAgIGZpbmlzaDogZmFsc2VcbiAgICB9O1xuXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLlNjaG9vbE5hbWVJbnB1dCA9IHRoaXMuU2Nob29sTmFtZUlucHV0LmJpbmQodGhpcyk7XG4gIH1cblxuICBTY2hvb2xOYW1lSW5wdXQgPSAoKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHNjaG9vbHMubWFwKChpdGVtLCBpbmRleCkgPT4gKHtcbiAgICAgIGxhYmVsOiBgJHtpbmRleH06ICR7aXRlbS50ZXh0fWAsXG4gICAgICB2YWx1ZTogaW5kZXhcbiAgICB9KSk7XG5cbiAgICBjb25zb2xlLmxvZyhvcHRpb25zKTtcbiAgICBjb25zdCBmaWx0ZXJPcHRpb25zID0gY3JlYXRlRmlsdGVyT3B0aW9ucyh7IG9wdGlvbnMgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFZpcnR1YWxpemVkU2VsZWN0XG4gICAgICAgIGZpbHRlck9wdGlvbnM9e2ZpbHRlck9wdGlvbnN9XG4gICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgIG9uQ2hhbmdlPXt2YWx1ZTEgPT4gdGhpcy5zZXRTdGF0ZSh7IHZhbHVlMSB9KX1cbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWUxfVxuICAgICAgLz5cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz1cImVxdWFsXCI+XG4gICAgICAgIDxGb3JtLkZpZWxkXG4gICAgICAgICAgY29udHJvbD17SW5wdXR9XG4gICAgICAgICAgbGFiZWw9XCLguYLguKPguIfguYDguKPguLXguKLguJnguJfguLXguYjguIHguLPguKXguLHguIfguKjguLbguIHguKnguLJcIlxuICAgICAgICAgIGxpc3Q9XCJsYW5ndWFnZXNcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LmC4Lij4LiH4LmA4Lij4Li14Lii4LiZ4LiX4Li14LmI4LiB4Liz4Lil4Lix4LiH4Lio4Li24LiB4Lip4LiyXCJcbiAgICAgICAgICB2YWx1ZT17cHJldl9lZHVfbmFtZX1cbiAgICAgICAgICBuYW1lPVwicHJldl9lZHVfbmFtZVwiXG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgIC8+XG4gICAgICAgIDxTY2hvb2xMaXN0IC8+XG4gICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgKTtcbiAgfTtcblxuICBoYW5kbGVDaGFuZ2VMZXZlbCA9IChlLCB7IHZhbHVlIH0pID0+XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByZXZfZWR1X3NvdXJjZTogdmFsdWUgfSk7XG4gIGhhbmRsZUNoYW5nZVRpdGxlID0gKGUsIHsgdmFsdWUgfSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHRpdGxlOiB2YWx1ZSB9KTtcblxuICBoYW5kbGVDaGFuZ2UgPSAoZSwgeyBuYW1lLCB2YWx1ZSB9KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtuYW1lXTogdmFsdWUgfSk7XG4gIH07XG5cbiAgaGFuZGxlU3VibWl0ID0gZXZlbnQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3Qge1xuICAgICAgY2l0aXplbixcbiAgICAgIHRpdGxlLFxuICAgICAgZmlyc3RuYW1lLFxuICAgICAgbGFzdG5hbWUsXG4gICAgICBwcmV2X2VkdV9uYW1lLFxuICAgICAgcHJldl9lZHVfc3ViX2Rpc3RyaWN0LFxuICAgICAgcHJldl9lZHVfZGlzdHJpY3QsXG4gICAgICBwcmV2X2VkdV9wcm92aW5jZSxcbiAgICAgIHByZXZfZWR1X3NvdXJjZVxuICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKFxuICAgICAgY2l0aXplbiAhPT0gXCJcIiAmJlxuICAgICAgdGl0bGUgIT09IFwiXCIgJiZcbiAgICAgIGZpcnN0bmFtZSAhPT0gXCJcIiAmJlxuICAgICAgbGFzdG5hbWUgIT09IFwiXCIgJiZcbiAgICAgIHByZXZfZWR1X25hbWUgIT09IFwiXCIgJiZcbiAgICAgIHByZXZfZWR1X3N1Yl9kaXN0cmljdCAhPT0gXCJcIiAmJlxuICAgICAgcHJldl9lZHVfZGlzdHJpY3QgIT09IFwiXCIgJiZcbiAgICAgIHByZXZfZWR1X3Byb3ZpbmNlICE9PSBcIlwiXG4gICAgKSB7XG4gICAgICBjb25zdCByZWdpc3RyYW50SW5mbyA9IHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGZpcnN0bmFtZSxcbiAgICAgICAgbGFzdG5hbWUsXG4gICAgICAgIGNpdGl6ZW5faWQ6IGNpdGl6ZW4sXG4gICAgICAgIHNjaG9vbF9pZDogXCIxNTlcIixcbiAgICAgICAgdGFyZ2V0X2lkOiBcIjdcIixcbiAgICAgICAgcHJldl9lZHVfbmFtZSxcbiAgICAgICAgcHJldl9lZHVfc3ViX2Rpc3RyaWN0LFxuICAgICAgICBwcmV2X2VkdV9kaXN0cmljdCxcbiAgICAgICAgcHJldl9lZHVfcHJvdmluY2VcbiAgICAgIH07XG5cbiAgICAgIHRoaXMucmVnaXN0ZXIocmVnaXN0cmFudEluZm8pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3I6IHRydWUsIGVycm9yTXNnOiBcIuC4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4guC5ieC4reC4oeC4ueC4peC5g+C4q+C5ieC4hOC4o+C4muC4luC5ieC4p+C4mVwiIH0pO1xuICAgIH1cbiAgfTtcblxuICByZWdpc3RlciA9IGFzeW5jIGJvZHlQcm9wZXJ0eSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vcmVzdC5uZXh0c2Nob29sLmlvL3YxL2V4YW0vcmVnaXN0cmFudGAsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAuLi5ib2R5UHJvcGVydHlcbiAgICAgIH0pLFxuICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIlxuICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gNDAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQVBJIFNlcnZlciBFcnJvclwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhdHVzOiBcIm9wdGlvbnNcIlxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09PSBcIm9rXCIpIHtcbiAgICAgICAgICBjb25zdCBzdGVwcyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcInJlZ2lzdGVyXCIsXG4gICAgICAgICAgICAgIHRpdGxlOiBcIuC4geC4o+C4reC4geC4guC5ieC4reC4oeC4ueC4pVwiLFxuICAgICAgICAgICAgICBjb21wbGV0ZWQ6IHRydWUsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIuC4iuC4t+C5iOC4rS3guKrguIHguLjguKUsIOC4quC4luC4suC4meC4qOC4tuC4geC4qeC4slwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IFwiZmluaXNoXCIsXG4gICAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgY29tcGxldGVkOiB0cnVlLFxuICAgICAgICAgICAgICB0aXRsZTogXCLguKrguLPguYDguKPguYfguIhcIixcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwi4LmE4LiU4LmJ4Lij4Lix4Lia4LiC4LmJ4Lit4Lih4Li54Lil4LmA4Lij4Li14Lii4Lia4Lij4LmJ4Lit4Lii4LmB4Lil4LmJ4LinXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmaW5pc2g6IHRydWUsIHN0ZXBzIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGEuc3RhdHVzID09PSBcImZhaWxcIikge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGJvZHlQcm9wZXJ0eSlcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZXJyb3I6IHRydWUsXG4gICAgICAgICAgICBlcnJvck1zZzogXCLguJzguLTguJTguJ7guKXguLLguJQg4LmE4Lih4LmI4Liq4Liy4Lih4Liy4Lij4LiW4Lia4Lix4LiZ4LiX4Li24LiB4LiC4LmJ4Lit4Lih4Li54Lil4Liq4Lih4Lix4LiE4Lij4LmE4LiU4LmJXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XG4gIH07XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY2l0aXplbjogdGhpcy5wcm9wcy5jaXRpemVuLFxuICAgICAgdGl0bGU6IHRoaXMucHJvcHMudGl0bGUsXG4gICAgICBmaXJzdG5hbWU6IHRoaXMucHJvcHMuZmlyc3RuYW1lLFxuICAgICAgbGFzdG5hbWU6IHRoaXMucHJvcHMubGFzdG5hbWUsXG4gICAgICBwcmV2X2VkdV9uYW1lOiB0aGlzLnByb3BzLnByZXZfZWR1X25hbWUsXG4gICAgICBwcmV2X2VkdV9zdWJfZGlzdHJpY3Q6IHRoaXMucHJvcHMucHJldl9lZHVfc3ViX2Rpc3RyaWN0LFxuICAgICAgcHJldl9lZHVfZGlzdHJpY3Q6IHRoaXMucHJvcHMucHJldl9lZHVfZGlzdHJpY3QsXG4gICAgICBwcmV2X2VkdV9wcm92aW5jZTogdGhpcy5wcm9wcy5wcmV2X2VkdV9wcm92aW5jZSxcbiAgICAgIHByZXZfZWR1X3NvdXJjZTogdGhpcy5wcm9wcy5wcmV2X2VkdV9zb3VyY2VcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmIChcbiAgICAgIHRoaXMuc3RhdGUuY2l0aXplbiA9PT0gXCJcIiB8fFxuICAgICAgdHlwZW9mIHRoaXMuc3RhdGUuY2l0aXplbiA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICkge1xuICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xuICAgIH1cblxuICAgIGxldCBpID0gMTtcbiAgICBzY2hvb2xKc29uW1wiZGF0YVwiXS5tYXAocHJvdmluY2VzID0+IHtcbiAgICAgIHByb3ZpbmNlc1sxXS5tYXAoZGlzdHJpY3RzID0+IHtcbiAgICAgICAgZGlzdHJpY3RzWzFdLm1hcChzdWJEaXN0cmljdHMgPT4ge1xuICAgICAgICAgIHN1YkRpc3RyaWN0c1sxXS5tYXAoc2Nob29sTmFtZSA9PiB7XG4gICAgICAgICAgICBzY2hvb2xzLnB1c2goe1xuICAgICAgICAgICAgICBpZDogaSxcbiAgICAgICAgICAgICAgdGV4dDpcbiAgICAgICAgICAgICAgICBcIuC5guC4o+C4h+C5gOC4o+C4teC4ouC4mVwiICtcbiAgICAgICAgICAgICAgICB0KHNjaG9vbE5hbWUpLnRyaW0oKSArXG4gICAgICAgICAgICAgICAgXCIgPj4gXCIgK1xuICAgICAgICAgICAgICAgIHQoc3ViRGlzdHJpY3RzWzBdKSArXG4gICAgICAgICAgICAgICAgXCIgPj4gXCIgK1xuICAgICAgICAgICAgICAgIHQoZGlzdHJpY3RzWzBdKSArXG4gICAgICAgICAgICAgICAgXCIgPj4gXCIgK1xuICAgICAgICAgICAgICAgIHQocHJvdmluY2VzWzBdKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgc3RlcHMsXG4gICAgICBjaXRpemVuLFxuICAgICAgdGl0bGUsXG4gICAgICBmaXJzdG5hbWUsXG4gICAgICBsYXN0bmFtZSxcbiAgICAgIHByZXZfZWR1X25hbWUsXG4gICAgICBwcmV2X2VkdV9zdWJfZGlzdHJpY3QsXG4gICAgICBwcmV2X2VkdV9kaXN0cmljdCxcbiAgICAgIHByZXZfZWR1X3Byb3ZpbmNlLFxuICAgICAgcHJldl9lZHVfc291cmNlLFxuICAgICAgbG9hZGluZyxcbiAgICAgIGVycm9yLFxuICAgICAgZXJyb3JNc2csXG4gICAgICBmaW5pc2hcbiAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBtaW5IZWlnaHQ6IFwiMTAwdmhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IDEgfX0+XG4gICAgICAgICAgPFNlZ21lbnQ+XG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAudWkudGV4dC5jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYmdNYWluIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZTQ2MTYgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuXG4gICAgICAgICAgICA8Q29udGFpbmVyIHRleHQ+XG4gICAgICAgICAgICAgIDxTdGVwLkdyb3VwIG9yZGVyZWQgaXRlbXM9e3N0ZXBzfSAvPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgPC9TZWdtZW50PlxuICAgICAgICAgIDxTZWdtZW50PlxuICAgICAgICAgICAgPENvbnRhaW5lciB0ZXh0PlxuICAgICAgICAgICAgICA8R3JpZCBjb2x1bW5zPVwiZXF1YWxcIj5cbiAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICA8SGVhZGVyIGFzPVwiaDJcIj5cbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlci5TdWJoZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAg4Lir4Lih4Liy4Lii4LmA4Lil4LiC4Lia4Lix4LiV4Lij4Lib4Lij4Liw4LiK4Liy4LiK4LiZ4LiX4Li14LmI4LmD4LiK4LmJ4Liq4Lih4Lix4LiE4LijXG4gICAgICAgICAgICAgICAgICAgIDwvSGVhZGVyLlN1YmhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAge2NpdGl6ZW59XG4gICAgICAgICAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB0ZXh0QWxpZ249XCJyaWdodFwiIHZlcnRpY2FsQWxpZ249XCJtaWRkbGVcIj5cbiAgICAgICAgICAgICAgICAgIDxIZWFkZXIgYXM9XCJoMlwiIGljb24+XG4gICAgICAgICAgICAgICAgICAgIEtKU1QgUHJlLXRlc3QgMjAxOFxuICAgICAgICAgICAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8RGl2aWRlciBzZWN0aW9uIC8+XG4gICAgICAgICAgICAgIHtmaW5pc2ggPyAoXG4gICAgICAgICAgICAgICAgPEhlYWRlciBhcz1cImgyXCIgaWNvbiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJjaGVja1wiIGNpcmN1bGFyIGNvbG9yPVwiZ3JlZW5cIiAvPlxuICAgICAgICAgICAgICAgICAgPEhlYWRlciBhcz1cImgxXCI+4LmA4Lij4Li14Lii4Lia4Lij4LmJ4Lit4LiiPC9IZWFkZXI+XG4gICAgICAgICAgICAgICAgICA8SGVhZGVyLkNvbnRlbnQgY29sb3I9XCJncmV5XCI+4LiC4Lix4LmJ4LiZ4LiV4Lit4LiZ4LiV4LmI4Lit4LmE4LibPC9IZWFkZXIuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgIDxIZWFkZXIuU3ViaGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICDguJvguKPguLDguIHguLLguKjguKPguLLguKLguIrguLfguYjguK3guJzguLnguYnguKHguLXguKrguLTguJfguJjguLTguYzguKrguK3guJog4Lin4Lix4LiZ4LiX4Li14LmIIDE4IOC4oeC4geC4o+C4suC4hOC4oSAyNTYxIDxiciAvPuC4l+C4teC5iOC4muC4reC4o+C5jOC4lOC4m+C4o+C4sOC4iuC4suC4quC4seC4oeC4nuC4seC4meC4mOC5jOC4muC4o+C4tOC5gOC4p+C4k+C4oeC4uOC4guC4geC4peC4suC4hzxiciAvPlxuICAgICAgICAgICAgICAgICAgICDguYHguKXguLDguJfguLLguIcgd3d3Lmtqc3QuYWMudGhcbiAgICAgICAgICAgICAgICAgIDwvSGVhZGVyLlN1YmhlYWRlcj5cbiAgICAgICAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9XCJlcXVhbFwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1NlbGVjdH1cbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuC4hOC4s+C4meC4s+C4q+C4meC5ieC4suC4iuC4t+C5iOC4rVwiXG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGl0bGVzfVxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LiE4Liz4LiZ4Liz4Lir4LiZ4LmJ4Liy4LiK4Li34LmI4LitXCJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlVGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuC4iuC4t+C5iOC4rVwiXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguIrguLfguYjguK1cIlxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaXJzdG5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmaXJzdG5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLguJnguLLguKHguKrguIHguLjguKVcIlxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LiZ4Liy4Lih4Liq4LiB4Li44LilXCJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFzdG5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsYXN0bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cblxuICAgICAgICAgICAgICAgICAge3RoaXMuU2Nob29sTmFtZUlucHV0KCl9XG5cbiAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz1cImVxdWFsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLguJXguLPguJrguKUv4LmB4LiC4Lin4LiHXCJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJldl9lZHVfc3ViX2Rpc3RyaWN0fVxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcmV2X2VkdV9zdWJfZGlzdHJpY3RcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi4Lit4Liz4LmA4Lig4LitL+C5gOC4guC4lVwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ByZXZfZWR1X2Rpc3RyaWN0fVxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcmV2X2VkdV9kaXN0cmljdFwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLguIjguLHguIfguKvguKfguLHguJRcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcmV2X2VkdV9wcm92aW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJldl9lZHVfcHJvdmluY2VcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgaW5saW5lPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+4LiB4Liz4Lil4Lix4LiH4Lio4Li24LiB4Lip4Liy4Lij4Liw4LiU4Lix4Lia4LiK4Lix4LmJ4LiZPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGRcbiAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtSYWRpb31cbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuC4my40XCJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3ByZXZfZWR1X3NvdXJjZSA9PT0gXCIxXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlTGV2ZWx9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17UmFkaW99XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLguJsuNVwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtwcmV2X2VkdV9zb3VyY2UgPT09IFwiMlwifVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZUxldmVsfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1JhZGlvfVxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi4LibLjZcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiM1wiXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17cHJldl9lZHVfc291cmNlID09PSBcIjNcIn1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VMZXZlbH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e0NoZWNrYm94fVxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuC4guC5ieC4suC4nuC5gOC4iOC5ieC4suC4ouC4reC4oeC4o+C4seC4muC4p+C5iOC4suC4guC5ieC4reC4oeC4ueC4peC4guC5ieC4suC4h+C4leC5ieC4meC5gOC4m+C5h+C4meC4iOC4o+C4tOC4h+C4l+C4uOC4geC4m+C4o+C4sOC4geC4suC4o1wiXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICA8TWVzc2FnZSBlcnJvciBjb250ZW50PXtlcnJvck1zZ30gLz5cblxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwb3NpdGl2ZSBmbG9hdGVkPVwicmlnaHRcIiBzaXplPVwiYmlnXCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICDguKrguKHguLHguITguKNcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XG4gICAgICAgICAgICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cbiAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxuICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgIDwvU2VnbWVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxDb250YWluZXIgdGV4dCB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIE1hZGUgd2l0aCA8SWNvbiBjb2xvcj1cInJlZFwiIG5hbWU9XCJoZWFydFwiIC8+IGJ5e1wiIFwifVxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly93d3cubmV4dHNjaG9vbC5pb1wiPiBOZXh0U2Nob29sPC9hPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyRm9ybTtcbiJdfQ== */\n/*@ sourceURL=components/registerForm.js */"
      }), _react2.default.createElement(_semanticUiReact.Container, { text: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        }
      }, _react2.default.createElement(_semanticUiReact.Step.Group, { ordered: true, items: steps, __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        }
      }))), _react2.default.createElement(_semanticUiReact.Segment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        }
      }, _react2.default.createElement(_semanticUiReact.Container, { text: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, { columns: "equal", __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: "h2", __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        }
      }, _react2.default.createElement(_semanticUiReact.Header.Subheader, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        }
      }, "\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E25\u0E02\u0E1A\u0E31\u0E15\u0E23\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E0A\u0E19\u0E17\u0E35\u0E48\u0E43\u0E0A\u0E49\u0E2A\u0E21\u0E31\u0E04\u0E23"), citizen)), _react2.default.createElement(_semanticUiReact.Grid.Column, { textAlign: "right", verticalAlign: "middle", __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: "h2", icon: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        }
      }, "KJST Pre-test 2018"))), _react2.default.createElement(_semanticUiReact.Divider, { section: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        }
      }), finish ? _react2.default.createElement(_semanticUiReact.Header, { as: "h2", icon: true, textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "check", circular: true, color: "green", __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        }
      }), _react2.default.createElement(_semanticUiReact.Header, { as: "h1", __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        }
      }, "\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22"), _react2.default.createElement(_semanticUiReact.Header.Content, { color: "grey", __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        }
      }, "\u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19\u0E15\u0E48\u0E2D\u0E44\u0E1B"), _react2.default.createElement(_semanticUiReact.Header.Subheader, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        }
      }, "\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E28\u0E23\u0E32\u0E22\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E21\u0E35\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C\u0E2A\u0E2D\u0E1A \u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 18 \u0E21\u0E01\u0E23\u0E32\u0E04\u0E21 2561 ", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        }
      }), "\u0E17\u0E35\u0E48\u0E1A\u0E2D\u0E23\u0E4C\u0E14\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E2A\u0E31\u0E21\u0E1E\u0E31\u0E19\u0E18\u0E4C\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E21\u0E38\u0E02\u0E01\u0E25\u0E32\u0E07", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        }
      }), "\u0E41\u0E25\u0E30\u0E17\u0E32\u0E07 www.kjst.ac.th")) : _react2.default.createElement(_semanticUiReact.Form, {
        onSubmit: this.handleSubmit,
        loading: loading,
        error: error,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Group, { widths: "equal", __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        control: _semanticUiReact.Select,
        label: "\u0E04\u0E33\u0E19\u0E33\u0E2B\u0E19\u0E49\u0E32\u0E0A\u0E37\u0E48\u0E2D",
        options: titles,
        placeholder: "\u0E04\u0E33\u0E19\u0E33\u0E2B\u0E19\u0E49\u0E32\u0E0A\u0E37\u0E48\u0E2D",
        value: title,
        onChange: this.handleChangeTitle,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Input, {
        label: "\u0E0A\u0E37\u0E48\u0E2D",
        placeholder: "\u0E0A\u0E37\u0E48\u0E2D",
        name: "firstname",
        value: firstname,
        onChange: this.handleChange,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Input, {
        label: "\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25",
        placeholder: "\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25",
        name: "lastname",
        value: lastname,
        onChange: this.handleChange,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380
        }
      })), this.SchoolNameInput(), _react2.default.createElement(_semanticUiReact.Form.Group, { widths: "equal", __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Input, {
        label: "\u0E15\u0E33\u0E1A\u0E25/\u0E41\u0E02\u0E27\u0E07",
        value: prev_edu_sub_district,
        name: "prev_edu_sub_district",
        onChange: this.handleChange,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Input, {
        label: "\u0E2D\u0E33\u0E40\u0E20\u0E2D/\u0E40\u0E02\u0E15",
        value: prev_edu_district,
        name: "prev_edu_district",
        onChange: this.handleChange,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Input, {
        label: "\u0E08\u0E31\u0E07\u0E2B\u0E27\u0E31\u0E14",
        value: prev_edu_province,
        name: "prev_edu_province",
        onChange: this.handleChange,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Group, { inline: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 415
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416
        }
      }, "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E28\u0E36\u0E01\u0E29\u0E32\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19"), _react2.default.createElement(_semanticUiReact.Form.Field, {
        control: _semanticUiReact.Radio,
        label: "\u0E1B.4",
        value: "1",
        checked: prev_edu_source === "1",
        onChange: this.handleChangeLevel,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 417
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Field, {
        control: _semanticUiReact.Radio,
        label: "\u0E1B.5",
        value: "2",
        checked: prev_edu_source === "2",
        onChange: this.handleChangeLevel,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Field, {
        control: _semanticUiReact.Radio,
        label: "\u0E1B.6",
        value: "3",
        checked: prev_edu_source === "3",
        onChange: this.handleChangeLevel,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        control: _semanticUiReact.Checkbox,
        label: "\u0E02\u0E49\u0E32\u0E1E\u0E40\u0E08\u0E49\u0E32\u0E22\u0E2D\u0E21\u0E23\u0E31\u0E1A\u0E27\u0E48\u0E32\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E02\u0E49\u0E32\u0E07\u0E15\u0E49\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E08\u0E23\u0E34\u0E07\u0E17\u0E38\u0E01\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E23",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439
        }
      }), _react2.default.createElement(_semanticUiReact.Message, { error: true, content: errorMsg, __source: {
          fileName: _jsxFileName,
          lineNumber: 445
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { positive: true, floated: "right", size: "big", type: "submit", __source: {
          fileName: _jsxFileName,
          lineNumber: 447
        }
      }, "\u0E2A\u0E21\u0E31\u0E04\u0E23"), _react2.default.createElement(_semanticUiReact.Divider, { hidden: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 450
        }
      }), _react2.default.createElement(_semanticUiReact.Divider, { hidden: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 451
        }
      }), _react2.default.createElement(_semanticUiReact.Divider, { hidden: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 452
        }
      }))))), _react2.default.createElement(_semanticUiReact.Container, { text: true, textAlign: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 458
        }
      }, _react2.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 459
        }
      }, "Made with ", _react2.default.createElement(_semanticUiReact.Icon, { color: "red", name: "heart", __source: {
          fileName: _jsxFileName,
          lineNumber: 460
        }
      }), " by", " ", _react2.default.createElement("a", { href: "http://www.nextschool.io", __source: {
          fileName: _jsxFileName,
          lineNumber: 461
        }
      }, " NextSchool"))));
    }
  }]);

  return RegisterForm;
}(_react.Component);

exports.default = RegisterForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmVnaXN0ZXJGb3JtLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIkxpbmsiLCJDb250YWluZXIiLCJTZWdtZW50IiwiSGVhZGVyIiwiSWNvbiIsIlN0ZXAiLCJCdXR0b24iLCJDaGVja2JveCIsIkZvcm0iLCJJbnB1dCIsIlJhZGlvIiwiU2VsZWN0IiwiVGV4dEFyZWEiLCJEaXZpZGVyIiwiR3JpZCIsIk1lc3NhZ2UiLCJSb3V0ZXIiLCJjcmVhdGVGaWx0ZXJPcHRpb25zIiwiVmlydHVhbGl6ZWRTZWxlY3QiLCJkZWZhdWx0Iiwic2Nob29sSnNvbiIsImxvb2t1cCIsInNwbGl0Iiwid29yZHMiLCJzY2hvb2xzIiwidCIsInRleHQiLCJyZXBsYWNlIiwiY2giLCJtIiwiY2hhckNvZGVBdCIsInN0ZXBzIiwia2V5IiwiYWN0aXZlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImRpc2FibGVkIiwidGl0bGVzIiwidmFsdWUiLCJTY2hvb2xMaXN0IiwiUmVnaXN0ZXJGb3JtIiwicHJvcHMiLCJTY2hvb2xOYW1lSW5wdXQiLCJvcHRpb25zIiwibWFwIiwiaXRlbSIsImluZGV4IiwibGFiZWwiLCJjb25zb2xlIiwibG9nIiwiZmlsdGVyT3B0aW9ucyIsInNldFN0YXRlIiwidmFsdWUxIiwic3RhdGUiLCJwcmV2X2VkdV9uYW1lIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlQ2hhbmdlTGV2ZWwiLCJlIiwicHJldl9lZHVfc291cmNlIiwiaGFuZGxlQ2hhbmdlVGl0bGUiLCJuYW1lIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNpdGl6ZW4iLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsInByZXZfZWR1X3N1Yl9kaXN0cmljdCIsInByZXZfZWR1X2Rpc3RyaWN0IiwicHJldl9lZHVfcHJvdmluY2UiLCJyZWdpc3RyYW50SW5mbyIsImNpdGl6ZW5faWQiLCJzY2hvb2xfaWQiLCJ0YXJnZXRfaWQiLCJyZWdpc3RlciIsImVycm9yIiwiZXJyb3JNc2ciLCJib2R5UHJvcGVydHkiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJib2R5IiwiY3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJFcnJvciIsImpzb24iLCJkYXRhIiwiY29tcGxldGVkIiwiZmluaXNoIiwicmVzIiwibG9hZGluZyIsImJpbmQiLCJwdXNoIiwiaSIsInByb3ZpbmNlcyIsImRpc3RyaWN0cyIsInN1YkRpc3RyaWN0cyIsImlkIiwic2Nob29sTmFtZSIsInRyaW0iLCJkaXNwbGF5IiwibWluSGVpZ2h0IiwiZmxleERpcmVjdGlvbiIsImZsZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7OztBQUNULEFBQU87Ozs7QUFDUCxBQUNFLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQTs7QUFFRixBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTLEFBQVcsQUFBa0I7Ozs7QUFDdEM7O0FBQ0E7Ozs7Ozs7QUFFQSxJQUFNLFNBQVMsaUJBQUEsQUFBVyxVQUFYLEFBQXFCLE1BQXBDLEFBQWUsQUFBMkI7QUFDMUMsSUFBTSxRQUFRLGlCQUFBLEFBQVcsU0FBWCxBQUFvQixNQUFsQyxBQUFjLEFBQTBCO0FBQ3hDLElBQU0sVUFBTixBQUFnQjs7QUFFaEIsSUFBTSxJQUFJLFNBQUosQUFBSSxRQUFRLEFBQ2hCO01BQUksT0FBQSxBQUFPLFNBQVgsQUFBb0IsVUFBVSxBQUM1QjtXQUFPLE9BQVAsQUFBTyxBQUFPLEFBQ2Y7QUFFRDs7Y0FBTyxBQUFLLFFBQUwsQUFBYSxXQUFXLGFBQUssQUFDbEM7UUFBSSxLQUFLLEVBQUEsQUFBRSxXQUFYLEFBQVMsQUFBYSxBQUN0QjtXQUFPLE1BQU0sS0FBQSxBQUFLLEtBQUssS0FBVixBQUFlLEtBQUssS0FBQSxBQUFLLEtBQXRDLEFBQU8sQUFBb0MsQUFDNUM7QUFIRCxBQUFPLEFBSVIsR0FKUTtBQUxUOztBQVdBLElBQU07T0FDSixBQUNPLEFBQ0w7VUFGRixBQUVVLEFBQ1I7U0FIRixBQUdTLEFBQ1A7ZUFMVSxBQUNaLEFBSWU7QUFKZixBQUNFLENBRlU7T0FPWixBQUNPLEFBQ0w7WUFGRixBQUVZLEFBQ1Y7U0FWSixBQUFjLEFBT1osQUFHUztBQUhULEFBQ0U7O0FBTUosSUFBTSxTQUFTLENBQ2IsRUFBRSxLQUFGLEFBQU8sUUFBUSxNQUFmLEFBQXFCLFdBQVcsT0FEbkIsQUFDYixBQUF1QyxVQUN2QyxFQUFFLEtBQUYsQUFBTyxRQUFRLE1BQWYsQUFBcUIsWUFBWSxPQUZwQixBQUViLEFBQXdDLFVBQ3hDLEVBQUUsS0FBRixBQUFPLE9BQU8sTUFBZCxBQUFvQixPQUFPLE9BSGQsQUFHYixBQUFrQyxTQUNsQyxFQUFFLEtBQUYsQUFBTyxVQUFVLE1BQWpCLEFBQXVCLFVBQVUsT0FKbkMsQUFBZSxBQUliLEFBQXdDOztBQUcxQyxJQUFNLGFBQWEsU0FBYixBQUFhLGFBQU0sQUFDdkI7QUFDQTtBQUNBO0FBRUE7O0FBRUE7O3lCQUNFLGNBQUEsY0FBVSxJQUFWLEFBQWE7Z0JBQWI7a0JBQUEsQUFDRTtBQURGO0dBQUEsNENBQ1UsT0FBUixBQUFjO2dCQUFkO2tCQURGLEFBQ0UsQUFDQTtBQURBO2dEQUNRLE9BQVIsQUFBYztnQkFBZDtrQkFGRixBQUVFLEFBQ0E7QUFEQTtnREFDUSxPQUFSLEFBQWM7Z0JBQWQ7a0JBSkosQUFDRSxBQUdFLEFBR0w7QUFISzs7QUFYTjs7SSxBQWdCTTt3Q0FDSjs7d0JBQUEsQUFBWSxPQUFPO2lCQUFBOzt3Q0FBQTs7a0pBQUEsQUFDWDs7VUFEVyxBQXVCbkIsa0JBQWtCLFlBQU0sQUFDdEI7VUFBTSxrQkFBVSxBQUFRLElBQUksVUFBQSxBQUFDLE1BQUQsQUFBTyxPQUFQOztpQkFDMUIsQUFBVSxlQUFVLEtBRHdCLEFBQ25CLEFBQ3pCO2lCQUYwQixBQUFrQixBQUVyQztBQUZxQyxBQUM1QztBQURGLEFBQWdCLEFBS2hCLE9BTGdCOztjQUtoQixBQUFRLElBQVIsQUFBWSxBQUNaO1VBQU0sZ0JBQWdCLDRDQUFvQixFQUFFLFNBQTVDLEFBQXNCLEFBQW9CLEFBRTFDOzs2QkFDRSxBQUFDO3VCQUFELEFBQ2lCLEFBQ2Y7aUJBRkYsQUFFVyxBQUNUO2tCQUFVLDBCQUFBO2lCQUFVLE1BQUEsQUFBSyxTQUFTLEVBQUUsUUFBMUIsQUFBVSxBQUFjO0FBSHBDLEFBSUU7ZUFBTyxNQUFBLEFBQUssTUFKZCxBQUlvQjs7b0JBSnBCO3NCQURGLEFBQ0UsQUFRRjtBQVJFO0FBQ0UsT0FERjs7NkJBU0MsY0FBRCxzQkFBQSxBQUFNLFNBQU0sUUFBWixBQUFtQjtvQkFBbkI7c0JBQUEsQUFDRTtBQURGO09BQUEsZ0NBQ0UsQUFBQyxzQkFBRCxBQUFNO0FBQU4sQUFDVyxBQUNUO2VBRkYsQUFFUSxBQUNOO2NBSEYsQUFHTyxBQUNMO3FCQUpGLEFBSWMsQUFDWjtlQUxGLEFBS1MsQUFDUDtjQU5GLEFBTU8sQUFDTDtrQkFBVSxNQVBaLEFBT2lCLEFBQ2Y7a0JBUkY7O29CQUFBO3NCQURGLEFBQ0UsQUFVQTtBQVZBO0FBQ0Usd0NBU0YsQUFBQzs7b0JBQUQ7c0JBWkosQUFDRSxBQVdFLEFBR0w7QUFISztBQUFBO0FBckRhOztVQUFBLEFBMERuQixvQkFBb0IsVUFBQSxBQUFDLFNBQUQ7VUFBQSxBQUFNLGFBQU4sQUFBTTthQUN4QixNQUFBLEFBQUssU0FBUyxFQUFFLGlCQURFLEFBQ2xCLEFBQWMsQUFBbUI7QUEzRGhCOztVQUFBLEFBNERuQixvQkFBb0IsVUFBQSxBQUFDLFVBQUQ7VUFBQSxBQUFNLGNBQU4sQUFBTTthQUFZLE1BQUEsQUFBSyxTQUFTLEVBQUUsT0FBbEMsQUFBa0IsQUFBYyxBQUFTO0FBNUQxQzs7VUFBQSxBQThEbkIsZUFBZSxVQUFBLEFBQUMsVUFBdUI7VUFBbEIsQUFBa0IsYUFBbEIsQUFBa0I7VUFBWixBQUFZLGNBQVosQUFBWSxBQUNyQzs7WUFBQSxBQUFLLDJDQUFMLEFBQWlCLE1BQWpCLEFBQXdCLEFBQ3pCO0FBaEVrQjs7VUFBQSxBQWtFbkIsZUFBZSxpQkFBUyxBQUN0QjtZQURzQixBQUN0QixBQUFNO3dCQVdGLE1BWmtCLEFBWWI7VUFaYSxBQUdwQixzQkFIb0IsQUFHcEI7VUFIb0IsQUFJcEIsb0JBSm9CLEFBSXBCO1VBSm9CLEFBS3BCLHdCQUxvQixBQUtwQjtVQUxvQixBQU1wQix1QkFOb0IsQUFNcEI7VUFOb0IsQUFPcEIsNEJBUG9CLEFBT3BCO1VBUG9CLEFBUXBCLG9DQVJvQixBQVFwQjtVQVJvQixBQVNwQixnQ0FUb0IsQUFTcEI7VUFUb0IsQUFVcEIsZ0NBVm9CLEFBVXBCO1VBVm9CLEFBV3BCLDhCQVhvQixBQVdwQixBQUdGOztVQUNFLFlBQUEsQUFBWSxNQUNaLFVBREEsQUFDVSxNQUNWLGNBRkEsQUFFYyxNQUNkLGFBSEEsQUFHYSxNQUNiLGtCQUpBLEFBSWtCLE1BQ2xCLDBCQUxBLEFBSzBCLE1BQzFCLHNCQU5BLEFBTXNCLE1BQ3RCLHNCQVJGLEFBUXdCLElBQ3RCLEFBQ0E7WUFBTTtpQkFBaUIsQUFFckI7cUJBRnFCLEFBR3JCO29CQUhxQixBQUlyQjtzQkFKcUIsQUFJVCxBQUNaO3FCQUxxQixBQUtWLEFBQ1g7cUJBTnFCLEFBTVYsQUFDWDt5QkFQcUIsQUFRckI7aUNBUnFCLEFBU3JCOzZCQVRxQixBQVVyQjs2QkFWRixBQUF1QixBQWF2QjtBQWJ1QixBQUNyQjs7Y0FZRixBQUFLLFNBQUwsQUFBYyxBQUNmO0FBeEJELGFBd0JPLEFBQ0w7Y0FBQSxBQUFLLFNBQVMsRUFBRSxPQUFGLEFBQVMsTUFBTSxVQUE3QixBQUFjLEFBQXlCLEFBQ3hDO0FBQ0Y7QUEzR2tCOztVQUFBLEFBNkduQix1QkE3R21COzJGQTZHUixpQkFBQSxBQUFNLGNBQU47WUFBQTtzRUFBQTtvQkFBQTs2Q0FBQTttQkFBQTtnQ0FBQTs7MEJBQ2dFLEFBQy9ELEFBQ1I7OzRCQUFTLEFBQ0MsQUFDUjtvQ0FKcUUsQUFFOUQsQUFFUyxBQUVsQjtBQUpTLEFBQ1A7d0JBR0ksb0RBTmlFLEFBTWpFLEFBQ0QsQUFFTDsrQkFUZ0IsQUFBdUQsQUFTMUQ7QUFUMEQsQUFDdkUsaUJBRGdCLEVBQUEsQUFXZixLQUFLLG9CQUFZLEFBQ2hCO3NCQUFJLFNBQUEsQUFBUyxVQUFiLEFBQXVCLEtBQUssQUFDMUI7MEJBQU0sSUFBQSxBQUFJLE1BQVYsQUFBTSxBQUFVLEFBQ2pCO0FBQ0Q7c0JBQUksU0FBQSxBQUFTLFdBQWIsQUFBd0IsS0FBSyxBQUMzQjs7OEJBQUEsQUFBTyxBQUNHLEFBRVg7QUFIUSxBQUNMO0FBR0o7eUJBQU8sU0FBUCxBQUFPLEFBQVMsQUFDakI7QUFyQmUsbUJBQUEsQUFzQmYsS0FBSyxnQkFBUSxBQUNaO3NCQUFJLEtBQUEsQUFBSyxXQUFULEFBQW9CLE1BQU0sQUFDeEI7d0JBQU07MkJBQ0osQUFDTyxBQUNMOzZCQUZGLEFBRVMsQUFDUDtpQ0FIRixBQUdhLEFBQ1g7bUNBTFUsQUFDWixBQUllO0FBSmYsQUFDRSxxQkFGVTsyQkFPWixBQUNPLEFBQ0w7OEJBRkYsQUFFVSxBQUNSO2lDQUhGLEFBR2EsQUFDWDs2QkFKRixBQUlTLEFBQ1A7bUNBWkosQUFBYyxBQU9aLEFBS2UsQUFHakI7QUFSRSxBQUNFOzBCQU9KLEFBQUssU0FBUyxFQUFFLFFBQUYsQUFBVSxNQUFNLE9BQTlCLEFBQWMsQUFDZjtBQWpCRCx5QkFpQk8sSUFBSSxLQUFBLEFBQUssV0FBVCxBQUFvQixRQUFRLEFBQ2pDO0FBQ0E7QUFDQTswQkFBQSxBQUFLOzZCQUFTLEFBQ0wsQUFDUDtnQ0FGRixBQUFjLEFBRUYsQUFFYjtBQUplLEFBQ1o7QUFJTDtBQWpETSxBQUNTOzttQkFBWjtBQURHLCtCQW1EVDs7c0JBQUEsQUFBSyxTQUFTLEVBQUUsU0FuRFAsQUFtRFQsQUFBYyxBQUFXOzttQkFuRGhCO21CQUFBO2dDQUFBOztBQUFBO29CQUFBO0FBN0dROzsyQkFBQTtpQ0FBQTtBQUFBO0FBRWpCOztVQUFBLEFBQUs7YUFBUSxBQUVYO2FBRlcsQUFFSixBQUNQO2lCQUhXLEFBR0EsQUFDWDtnQkFKVyxBQUlELEFBQ1Y7cUJBTFcsQUFLSSxBQUNmOzZCQU5XLEFBTVksQUFDdkI7eUJBUFcsQUFPUSxBQUNuQjt5QkFSVyxBQVFRLEFBQ25CO3VCQVRXLEFBU00sQUFDakI7ZUFWVyxBQVVGLEFBQ1Q7YUFYVyxBQVdKLEFBQ1A7Z0JBWlcsQUFZRCxBQUNWO2NBYkYsQUFBYSxBQWFILEFBR1Y7QUFoQmEsQUFDWDs7VUFlRixBQUFLLGVBQWUsTUFBQSxBQUFLLGFBQUwsQUFBa0IsS0FBdEMsQUFDQTtVQUFBLEFBQUssZUFBZSxNQUFBLEFBQUssYUFBTCxBQUFrQixLQUF0QyxBQUNBO1VBQUEsQUFBSyxrQkFBa0IsTUFBQSxBQUFLLGdCQUFMLEFBQXFCLEtBcEIzQixBQW9CakI7V0FDRDs7Ozs7eUNBOElvQixBQUNuQjtXQUFBLEFBQUs7aUJBQ00sS0FBQSxBQUFLLE1BREYsQUFDUSxBQUNwQjtlQUFPLEtBQUEsQUFBSyxNQUZBLEFBRU0sQUFDbEI7bUJBQVcsS0FBQSxBQUFLLE1BSEosQUFHVSxBQUN0QjtrQkFBVSxLQUFBLEFBQUssTUFKSCxBQUlTLEFBQ3JCO3VCQUFlLEtBQUEsQUFBSyxNQUxSLEFBS2MsQUFDMUI7K0JBQXVCLEtBQUEsQUFBSyxNQU5oQixBQU1zQixBQUNsQzsyQkFBbUIsS0FBQSxBQUFLLE1BUFosQUFPa0IsQUFDOUI7MkJBQW1CLEtBQUEsQUFBSyxNQVJaLEFBUWtCLEFBQzlCO3lCQUFpQixLQUFBLEFBQUssTUFUeEIsQUFBYyxBQVNnQixBQUUvQjtBQVhlLEFBQ1o7Ozs7d0NBWWdCLEFBQ2xCO1VBQ0UsS0FBQSxBQUFLLE1BQUwsQUFBVyxZQUFYLEFBQXVCLE1BQ3ZCLE9BQU8sS0FBQSxBQUFLLE1BQVosQUFBa0IsWUFGcEIsQUFFZ0MsYUFDOUIsQUFDQTt3QkFBQSxBQUFPLEtBQVAsQUFBWSxBQUNiO0FBRUQ7O1VBQUksSUFBSixBQUFRLEFBQ1I7dUJBQUEsQUFBVyxRQUFYLEFBQW1CLElBQUkscUJBQWEsQUFDbEM7a0JBQUEsQUFBVSxHQUFWLEFBQWEsSUFBSSxxQkFBYSxBQUM1QjtvQkFBQSxBQUFVLEdBQVYsQUFBYSxJQUFJLHdCQUFnQixBQUMvQjt5QkFBQSxBQUFhLEdBQWIsQUFBZ0IsSUFBSSxzQkFBYyxBQUNoQztzQkFBQSxBQUFRO29CQUFLLEFBQ1AsQUFDSjtzQkFDRSxhQUNBLEVBQUEsQUFBRSxZQURGLEFBQ0EsQUFBYyxTQURkLEFBRUEsU0FDQSxFQUFFLGFBSEYsQUFHQSxBQUFFLEFBQWEsTUFIZixBQUlBLFNBQ0EsRUFBRSxVQUxGLEFBS0EsQUFBRSxBQUFVLE1BTFosQUFNQSxTQUNBLEVBQUUsVUFWTixBQUFhLEFBVVQsQUFBRSxBQUFVLEFBRWhCO0FBWmEsQUFDWDtBQVlIO0FBZEQsQUFlRDtBQWhCRCxBQWlCRDtBQWxCRCxBQW1CRDtBQXBCRCxBQXFCRDs7Ozs2QkFFUTttQkFnQkgsS0FoQkcsQUFnQkU7VUFoQkYsQUFFTCxlQUZLLEFBRUw7VUFGSyxBQUdMLGlCQUhLLEFBR0w7VUFISyxBQUlMLGVBSkssQUFJTDtVQUpLLEFBS0wsbUJBTEssQUFLTDtVQUxLLEFBTUwsa0JBTkssQUFNTDtVQU5LLEFBT0wsdUJBUEssQUFPTDtVQVBLLEFBUUwsK0JBUkssQUFRTDtVQVJLLEFBU0wsMkJBVEssQUFTTDtVQVRLLEFBVUwsMkJBVkssQUFVTDtVQVZLLEFBV0wseUJBWEssQUFXTDtVQVhLLEFBWUwsaUJBWkssQUFZTDtVQVpLLEFBYUwsZUFiSyxBQWFMO1VBYkssQUFjTCxrQkFkSyxBQWNMO1VBZEssQUFlTCxnQkFmSyxBQWVMLEFBR0Y7OzZCQUNFLGNBQUE7ZUFDUyxFQUFFLFNBQUYsQUFBVyxRQUFRLFdBQW5CLEFBQThCLFNBQVMsZUFEaEQsQUFDUyxBQUFzRDs7b0JBRC9EO3NCQUFBLEFBR0U7QUFIRjtBQUNFLE9BREYsa0JBR0UsY0FBQSxTQUFLLE9BQU8sRUFBRSxNQUFkLEFBQVksQUFBUTtvQkFBcEI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUM7O29CQUFEO3NCQUFBO0FBQUE7QUFBQTtpQkFBQTthQUFBLEFBWUU7QUFaRiwwQkFZRSxBQUFDLDRDQUFVLE1BQVg7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3VDQUNFLEFBQUMsc0JBQUQsQUFBTSxTQUFNLFNBQVosTUFBb0IsT0FBcEIsQUFBMkI7b0JBQTNCO3NCQWROLEFBQ0UsQUFZRSxBQUNFLEFBR0o7QUFISTs0QkFHSixBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLDRDQUFVLE1BQVg7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsdUNBQUssU0FBTixBQUFjO29CQUFkO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMseUNBQU8sSUFBUixBQUFXO29CQUFYO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHdCQUFBLEFBQVE7O29CQUFSO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFHQyxtTEFOUCxBQUNFLEFBQ0UsQUFPRiwyQkFBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxXQUFiLEFBQXVCLFNBQVEsZUFBL0IsQUFBNkM7b0JBQTdDO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHlDQUFPLElBQVIsQUFBVyxNQUFLLE1BQWhCO29CQUFBO3NCQUFBO0FBQUE7U0FYTixBQUNFLEFBU0UsQUFDRSxBQUtKLHlDQUFBLEFBQUMsMENBQVEsU0FBVDtvQkFBQTtzQkFoQkYsQUFnQkUsQUFDQztBQUREO21DQUVFLEFBQUMseUNBQU8sSUFBUixBQUFXLE1BQUssTUFBaEIsTUFBcUIsV0FBckIsQUFBK0I7b0JBQS9CO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLEFBQUMsdUNBQUssTUFBTixBQUFXLFNBQVEsVUFBbkIsTUFBNEIsT0FBNUIsQUFBa0M7b0JBQWxDO3NCQURGLEFBQ0UsQUFDQTtBQURBOzBCQUNBLEFBQUMseUNBQU8sSUFBUixBQUFXO29CQUFYO3NCQUFBO0FBQUE7U0FGRixBQUVFLEFBQ0EsMkVBQUMsY0FBRCx3QkFBQSxBQUFRLFdBQVEsT0FBaEIsQUFBc0I7b0JBQXRCO3NCQUFBO0FBQUE7U0FIRixBQUdFLEFBQ0EsNkZBQUMsY0FBRCx3QkFBQSxBQUFROztvQkFBUjtzQkFBQTtBQUFBO0FBQUEsU0FDb0Q7O29CQUFBO3NCQURwRCxBQUNvRDtBQUFBO0FBQUEsVUFBd0M7O29CQUFBO3NCQUQ1RixBQUM0RjtBQUFBO0FBQUEsVUFOL0YsQUFDQyxBQUlFLDBFQU1GLEFBQUM7a0JBQ1csS0FEWixBQUNpQixBQUNmO2lCQUZGLEFBRVcsQUFDVDtlQUhGLEFBR1M7O29CQUhUO3NCQUFBLEFBS0U7QUFMRjtBQUNFLE9BREYsa0JBS0csY0FBRCxzQkFBQSxBQUFNLFNBQU0sUUFBWixBQUFtQjtvQkFBbkI7c0JBQUEsQUFDRTtBQURGO3VDQUNFLEFBQUMsc0JBQUQsQUFBTTtBQUFOLEFBQ1csQUFDVDtlQUZGLEFBRVEsQUFDTjtpQkFIRixBQUdXLEFBQ1Q7cUJBSkYsQUFJYyxBQUNaO2VBTEYsQUFLUyxBQUNQO2tCQUFVLEtBTlosQUFNaUIsQUFDZjtrQkFQRjs7b0JBQUE7c0JBREYsQUFDRSxBQVNBO0FBVEE7QUFDRSx3Q0FRRixBQUFDLHNCQUFELEFBQU07ZUFBTixBQUNRLEFBQ047cUJBRkYsQUFFYyxBQUNaO2NBSEYsQUFHTyxBQUNMO2VBSkYsQUFJUyxBQUNQO2tCQUFVLEtBTFosQUFLaUIsQUFDZjtrQkFORjs7b0JBQUE7c0JBVkYsQUFVRSxBQVFBO0FBUkE7QUFDRSx3Q0FPRixBQUFDLHNCQUFELEFBQU07ZUFBTixBQUNRLEFBQ047cUJBRkYsQUFFYyxBQUNaO2NBSEYsQUFHTyxBQUNMO2VBSkYsQUFJUyxBQUNQO2tCQUFVLEtBTFosQUFLaUIsQUFDZjtrQkFORjs7b0JBQUE7c0JBdkJKLEFBS0UsQUFrQkUsQUFVRDtBQVZDO0FBQ0UsZ0JBeEJOLEFBaUNHLEFBQUssQUFFTixtQ0FBQyxjQUFELHNCQUFBLEFBQU0sU0FBTSxRQUFaLEFBQW1CO29CQUFuQjtzQkFBQSxBQUNFO0FBREY7dUNBQ0UsQUFBQyxzQkFBRCxBQUFNO2VBQU4sQUFDUSxBQUNOO2VBRkYsQUFFUyxBQUNQO2NBSEYsQUFHTyxBQUNMO2tCQUFVLEtBSlosQUFJaUIsQUFDZjtrQkFMRjs7b0JBQUE7c0JBREYsQUFDRSxBQU9BO0FBUEE7QUFDRSx3Q0FNRixBQUFDLHNCQUFELEFBQU07ZUFBTixBQUNRLEFBQ047ZUFGRixBQUVTLEFBQ1A7Y0FIRixBQUdPLEFBQ0w7a0JBQVUsS0FKWixBQUlpQixBQUNmO2tCQUxGOztvQkFBQTtzQkFSRixBQVFFLEFBT0E7QUFQQTtBQUNFLHdDQU1GLEFBQUMsc0JBQUQsQUFBTTtlQUFOLEFBQ1EsQUFDTjtlQUZGLEFBRVMsQUFDUDtjQUhGLEFBR08sQUFDTDtrQkFBVSxLQUpaLEFBSWlCLEFBQ2Y7a0JBTEY7O29CQUFBO3NCQWxESixBQW1DRSxBQWVFLEFBUUY7QUFSRTtBQUNFLDJCQU9ILGNBQUQsc0JBQUEsQUFBTSxTQUFNLFFBQVo7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxxSkFBQSxBQUFDLHNCQUFELEFBQU07QUFBTixBQUNXLEFBQ1Q7ZUFGRixBQUVRLEFBQ047ZUFIRixBQUdRLEFBQ047aUJBQVMsb0JBSlgsQUFJK0IsQUFDN0I7a0JBQVUsS0FMWixBQUtpQjs7b0JBTGpCO3NCQUZGLEFBRUUsQUFPQTtBQVBBO0FBQ0Usd0NBTUYsQUFBQyxzQkFBRCxBQUFNO0FBQU4sQUFDVyxBQUNUO2VBRkYsQUFFUSxBQUNOO2VBSEYsQUFHUSxBQUNOO2lCQUFTLG9CQUpYLEFBSStCLEFBQzdCO2tCQUFVLEtBTFosQUFLaUI7O29CQUxqQjtzQkFURixBQVNFLEFBT0E7QUFQQTtBQUNFLHdDQU1GLEFBQUMsc0JBQUQsQUFBTTtBQUFOLEFBQ1csQUFDVDtlQUZGLEFBRVEsQUFDTjtlQUhGLEFBR1EsQUFDTjtpQkFBUyxvQkFKWCxBQUkrQixBQUM3QjtrQkFBVSxLQUxaLEFBS2lCOztvQkFMakI7c0JBMUVKLEFBMERFLEFBZ0JFLEFBUUY7QUFSRTtBQUNFLHlDQU9KLEFBQUMsc0JBQUQsQUFBTTtBQUFOLEFBQ1csQUFDVDtlQUZGLEFBRVEsQUFDTjtrQkFIRjs7b0JBQUE7c0JBbEZGLEFBa0ZFLEFBTUE7QUFOQTtBQUNFLDBCQUtGLEFBQUMsMENBQVEsT0FBVCxNQUFlLFNBQWYsQUFBd0I7b0JBQXhCO3NCQXhGRixBQXdGRSxBQUVBO0FBRkE7MEJBRUEsQUFBQyx5Q0FBTyxVQUFSLE1BQWlCLFNBQWpCLEFBQXlCLFNBQVEsTUFBakMsQUFBc0MsT0FBTSxNQUE1QyxBQUFpRDtvQkFBakQ7c0JBQUE7QUFBQTtTQTFGRixBQTBGRSxBQUdBLG1EQUFBLEFBQUMsMENBQVEsUUFBVDtvQkFBQTtzQkE3RkYsQUE2RkUsQUFDQTtBQURBOzBCQUNBLEFBQUMsMENBQVEsUUFBVDtvQkFBQTtzQkE5RkYsQUE4RkUsQUFDQTtBQURBOzBCQUNBLEFBQUMsMENBQVEsUUFBVDtvQkFBQTtzQkFoSlosQUFHRSxBQWlCRSxBQUNFLEFBNEJJLEFBK0ZFLEFBTVY7QUFOVTs4QkFNVixBQUFDLDRDQUFVLE1BQVgsTUFBZ0IsV0FBaEIsQUFBMEI7b0JBQTFCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FDWSw4QkFBQSxBQUFDLHVDQUFLLE9BQU4sQUFBWSxPQUFNLE1BQWxCLEFBQXVCO29CQUF2QjtzQkFEWixBQUNZO0FBQUE7VUFBcUMsT0FEakQsQUFFRSxxQkFBQSxjQUFBLE9BQUcsTUFBSCxBQUFRO29CQUFSO3NCQUFBO0FBQUE7U0ExSlIsQUFDRSxBQXNKRSxBQUNFLEFBRUUsQUFLVDs7Ozs7QUFuWXdCLEEsQUFzWTNCOztrQkFBQSxBQUFlIiwiZmlsZSI6InJlZ2lzdGVyRm9ybS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGFuZ3BvbmQvU2l0ZXMvTmV4dGdlbnNvZnQvZXhhbSJ9