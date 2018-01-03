"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

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

var _semanticUiReact = require("semantic-ui-react");

var _isomorphicUnfetch = require("isomorphic-unfetch");

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _index = require("next/dist/lib/router/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/pangpond/Sites/Nextgensoft/exam/components/identityForm.js";


var IdentityForm = function (_Component) {
  (0, _inherits3.default)(IdentityForm, _Component);

  function IdentityForm() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, IdentityForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = IdentityForm.__proto__ || (0, _getPrototypeOf2.default)(IdentityForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      school: "โรงเรียนกาญจนาภิเษกวิทยาลัย สุราษฎร์ธานี",
      citizen: "",
      submittedSchool: "โรงเรียนกาญจนาภิเษกวิทยาลัย สุราษฎร์ธานี",
      submittedCitizen: "",
      loading: false,
      error: false
    }, _this.handleChange = function (e, _ref2) {
      var name = _ref2.name,
          value = _ref2.value;

      if (!isNaN(value) && value.length <= 13) {
        _this.setState((0, _defineProperty3.default)({}, name, value));
      }

      if (name === "citizen" && value.length === 13) {
        _this.setState({ error: false });
      }
    }, _this.handleSubmit = function () {
      var _this$state = _this.state,
          school = _this$state.school,
          citizen = _this$state.citizen;

      if (!isNaN(citizen) && citizen.length === 13) {
        _this.setState({
          submittedSchool: school,
          submittedCitizen: citizen,
          loading: true
        });
        console.log(_this.state);
        _this.checkCitizen();
      } else {
        _this.setState({ error: true });
      }
    }, _this.checkCitizen = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(variables) {
        var res, json;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _isomorphicUnfetch2.default)("https://api.github.com/repos/zeit/next.js");

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json().then(_index2.default.push("/register"));

              case 5:
                json = _context.sent;

                console.log(json);
                _this.setState({ loading: false });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(IdentityForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // this.socket = io()
      // this.socket.on('message', this.handleMessage)
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // this.socket.off('message', this.handleMessage)
      // this.socket.close()
    }
  }, {
    key: "render",

    // handleChange = event => {
    //   this.setState({ field: event.target.value })
    // }

    // handleSubmit = event => {
    //   event.preventDefault()

    //   // add it to state and clean current input value
    //   this.setState(state => ({
    //     field: '',
    //   }))
    // }
    // {/*
    //         <Form.Field name='school' value={school} onChange={this.handleChange} required>
    //           <label>โรงเรียน</label>
    //           <SelectSchool />
    //         </Form.Field>
    //       */}

    value: function render() {
      var _state = this.state,
          school = _state.school,
          citizen = _state.citizen,
          submittedSchool = _state.submittedSchool,
          submittedCitizen = _state.submittedCitizen,
          loading = _state.loading,
          error = _state.error;

      return _react2.default.createElement("div", { id: "login-hidden", className: "jsx-1443986054",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: "216617096",
        css: "body{background:#f1f1f1;}.bgMain{background-color:#ee4616 !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaWRlbnRpdHlGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdHVyxBQUdrQyxBQUdpQixtQkFGdEMsaUJBR0EiLCJmaWxlIjoiY29tcG9uZW50cy9pZGVudGl0eUZvcm0uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3Bhbmdwb25kL1NpdGVzL05leHRnZW5zb2Z0L2V4YW0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIFNlbGVjdCxcbiAgQnV0dG9uLFxuICBGb3JtLFxuICBHcmlkLFxuICBIZWFkZXIsXG4gIEltYWdlLFxuICBNZXNzYWdlLFxuICBTZWdtZW50LFxuICBJY29uXG59IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNsYXNzIElkZW50aXR5Rm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbWVzc2FnZXM6IFtdXG4gIH07XG5cbiAgc3RhdGUgPSB7XG4gICAgc2Nob29sOiBcIuC5guC4o+C4h+C5gOC4o+C4teC4ouC4meC4geC4suC4jeC4iOC4meC4suC4oOC4tOC5gOC4qeC4geC4p+C4tOC4l+C4ouC4suC4peC4seC4oiDguKrguLjguKPguLLguKnguI7guKPguYzguJjguLLguJnguLVcIixcbiAgICBjaXRpemVuOiBcIlwiLFxuICAgIHN1Ym1pdHRlZFNjaG9vbDogXCLguYLguKPguIfguYDguKPguLXguKLguJnguIHguLLguI3guIjguJnguLLguKDguLTguYDguKnguIHguKfguLTguJfguKLguLLguKXguLHguKIg4Liq4Li44Lij4Liy4Lip4LiO4Lij4LmM4LiY4Liy4LiZ4Li1XCIsXG4gICAgc3VibWl0dGVkQ2l0aXplbjogXCJcIixcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBlcnJvcjogZmFsc2VcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyB0aGlzLnNvY2tldCA9IGlvKClcbiAgICAvLyB0aGlzLnNvY2tldC5vbignbWVzc2FnZScsIHRoaXMuaGFuZGxlTWVzc2FnZSlcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIC8vIHRoaXMuc29ja2V0Lm9mZignbWVzc2FnZScsIHRoaXMuaGFuZGxlTWVzc2FnZSlcbiAgICAvLyB0aGlzLnNvY2tldC5jbG9zZSgpXG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAoZSwgeyBuYW1lLCB2YWx1ZSB9KSA9PiB7XG4gICAgaWYgKCFpc05hTih2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoIDw9IDEzKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgW25hbWVdOiB2YWx1ZSB9KTtcbiAgICB9XG5cbiAgICBpZiAobmFtZSA9PT0gXCJjaXRpemVuXCIgJiYgdmFsdWUubGVuZ3RoID09PSAxMykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiBmYWxzZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgc2Nob29sLCBjaXRpemVuIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKCFpc05hTihjaXRpemVuKSAmJiBjaXRpemVuLmxlbmd0aCA9PT0gMTMpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzdWJtaXR0ZWRTY2hvb2w6IHNjaG9vbCxcbiAgICAgICAgc3VibWl0dGVkQ2l0aXplbjogY2l0aXplbixcbiAgICAgICAgbG9hZGluZzogdHJ1ZVxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgICAgIHRoaXMuY2hlY2tDaXRpemVuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogdHJ1ZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgY2hlY2tDaXRpemVuID0gYXN5bmMgdmFyaWFibGVzID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvemVpdC9uZXh0LmpzXCIpO1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpLnRoZW4oUm91dGVyLnB1c2goXCIvcmVnaXN0ZXJcIikpO1xuICAgIGNvbnNvbGUubG9nKGpzb24pO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgfTtcblxuICAvLyBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7IGZpZWxkOiBldmVudC50YXJnZXQudmFsdWUgfSlcbiAgLy8gfVxuXG4gIC8vIGhhbmRsZVN1Ym1pdCA9IGV2ZW50ID0+IHtcbiAgLy8gICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gICAvLyBhZGQgaXQgdG8gc3RhdGUgYW5kIGNsZWFuIGN1cnJlbnQgaW5wdXQgdmFsdWVcbiAgLy8gICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XG4gIC8vICAgICBmaWVsZDogJycsXG4gIC8vICAgfSkpXG4gIC8vIH1cbiAgLy8gey8qXG4gIC8vICAgICAgICAgPEZvcm0uRmllbGQgbmFtZT0nc2Nob29sJyB2YWx1ZT17c2Nob29sfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHJlcXVpcmVkPlxuICAvLyAgICAgICAgICAgPGxhYmVsPuC5guC4o+C4h+C5gOC4o+C4teC4ouC4mTwvbGFiZWw+XG4gIC8vICAgICAgICAgICA8U2VsZWN0U2Nob29sIC8+XG4gIC8vICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAvLyAgICAgICAqL31cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgc2Nob29sLFxuICAgICAgY2l0aXplbixcbiAgICAgIHN1Ym1pdHRlZFNjaG9vbCxcbiAgICAgIHN1Ym1pdHRlZENpdGl6ZW4sXG4gICAgICBsb2FkaW5nLFxuICAgICAgZXJyb3JcbiAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwibG9naW4taGlkZGVuXCI+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5iZ01haW4ge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWU0NjE2ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZm9ybSB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG8gMTAwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9ybSAudGh1bWJuYWlsIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2VlNDYxNjtcbiAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0byAzMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1MHB4IDMwcHg7XG4gICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMDAlO1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMDAlO1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcm0gLnRodW1ibmFpbCBpbWcge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9ybSBpbnB1dCB7XG4gICAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAwIDE1cHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtIGJ1dHRvbiB7XG4gICAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZTQ2MTY7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjMgZWFzZTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMyBlYXNlO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcm0gYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9ybSAubWVzc2FnZSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMTVweCAwIDA7XG4gICAgICAgICAgICAgIGNvbG9yOiAjYjNiM2IzO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9ybSAubWVzc2FnZSBhIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNlZTQ2MTY7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtIC5yZWdpc3Rlci1mb3JtIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRhaW5lcjpiZWZvcmUsXG4gICAgICAgICAgICAuY29udGFpbmVyOmFmdGVyIHtcbiAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRhaW5lciAuaW5mbyB7XG4gICAgICAgICAgICAgIG1hcmdpbjogNTBweCBhdXRvO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGFpbmVyIC5pbmZvIGgxIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTVweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICBjb2xvcjogIzFhMWExYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWluZXIgLmluZm8gc3BhbiB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNGQ0ZDRkO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGFpbmVyIC5pbmZvIHNwYW4gYSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGFpbmVyIC5pbmZvIHNwYW4gLmZhIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNlZTQ2MTY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2NjYztcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm9keTpiZWZvcmUge1xuICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oZWxwLWJsb2NrIHtcbiAgICAgICAgICAgICAgY29sb3I6ICM3MzczNzM7XG4gICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZWxlY3QyLWNvbnRhaW5lci0ta3JhamVlXG4gICAgICAgICAgICAgIC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlXG4gICAgICAgICAgICAgIC5zZWxlY3QyLXNlbGVjdGlvbl9fcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2VsZWN0Mi1jb250YWluZXItLWtyYWplZSAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSB7XG4gICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNlbGVjdDItY29udGFpbmVyLS1rcmFqZWVcbiAgICAgICAgICAgICAgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGVcbiAgICAgICAgICAgICAgLnNlbGVjdDItc2VsZWN0aW9uX19hcnJvdyB7XG4gICAgICAgICAgICAgIGhlaWdodDogMzhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZy1pbi13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxuICAgICAgICAgICAgICA8aDE+S0pTVCBQcmUtdGVzdCAyMDE4PC9oMT5cbiAgICAgICAgICAgICAgPGgyPuC5guC4o+C4h+C5gOC4o+C4teC4ouC4meC4geC4suC4jeC4iOC4meC4suC4oOC4tOC5gOC4qeC4geC4p+C4tOC4l+C4ouC4suC4peC4seC4oiDguKrguLjguKPguLLguKnguI7guKPguYzguJjguLLguJnguLU8L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRodW1ibmFpbFwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE2OTk2My9oYXQuc3ZnXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEZvcm1cbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgICBlcnJvcj17ZXJyb3J9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxGb3JtLklucHV0XG4gICAgICAgICAgICAgICAgZmx1aWRcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4q+C4oeC4suC4ouC5gOC4peC4guC4muC4seC4leC4o+C4m+C4o+C4sOC4iuC4suC4iuC4mSAxMyDguKvguKXguLHguIFcIlxuICAgICAgICAgICAgICAgIGljb249XCJpZCBjYXJkXCJcbiAgICAgICAgICAgICAgICBzaXplPVwiYmlnXCJcbiAgICAgICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY2l0aXplblwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NpdGl6ZW59XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGNvbG9yPVwib3JhbmdlXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZ01haW5cIlxuICAgICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgICAgc2l6ZT1cImJpZ1wiXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICDguYDguKPguLTguYjguKHguKrguKHguLHguITguKNcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxNZXNzYWdlXG4gICAgICAgICAgICAgICAgZXJyb3JcbiAgICAgICAgICAgICAgICBjb250ZW50PVwi4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4Lir4Lih4Liy4Lii4LmA4Lil4LiC4Lia4Lix4LiV4Lij4Lib4Lij4Liw4LiK4Liy4LiK4LiZ4LmD4Lir4LmJ4LiE4Lij4LiaIDEzIOC4q+C4peC4seC4gVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxuICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICBNYWRlIHdpdGggPEljb24gY29sb3I9XCJyZWRcIiBuYW1lPVwiaGVhcnRcIiAvPiBieXtcIiBcIn1cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5uZXh0c2Nob29sLmlvXCI+IE5leHRTY2hvb2w8L2E+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSWRlbnRpdHlGb3JtO1xuIl19 */\n/*@ sourceURL=components/identityForm.js */"
      }), _react2.default.createElement(_style2.default, {
        styleId: "3245041479",
        css: "body.jsx-1443986054{content:\"\";position:fixed;top:0;left:0;display:block;background:rgba(255,255,255,0.8);width:100%;height:100%;}.form.jsx-1443986054{position:relative;z-index:1;background:#ffffff;max-width:400px;margin:0 auto 100px;padding:30px;border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-left-radius:3px;border-bottom-right-radius:3px;text-align:center;}.form.jsx-1443986054 .thumbnail.jsx-1443986054{background:#ee4616;width:150px;height:150px;margin:0 auto 30px;padding:50px 30px;border-top-left-radius:100%;border-top-right-radius:100%;border-bottom-left-radius:100%;border-bottom-right-radius:100%;-webkit-box-sizing:border-box;box-sizing:border-box;}.form.jsx-1443986054 .thumbnail.jsx-1443986054 img.jsx-1443986054{display:block;width:100%;}.form.jsx-1443986054 input.jsx-1443986054{outline:0;background:#f2f2f2;width:100%;border:0;margin:0 0 15px;padding:15px;border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-left-radius:3px;border-bottom-right-radius:3px;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:20px;}.form.jsx-1443986054 button.jsx-1443986054{outline:0;background:#ee4616;width:100%;border:0;padding:15px;border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-left-radius:3px;border-bottom-right-radius:3px;color:#ffffff;font-size:20px;-webkit-transition:all 0.3 ease;-webkit-transition:all 0.3 ease;transition:all 0.3 ease;cursor:pointer;font-weight:bold;}.form.jsx-1443986054 button.jsx-1443986054:hover{color:#333333;}.form.jsx-1443986054 .message.jsx-1443986054{margin:15px 0 0;color:#b3b3b3;font-size:12px;}.form.jsx-1443986054 .message.jsx-1443986054 a.jsx-1443986054{color:#ee4616;text-decoration:none;}.form.jsx-1443986054 .register-form.jsx-1443986054{display:none;}.container.jsx-1443986054{position:relative;z-index:1;max-width:400px;margin:0 auto;}.container.jsx-1443986054:before,.container.jsx-1443986054:after{content:\"\";display:block;clear:both;}.container.jsx-1443986054 .info.jsx-1443986054{margin:50px auto;text-align:center;}.container.jsx-1443986054 .info.jsx-1443986054 h1.jsx-1443986054{margin:0 0 15px;padding:0;font-size:36px;font-weight:300;color:#1a1a1a;}.container.jsx-1443986054 .info.jsx-1443986054 span.jsx-1443986054{color:#4d4d4d;font-size:12px;}.container.jsx-1443986054 .info.jsx-1443986054 span.jsx-1443986054 a.jsx-1443986054{color:#000000;text-decoration:none;}.container.jsx-1443986054 .info.jsx-1443986054 span.jsx-1443986054 .fa.jsx-1443986054{color:#ee4616;}body.jsx-1443986054{background:#ccc;font-family:\"Roboto\",sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}body.jsx-1443986054:before{content:\"\";position:fixed;top:0;left:0;display:block;background:rgba(255,255,255,0.8);width:100%;height:100%;}.help-block.jsx-1443986054{color:#737373;float:right;}.select2-container--krajee.jsx-1443986054 .select2-selection--single.jsx-1443986054 .select2-selection__placeholder.jsx-1443986054{font-size:20px;float:left;}.select2-container--krajee.jsx-1443986054 .select2-selection--single.jsx-1443986054{height:40px;}.select2-container--krajee.jsx-1443986054 .select2-selection--single.jsx-1443986054 .select2-selection__arrow.jsx-1443986054{height:38px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaWRlbnRpdHlGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtIVyxBQUcwQixBQVdPLEFBYUMsQUFhTCxBQUlKLEFBZUEsQUFpQkksQUFHRSxBQUtGLEFBSUQsQUFHSyxBQU9QLEFBS00sQUFJRCxBQU9GLEFBSUEsQUFJQSxBQUdFLEFBTUwsQUFVRyxBQU1DLEFBS0gsQUFNQSxVQWpITyxBQWVBLENBeERKLEFBK0ZELEFBaUNDLENBcUJqQixBQU1BLENBdEVBLENBaERhLEFBb0NiLEFBUXVCLEFBOEJOLEFBSU0sQUFJdkIsQUFtQmMsQ0FNRCxDQXBFRyxBQTRCSixBQWtCdUIsQ0F0QmYsQ0F6RlIsQUE2RUEsQ0FoRUUsTUFjZCxBQTBEYSxDQS9GTCxBQXdHUyxBQXdCVCxBQVVSLEFBTUEsRUFySXFCLEFBNkVILENBL0NMLEFBZUEsQUF1RGIsQ0FuQ2lCLENBcERGLENBdkJOLEFBZ0lBLEdBaERULEFBbUJBLEFBZUEsQ0FuQkEsR0E5RmdCLEFBZ0lBLENBeEZMLEFBZUEsQ0FnRE8sR0FoRkcsQUFnRUwsQ0FaaEIsRUFqRWtCLENBOEdtQixDQS9FbkIsQUFlSCxJQXZEdUIsQUFnSUEsSUF6QnRCLENBaEJoQixJQS9CNkIsQ0E5Q1AsQUFhRixFQWtCTCxNQStEZixPQTlENkIsR0FsQkMsRUFiZixBQTZHcUIsR0F2SHZCLEFBZ0lBLEdBeEVpQixPQTdDRCxDQVZmLEFBZ0lBLFFBdkZnQixJQXhDOUIsQUFzQitCLEFBMEcvQixRQXpFZ0MsQUErRGhDLE1BNUc4QixVQStCRSxLQWxCQyxTQWlDQSxJQTdDRCxZQStCQyxNQWxCQyxTQWlDbEIsR0E3Q2lCLFdBOENoQixFQWZlLE9BbEJBLE1Ba0NFLEtBOUNkLFlBK0JJLE1BOUJ4QixDQVl3QixRQWtDRSxPQWZULE9BbEJqQixRQW1CQSxrQ0FlaUIsZUFDRSxpQkFDbkIiLCJmaWxlIjoiY29tcG9uZW50cy9pZGVudGl0eUZvcm0uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3Bhbmdwb25kL1NpdGVzL05leHRnZW5zb2Z0L2V4YW0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIFNlbGVjdCxcbiAgQnV0dG9uLFxuICBGb3JtLFxuICBHcmlkLFxuICBIZWFkZXIsXG4gIEltYWdlLFxuICBNZXNzYWdlLFxuICBTZWdtZW50LFxuICBJY29uXG59IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNsYXNzIElkZW50aXR5Rm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbWVzc2FnZXM6IFtdXG4gIH07XG5cbiAgc3RhdGUgPSB7XG4gICAgc2Nob29sOiBcIuC5guC4o+C4h+C5gOC4o+C4teC4ouC4meC4geC4suC4jeC4iOC4meC4suC4oOC4tOC5gOC4qeC4geC4p+C4tOC4l+C4ouC4suC4peC4seC4oiDguKrguLjguKPguLLguKnguI7guKPguYzguJjguLLguJnguLVcIixcbiAgICBjaXRpemVuOiBcIlwiLFxuICAgIHN1Ym1pdHRlZFNjaG9vbDogXCLguYLguKPguIfguYDguKPguLXguKLguJnguIHguLLguI3guIjguJnguLLguKDguLTguYDguKnguIHguKfguLTguJfguKLguLLguKXguLHguKIg4Liq4Li44Lij4Liy4Lip4LiO4Lij4LmM4LiY4Liy4LiZ4Li1XCIsXG4gICAgc3VibWl0dGVkQ2l0aXplbjogXCJcIixcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBlcnJvcjogZmFsc2VcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyB0aGlzLnNvY2tldCA9IGlvKClcbiAgICAvLyB0aGlzLnNvY2tldC5vbignbWVzc2FnZScsIHRoaXMuaGFuZGxlTWVzc2FnZSlcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIC8vIHRoaXMuc29ja2V0Lm9mZignbWVzc2FnZScsIHRoaXMuaGFuZGxlTWVzc2FnZSlcbiAgICAvLyB0aGlzLnNvY2tldC5jbG9zZSgpXG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAoZSwgeyBuYW1lLCB2YWx1ZSB9KSA9PiB7XG4gICAgaWYgKCFpc05hTih2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoIDw9IDEzKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgW25hbWVdOiB2YWx1ZSB9KTtcbiAgICB9XG5cbiAgICBpZiAobmFtZSA9PT0gXCJjaXRpemVuXCIgJiYgdmFsdWUubGVuZ3RoID09PSAxMykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiBmYWxzZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgc2Nob29sLCBjaXRpemVuIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKCFpc05hTihjaXRpemVuKSAmJiBjaXRpemVuLmxlbmd0aCA9PT0gMTMpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzdWJtaXR0ZWRTY2hvb2w6IHNjaG9vbCxcbiAgICAgICAgc3VibWl0dGVkQ2l0aXplbjogY2l0aXplbixcbiAgICAgICAgbG9hZGluZzogdHJ1ZVxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgICAgIHRoaXMuY2hlY2tDaXRpemVuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogdHJ1ZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgY2hlY2tDaXRpemVuID0gYXN5bmMgdmFyaWFibGVzID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvemVpdC9uZXh0LmpzXCIpO1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpLnRoZW4oUm91dGVyLnB1c2goXCIvcmVnaXN0ZXJcIikpO1xuICAgIGNvbnNvbGUubG9nKGpzb24pO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgfTtcblxuICAvLyBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7IGZpZWxkOiBldmVudC50YXJnZXQudmFsdWUgfSlcbiAgLy8gfVxuXG4gIC8vIGhhbmRsZVN1Ym1pdCA9IGV2ZW50ID0+IHtcbiAgLy8gICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gICAvLyBhZGQgaXQgdG8gc3RhdGUgYW5kIGNsZWFuIGN1cnJlbnQgaW5wdXQgdmFsdWVcbiAgLy8gICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XG4gIC8vICAgICBmaWVsZDogJycsXG4gIC8vICAgfSkpXG4gIC8vIH1cbiAgLy8gey8qXG4gIC8vICAgICAgICAgPEZvcm0uRmllbGQgbmFtZT0nc2Nob29sJyB2YWx1ZT17c2Nob29sfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHJlcXVpcmVkPlxuICAvLyAgICAgICAgICAgPGxhYmVsPuC5guC4o+C4h+C5gOC4o+C4teC4ouC4mTwvbGFiZWw+XG4gIC8vICAgICAgICAgICA8U2VsZWN0U2Nob29sIC8+XG4gIC8vICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAvLyAgICAgICAqL31cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgc2Nob29sLFxuICAgICAgY2l0aXplbixcbiAgICAgIHN1Ym1pdHRlZFNjaG9vbCxcbiAgICAgIHN1Ym1pdHRlZENpdGl6ZW4sXG4gICAgICBsb2FkaW5nLFxuICAgICAgZXJyb3JcbiAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwibG9naW4taGlkZGVuXCI+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5iZ01haW4ge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWU0NjE2ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZm9ybSB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG8gMTAwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9ybSAudGh1bWJuYWlsIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2VlNDYxNjtcbiAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0byAzMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1MHB4IDMwcHg7XG4gICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMDAlO1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMDAlO1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcm0gLnRodW1ibmFpbCBpbWcge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9ybSBpbnB1dCB7XG4gICAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAwIDE1cHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtIGJ1dHRvbiB7XG4gICAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZTQ2MTY7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjMgZWFzZTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMyBlYXNlO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcm0gYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9ybSAubWVzc2FnZSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMTVweCAwIDA7XG4gICAgICAgICAgICAgIGNvbG9yOiAjYjNiM2IzO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9ybSAubWVzc2FnZSBhIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNlZTQ2MTY7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtIC5yZWdpc3Rlci1mb3JtIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRhaW5lcjpiZWZvcmUsXG4gICAgICAgICAgICAuY29udGFpbmVyOmFmdGVyIHtcbiAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRhaW5lciAuaW5mbyB7XG4gICAgICAgICAgICAgIG1hcmdpbjogNTBweCBhdXRvO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGFpbmVyIC5pbmZvIGgxIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTVweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICBjb2xvcjogIzFhMWExYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWluZXIgLmluZm8gc3BhbiB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNGQ0ZDRkO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGFpbmVyIC5pbmZvIHNwYW4gYSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGFpbmVyIC5pbmZvIHNwYW4gLmZhIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNlZTQ2MTY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2NjYztcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm9keTpiZWZvcmUge1xuICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oZWxwLWJsb2NrIHtcbiAgICAgICAgICAgICAgY29sb3I6ICM3MzczNzM7XG4gICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZWxlY3QyLWNvbnRhaW5lci0ta3JhamVlXG4gICAgICAgICAgICAgIC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlXG4gICAgICAgICAgICAgIC5zZWxlY3QyLXNlbGVjdGlvbl9fcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2VsZWN0Mi1jb250YWluZXItLWtyYWplZSAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSB7XG4gICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNlbGVjdDItY29udGFpbmVyLS1rcmFqZWVcbiAgICAgICAgICAgICAgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGVcbiAgICAgICAgICAgICAgLnNlbGVjdDItc2VsZWN0aW9uX19hcnJvdyB7XG4gICAgICAgICAgICAgIGhlaWdodDogMzhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZy1pbi13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxuICAgICAgICAgICAgICA8aDE+S0pTVCBQcmUtdGVzdCAyMDE4PC9oMT5cbiAgICAgICAgICAgICAgPGgyPuC5guC4o+C4h+C5gOC4o+C4teC4ouC4meC4geC4suC4jeC4iOC4meC4suC4oOC4tOC5gOC4qeC4geC4p+C4tOC4l+C4ouC4suC4peC4seC4oiDguKrguLjguKPguLLguKnguI7guKPguYzguJjguLLguJnguLU8L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRodW1ibmFpbFwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE2OTk2My9oYXQuc3ZnXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEZvcm1cbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgICBlcnJvcj17ZXJyb3J9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxGb3JtLklucHV0XG4gICAgICAgICAgICAgICAgZmx1aWRcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4q+C4oeC4suC4ouC5gOC4peC4guC4muC4seC4leC4o+C4m+C4o+C4sOC4iuC4suC4iuC4mSAxMyDguKvguKXguLHguIFcIlxuICAgICAgICAgICAgICAgIGljb249XCJpZCBjYXJkXCJcbiAgICAgICAgICAgICAgICBzaXplPVwiYmlnXCJcbiAgICAgICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY2l0aXplblwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NpdGl6ZW59XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGNvbG9yPVwib3JhbmdlXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZ01haW5cIlxuICAgICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgICAgc2l6ZT1cImJpZ1wiXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICDguYDguKPguLTguYjguKHguKrguKHguLHguITguKNcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxNZXNzYWdlXG4gICAgICAgICAgICAgICAgZXJyb3JcbiAgICAgICAgICAgICAgICBjb250ZW50PVwi4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4Lir4Lih4Liy4Lii4LmA4Lil4LiC4Lia4Lix4LiV4Lij4Lib4Lij4Liw4LiK4Liy4LiK4LiZ4LmD4Lir4LmJ4LiE4Lij4LiaIDEzIOC4q+C4peC4seC4gVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxuICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICBNYWRlIHdpdGggPEljb24gY29sb3I9XCJyZWRcIiBuYW1lPVwiaGVhcnRcIiAvPiBieXtcIiBcIn1cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5uZXh0c2Nob29sLmlvXCI+IE5leHRTY2hvb2w8L2E+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSWRlbnRpdHlGb3JtO1xuIl19 */\n/*@ sourceURL=components/identityForm.js */"
      }), _react2.default.createElement("div", {
        className: "jsx-1443986054" + " " + "log-in-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        }
      }, _react2.default.createElement("div", {
        className: "jsx-1443986054" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        }
      }, _react2.default.createElement("div", {
        className: "jsx-1443986054" + " " + "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        }
      }, _react2.default.createElement("h1", {
        className: "jsx-1443986054",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        }
      }, "KJST Pre-test 2018"), _react2.default.createElement("h2", {
        className: "jsx-1443986054",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        }
      }, "\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E01\u0E32\u0E0D\u0E08\u0E19\u0E32\u0E20\u0E34\u0E40\u0E29\u0E01\u0E27\u0E34\u0E17\u0E22\u0E32\u0E25\u0E31\u0E22 \u0E2A\u0E38\u0E23\u0E32\u0E29\u0E0E\u0E23\u0E4C\u0E18\u0E32\u0E19\u0E35"))), _react2.default.createElement("div", {
        className: "jsx-1443986054" + " " + "form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        }
      }, _react2.default.createElement("div", {
        className: "jsx-1443986054" + " " + "thumbnail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        }
      }, _react2.default.createElement("img", { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/hat.svg", className: "jsx-1443986054",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        }
      })), _react2.default.createElement(_semanticUiReact.Form, {
        size: "large",
        onSubmit: this.handleSubmit,
        loading: loading,
        error: error,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Input, {
        fluid: true,
        placeholder: "\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E25\u0E02\u0E1A\u0E31\u0E15\u0E23\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E0A\u0E19 13 \u0E2B\u0E25\u0E31\u0E01",
        icon: "id card",
        size: "big",
        iconPosition: "left",
        name: "citizen",
        value: citizen,
        onChange: this.handleChange,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        }
      }), _react2.default.createElement(_semanticUiReact.Button, {
        color: "orange",
        className: "bgMain",
        fluid: true,
        size: "big",
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        }
      }, "\u0E40\u0E23\u0E34\u0E48\u0E21\u0E2A\u0E21\u0E31\u0E04\u0E23"), _react2.default.createElement(_semanticUiReact.Message, {
        error: true,
        content: "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E25\u0E02\u0E1A\u0E31\u0E15\u0E23\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E0A\u0E19\u0E43\u0E2B\u0E49\u0E04\u0E23\u0E1A 13 \u0E2B\u0E25\u0E31\u0E01",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        }
      }))), _react2.default.createElement("div", {
        className: "jsx-1443986054" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        }
      }, _react2.default.createElement("div", {
        className: "jsx-1443986054" + " " + "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        }
      }, _react2.default.createElement("span", {
        className: "jsx-1443986054",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        }
      }, "Made with ", _react2.default.createElement(_semanticUiReact.Icon, { color: "red", name: "heart", __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        }
      }), " by", " ", _react2.default.createElement("a", { href: "http://www.nextschool.io", className: "jsx-1443986054",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        }
      }, " NextSchool"))))));
    }
  }]);

  return IdentityForm;
}(_react.Component);

