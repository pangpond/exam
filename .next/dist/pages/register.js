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

exports.default = function (_ref) {
  var _ref$url$query = _ref.url.query,
      citizen = _ref$url$query.citizen,
      title = _ref$url$query.title,
      firstname = _ref$url$query.firstname,
      lastname = _ref$url$query.lastname,
      prev_edu_name = _ref$url$query.prev_edu_name,
      prev_edu_sub_district = _ref$url$query.prev_edu_sub_district,
      prev_edu_district = _ref$url$query.prev_edu_district,
      prev_edu_province = _ref$url$query.prev_edu_province;
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
    css: "body{background:#f1f1f1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3JlZ2lzdGVyLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDTyxBQUc4QixtQkFDckIiLCJmaWxlIjoicGFnZXMvcmVnaXN0ZXIuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3Bhbmdwb25kL1NpdGVzL05leHRnZW5zb2Z0L2V4YW0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQge1xuICBCdXR0b24sXG4gIEZvcm0sXG4gIEdyaWQsXG4gIEhlYWRlcixcbiAgSW1hZ2UsXG4gIE1lc3NhZ2UsXG4gIFNlZ21lbnRcbn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5cbmltcG9ydCBSZWdpc3RlckZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvcmVnaXN0ZXJGb3JtXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IHVybDogeyBxdWVyeTogeyBjaXRpemVuLCB0aXRsZSwgZmlyc3RuYW1lLCBsYXN0bmFtZSwgcHJldl9lZHVfbmFtZSwgcHJldl9lZHVfc3ViX2Rpc3RyaWN0LCBwcmV2X2VkdV9kaXN0cmljdCwgcHJldl9lZHVfcHJvdmluY2V9IH0gfSkgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPGxpbmtcbiAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIGhyZWY9XCIvL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zZW1hbnRpYy11aS8yLjIuMTIvc2VtYW50aWMubWluLmNzc1wiXG4gICAgICAvPlxuICAgICAgPGxpbmtcbiAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIGhyZWY9XCIvL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjQwMCwxMDAsMzAwLDUwMCw3MDAsOTAwXCJcbiAgICAgIC8+XG4gICAgICA8bGlua1xuICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgaHJlZj1cIi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjQwMCw3MDBcIlxuICAgICAgLz5cbiAgICAgIDxsaW5rXG4gICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICBocmVmPVwiLy9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC4zLjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCJcbiAgICAgIC8+XG4gICAgPC9IZWFkPlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAge2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICAgIDxSZWdpc3RlckZvcm0gY2l0aXplbj17Y2l0aXplbn0gdGl0bGU9e3RpdGxlfSBmaXJzdG5hbWU9e2ZpcnN0bmFtZX0gbGFzdG5hbWU9e2xhc3RuYW1lfSBwcmV2X2VkdV9uYW1lPXtwcmV2X2VkdV9uYW1lfSBwcmV2X2VkdV9zdWJfZGlzdHJpY3Q9e3ByZXZfZWR1X3N1Yl9kaXN0cmljdH0gcHJldl9lZHVfZGlzdHJpY3Q9e3ByZXZfZWR1X2Rpc3RyaWN0fSBwcmV2X2VkdV9wcm92aW5jZT17cHJldl9lZHVfcHJvdmluY2V9IC8+XG4gIDwvZGl2PlxuKTtcblxuXG5cbiJdfQ== */\n/*@ sourceURL=pages/register.js?entry */"
  }), _react2.default.createElement(_registerForm2.default, { citizen: citizen, title: title, firstname: firstname, lastname: lastname, prev_edu_name: prev_edu_name, prev_edu_sub_district: prev_edu_sub_district, prev_edu_district: prev_edu_district, prev_edu_province: prev_edu_province, __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3JlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbIkhlYWQiLCJCdXR0b24iLCJGb3JtIiwiR3JpZCIsIkhlYWRlciIsIkltYWdlIiwiTWVzc2FnZSIsIlNlZ21lbnQiLCJSZWdpc3RlckZvcm0iLCJ1cmwiLCJxdWVyeSIsImNpdGl6ZW4iLCJ0aXRsZSIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwicHJldl9lZHVfbmFtZSIsInByZXZfZWR1X3N1Yl9kaXN0cmljdCIsInByZXZfZWR1X2Rpc3RyaWN0IiwicHJldl9lZHVfcHJvdmluY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQ0UsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0E7O0FBR0YsQUFBTyxBQUFrQixBQUV6Qjs7Ozs7Ozs7a0JBQWUsZ0JBQUE7NEJBQUEsQUFBRyxJQUFILEFBQVU7TUFBVixBQUFtQix5QkFBbkIsQUFBbUI7TUFBbkIsQUFBNEIsdUJBQTVCLEFBQTRCO01BQTVCLEFBQW1DLDJCQUFuQyxBQUFtQztNQUFuQyxBQUE4QywwQkFBOUMsQUFBOEM7TUFBOUMsQUFBd0QsK0JBQXhELEFBQXdEO01BQXhELEFBQXVFLHVDQUF2RSxBQUF1RTtNQUF2RSxBQUE4RixtQ0FBOUYsQUFBOEY7TUFBOUYsQUFBaUgsbUNBQWpILEFBQWlIO3lCQUM5SCxjQUFBO2VBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUE7U0FDRSxBQUNNLEFBQ0o7VUFGRixBQUVPO2VBRlA7O2dCQUFBO2tCQURGLEFBQ0UsQUFJQTtBQUpBO0FBQ0U7U0FHRixBQUNNLEFBQ0o7VUFGRixBQUVPO2VBRlA7O2dCQUFBO2tCQUxGLEFBS0UsQUFJQTtBQUpBO0FBQ0U7U0FHRixBQUNNLEFBQ0o7VUFGRixBQUVPO2VBRlA7O2dCQUFBO2tCQVRGLEFBU0UsQUFJQTtBQUpBO0FBQ0U7U0FHRixBQUNNLEFBQ0o7VUFGRixBQUVPO2VBRlA7O2dCQUFBO2tCQWRKLEFBQ0UsQUFhRTtBQUFBO0FBQ0U7YUFmTjtTQUFBLEFBMEJFO0FBMUJGLHNCQTBCRSxBQUFDLHdDQUFhLFNBQWQsQUFBdUIsU0FBUyxPQUFoQyxBQUF1QyxPQUFPLFdBQTlDLEFBQXlELFdBQVcsVUFBcEUsQUFBOEUsVUFBVSxlQUF4RixBQUF1RyxlQUFlLHVCQUF0SCxBQUE2SSx1QkFBdUIsbUJBQXBLLEFBQXVMLG1CQUFtQixtQkFBMU0sQUFBNk47Z0JBQTdOO2tCQTNCVyxBQUNiLEFBMEJFO0FBQUE7O0FBM0JKIiwiZmlsZSI6InJlZ2lzdGVyLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wYW5ncG9uZC9TaXRlcy9OZXh0Z2Vuc29mdC9leGFtIn0=