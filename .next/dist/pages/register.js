"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _head = require("next/dist/lib/head.js");

var _head2 = _interopRequireDefault(_head);

var _semanticUiReact = require("semantic-ui-react");

var _registerForm = require("../components/registerForm");

var _registerForm2 = _interopRequireDefault(_registerForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/pangpond/Sites/Nextgensoft/exam/pages/register.js?entry";

exports.default = function () {
  return _react2.default.createElement("div", {
    className: "jsx-2102850432",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement("link", {
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css",
    className: "jsx-2102850432",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), _react2.default.createElement("link", {
    rel: "stylesheet",
    href: "//fonts.googleapis.com/css?family=Roboto:400,100,300,500,700,900",
    className: "jsx-2102850432",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), _react2.default.createElement("link", {
    rel: "stylesheet",
    href: "//fonts.googleapis.com/css?family=Montserrat:400,700",
    className: "jsx-2102850432",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), _react2.default.createElement("link", {
    rel: "stylesheet",
    href: "//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css",
    className: "jsx-2102850432",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  })), _react2.default.createElement(_style2.default, {
    styleId: "2102850432",
    css: "body{background:#f1f1f1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3JlZ2lzdGVyLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDTyxBQUc4QixtQkFDckIiLCJmaWxlIjoicGFnZXMvcmVnaXN0ZXIuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3Bhbmdwb25kL1NpdGVzL05leHRnZW5zb2Z0L2V4YW0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQge1xuICBCdXR0b24sXG4gIEZvcm0sXG4gIEdyaWQsXG4gIEhlYWRlcixcbiAgSW1hZ2UsXG4gIE1lc3NhZ2UsXG4gIFNlZ21lbnRcbn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5cbmltcG9ydCBSZWdpc3RlckZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvcmVnaXN0ZXJGb3JtXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDxsaW5rXG4gICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICBocmVmPVwiLy9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2VtYW50aWMtdWkvMi4yLjEyL3NlbWFudGljLm1pbi5jc3NcIlxuICAgICAgLz5cbiAgICAgIDxsaW5rXG4gICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICBocmVmPVwiLy9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzo0MDAsMTAwLDMwMCw1MDAsNzAwLDkwMFwiXG4gICAgICAvPlxuICAgICAgPGxpbmtcbiAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIGhyZWY9XCIvL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo0MDAsNzAwXCJcbiAgICAgIC8+XG4gICAgICA8bGlua1xuICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgaHJlZj1cIi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuMy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiXG4gICAgICAvPlxuICAgIDwvSGVhZD5cbiAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgIHtgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgICA8UmVnaXN0ZXJGb3JtIC8+XG4gIDwvZGl2PlxuKTtcbiJdfQ== */\n/*@ sourceURL=pages/register.js?entry */"
  }), _react2.default.createElement(_registerForm2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3JlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbIkhlYWQiLCJCdXR0b24iLCJGb3JtIiwiR3JpZCIsIkhlYWRlciIsIkltYWdlIiwiTWVzc2FnZSIsIlNlZ21lbnQiLCJSZWdpc3RlckZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQ0UsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0E7O0FBR0YsQUFBTyxBQUFrQixBQUV6Qjs7Ozs7Ozs7a0JBQWUsWUFBQTt5QkFDYixjQUFBO2VBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUE7U0FDRSxBQUNNLEFBQ0o7VUFGRixBQUVPO2VBRlA7O2dCQUFBO2tCQURGLEFBQ0UsQUFJQTtBQUpBO0FBQ0U7U0FHRixBQUNNLEFBQ0o7VUFGRixBQUVPO2VBRlA7O2dCQUFBO2tCQUxGLEFBS0UsQUFJQTtBQUpBO0FBQ0U7U0FHRixBQUNNLEFBQ0o7VUFGRixBQUVPO2VBRlA7O2dCQUFBO2tCQVRGLEFBU0UsQUFJQTtBQUpBO0FBQ0U7U0FHRixBQUNNLEFBQ0o7VUFGRixBQUVPO2VBRlA7O2dCQUFBO2tCQWRKLEFBQ0UsQUFhRTtBQUFBO0FBQ0U7YUFmTjtTQUFBLEFBMEJFO0FBMUJGLHNCQTBCRSxBQUFDOztnQkFBRDtrQkEzQlcsQUFDYixBQTBCRTtBQUFBO0FBQUE7QUEzQkoiLCJmaWxlIjoicmVnaXN0ZXIuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3Bhbmdwb25kL1NpdGVzL05leHRnZW5zb2Z0L2V4YW0ifQ==