IdentityForm.defaultProps = {
  messages: []
};

exports.default = IdentityForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaWRlbnRpdHlGb3JtLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIlNlbGVjdCIsIkJ1dHRvbiIsIkZvcm0iLCJHcmlkIiwiSGVhZGVyIiwiSW1hZ2UiLCJNZXNzYWdlIiwiU2VnbWVudCIsIkljb24iLCJmZXRjaCIsIlJvdXRlciIsIklkZW50aXR5Rm9ybSIsInN0YXRlIiwic2Nob29sIiwiY2l0aXplbiIsInN1Ym1pdHRlZFNjaG9vbCIsInN1Ym1pdHRlZENpdGl6ZW4iLCJsb2FkaW5nIiwiZXJyb3IiLCJoYW5kbGVDaGFuZ2UiLCJlIiwibmFtZSIsInZhbHVlIiwiaXNOYU4iLCJsZW5ndGgiLCJzZXRTdGF0ZSIsImhhbmRsZVN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJjaGVja0NpdGl6ZW4iLCJ2YXJpYWJsZXMiLCJyZXMiLCJqc29uIiwidGhlbiIsInB1c2giLCJkZWZhdWx0UHJvcHMiLCJtZXNzYWdlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7OztBQUNULEFBQ0UsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBOztBQUVGLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7SSxBQUVEOzs7Ozs7Ozs7Ozs7Ozs7d04sQUFLSjtjQUFRLEFBQ0UsQUFDUjtlQUZNLEFBRUcsQUFDVDt1QkFITSxBQUdXLEFBQ2pCO3dCQUpNLEFBSVksQUFDbEI7ZUFMTSxBQUtHLEFBQ1Q7YSxBQU5NLEFBTUM7QUFORCxBQUNOLGEsQUFrQkYsZUFBZSxVQUFBLEFBQUMsVUFBdUI7VUFBbEIsQUFBa0IsYUFBbEIsQUFBa0I7VUFBWixBQUFZLGNBQVosQUFBWSxBQUNyQzs7VUFBSSxDQUFDLE1BQUQsQUFBQyxBQUFNLFVBQVUsTUFBQSxBQUFNLFVBQTNCLEFBQXFDLElBQUksQUFDdkM7Y0FBQSxBQUFLLDJDQUFMLEFBQWlCLE1BQWpCLEFBQXdCLEFBQ3pC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QUNmO2tCQVRGOztvQkFBQTtzQkFORixBQU1FLEFBWUE7QUFaQTtBQUNFLDBCQVdGLEFBQUM7ZUFBRCxBQUNRLEFBQ047bUJBRkYsQUFFWSxBQUNWO2VBSEYsQUFJRTtjQUpGLEFBSU8sQUFDTDtjQUxGLEFBS087O29CQUxQO3NCQUFBO0FBQUE7QUFDRSxTQW5CSixBQWtCRSxBQVNBLGlGQUFBLEFBQUM7ZUFBRCxBQUVFO2lCQUZGLEFBRVU7O29CQUZWO3NCQXRDTixBQU9FLEFBSUUsQUEyQkUsQUFNSjtBQU5JO0FBQ0UsNEJBS04sY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUNZLDhCQUFBLEFBQUMsdUNBQUssT0FBTixBQUFZLE9BQU0sTUFBbEIsQUFBdUI7b0JBQXZCO3NCQURaLEFBQ1k7QUFBQTtVQUFxQyxPQURqRCxBQUVFLHFCQUFBLGNBQUEsT0FBRyxNQUFILEFBQVEsdUNBQVI7O29CQUFBO3NCQUFBO0FBQUE7U0E5TlosQUFDRSxBQTZLRSxBQTRDRSxBQUNFLEFBQ0UsQUFFRSxBQU9iOzs7OztBQTNUd0IsQTs7QUFBckIsQSxhQUNHLEE7WUFBZSxBQUNWLEEsQUE0VGQ7QUE3VHdCLEFBQ3BCOztrQkE0VEosQUFBZSIsImZpbGUiOiJpZGVudGl0eUZvcm0uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3Bhbmdwb25kL1NpdGVzL05leHRnZW5zb2Z0L2V4YW0ifQ==