'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _semanticUiReact = require('semantic-ui-react');

var _registerForm = require('../components/registerForm');

var _registerForm2 = _interopRequireDefault(_registerForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pangpond/Sites/Nextgensoft/exam/pages/register.js?entry';

exports.default = function (_ref) {
  var _ref$url$query = _ref.url.query,
      citizen = _ref$url$query.citizen,
      title = _ref$url$query.title,
      firstname = _ref$url$query.firstname,
      lastname = _ref$url$query.lastname,
      prev_edu_name = _ref$url$query.prev_edu_name,
      prev_edu_sub_district = _ref$url$query.prev_edu_sub_district,
      prev_edu_district = _ref$url$query.prev_edu_district,
      prev_edu_province = _ref$url$query.prev_edu_province,
      prev_edu_source = _ref$url$query.prev_edu_source;
  return _react2.default.createElement('div', {
    className: 'jsx-2102850432',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, _react2.default.createElement('link', {
    rel: 'stylesheet',
    href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css',
    className: 'jsx-2102850432',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }), _react2.default.createElement('link', {
    rel: 'stylesheet',
    href: '//fonts.googleapis.com/css?family=Roboto:400,100,300,500,700,900',
    className: 'jsx-2102850432',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Montserrat:400,700', className: 'jsx-2102850432',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }), _react2.default.createElement('link', {
    rel: 'stylesheet',
    href: '//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css',
    className: 'jsx-2102850432',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  })), _react2.default.createElement(_style2.default, {
    styleId: '2102850432',
    css: 'body{background:#f1f1f1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3JlZ2lzdGVyLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDTyxBQUc4QixtQkFDckIiLCJmaWxlIjoicGFnZXMvcmVnaXN0ZXIuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3Bhbmdwb25kL1NpdGVzL05leHRnZW5zb2Z0L2V4YW0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIEdyaWQsIEhlYWRlciwgSW1hZ2UsIE1lc3NhZ2UsIFNlZ21lbnQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuaW1wb3J0IFJlZ2lzdGVyRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL3JlZ2lzdGVyRm9ybSdcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgdXJsOiB7XG4gICAgcXVlcnk6IHtcbiAgICAgIGNpdGl6ZW4sXG4gICAgICB0aXRsZSxcbiAgICAgIGZpcnN0bmFtZSxcbiAgICAgIGxhc3RuYW1lLFxuICAgICAgcHJldl9lZHVfbmFtZSxcbiAgICAgIHByZXZfZWR1X3N1Yl9kaXN0cmljdCxcbiAgICAgIHByZXZfZWR1X2Rpc3RyaWN0LFxuICAgICAgcHJldl9lZHVfcHJvdmluY2UsXG4gICAgICBwcmV2X2VkdV9zb3VyY2UsXG4gICAgfSxcbiAgfSxcbn0pID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDxsaW5rXG4gICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICBocmVmPVwiLy9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2VtYW50aWMtdWkvMi4yLjEyL3NlbWFudGljLm1pbi5jc3NcIlxuICAgICAgLz5cbiAgICAgIDxsaW5rXG4gICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICBocmVmPVwiLy9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzo0MDAsMTAwLDMwMCw1MDAsNzAwLDkwMFwiXG4gICAgICAvPlxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo0MDAsNzAwXCIgLz5cbiAgICAgIDxsaW5rXG4gICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICBocmVmPVwiLy9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC4zLjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCJcbiAgICAgIC8+XG4gICAgPC9IZWFkPlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAge2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICAgIDxSZWdpc3RlckZvcm1cbiAgICAgIGNpdGl6ZW49e2NpdGl6ZW59XG4gICAgICB0aXRsZT17dGl0bGV9XG4gICAgICBmaXJzdG5hbWU9e2ZpcnN0bmFtZX1cbiAgICAgIGxhc3RuYW1lPXtsYXN0bmFtZX1cbiAgICAgIHByZXZfZWR1X25hbWU9e3ByZXZfZWR1X25hbWV9XG4gICAgICBwcmV2X2VkdV9zdWJfZGlzdHJpY3Q9e3ByZXZfZWR1X3N1Yl9kaXN0cmljdH1cbiAgICAgIHByZXZfZWR1X2Rpc3RyaWN0PXtwcmV2X2VkdV9kaXN0cmljdH1cbiAgICAgIHByZXZfZWR1X3Byb3ZpbmNlPXtwcmV2X2VkdV9wcm92aW5jZX1cbiAgICAgIHByZXZfZWR1X3NvdXJjZT17cHJldl9lZHVfc291cmNlfVxuICAgIC8+XG4gIDwvZGl2PlxuKVxuIl19 */\n/*@ sourceURL=pages/register.js?entry */'
  }), _react2.default.createElement(_registerForm2.default, {
    citizen: citizen,
    title: title,
    firstname: firstname,
    lastname: lastname,
    prev_edu_name: prev_edu_name,
    prev_edu_sub_district: prev_edu_sub_district,
    prev_edu_district: prev_edu_district,
    prev_edu_province: prev_edu_province,
    prev_edu_source: prev_edu_source,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3JlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbIkhlYWQiLCJCdXR0b24iLCJGb3JtIiwiR3JpZCIsIkhlYWRlciIsIkltYWdlIiwiTWVzc2FnZSIsIlNlZ21lbnQiLCJSZWdpc3RlckZvcm0iLCJ1cmwiLCJxdWVyeSIsImNpdGl6ZW4iLCJ0aXRsZSIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwicHJldl9lZHVfbmFtZSIsInByZXZfZWR1X3N1Yl9kaXN0cmljdCIsInByZXZfZWR1X2Rpc3RyaWN0IiwicHJldl9lZHVfcHJvdmluY2UiLCJwcmV2X2VkdV9zb3VyY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBUSxBQUFNLEFBQU0sQUFBUSxBQUFPLEFBQVM7O0FBRXJELEFBQU8sQUFBa0IsQUFFekI7Ozs7Ozs7O2tCQUFlLGdCQUFBOzRCQUFBLEFBQ2IsSUFEYSxBQUVYO01BRlcsQUFHVCx5QkFIUyxBQUdUO01BSFMsQUFJVCx1QkFKUyxBQUlUO01BSlMsQUFLVCwyQkFMUyxBQUtUO01BTFMsQUFNVCwwQkFOUyxBQU1UO01BTlMsQUFPVCwrQkFQUyxBQU9UO01BUFMsQUFRVCx1Q0FSUyxBQVFUO01BUlMsQUFTVCxtQ0FUUyxBQVNUO01BVFMsQUFVVCxtQ0FWUyxBQVVUO01BVlMsQUFXVCxpQ0FYUyxBQVdUO3lCQUlKLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQTtTQUNFLEFBQ00sQUFDSjtVQUZGLEFBRU87ZUFGUDs7Z0JBQUE7a0JBREYsQUFDRSxBQUlBO0FBSkE7QUFDRTtTQUdGLEFBQ00sQUFDSjtVQUZGLEFBRU87ZUFGUDs7Z0JBQUE7a0JBTEYsQUFLRSxBQUlBO0FBSkE7QUFDRSw4Q0FHSSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QixtRUFBNUI7O2dCQUFBO2tCQVRGLEFBU0UsQUFDQTtBQURBOztTQUNBLEFBQ00sQUFDSjtVQUZGLEFBRU87ZUFGUDs7Z0JBQUE7a0JBWEosQUFDRSxBQVVFO0FBQUE7QUFDRTthQVpOO1NBQUEsQUF1QkU7QUF2QkYsc0JBdUJFLEFBQUM7YUFBRCxBQUNXLEFBQ1Q7V0FGRixBQUVTLEFBQ1A7ZUFIRixBQUdhLEFBQ1g7Y0FKRixBQUlZLEFBQ1Y7bUJBTEYsQUFLaUIsQUFDZjsyQkFORixBQU15QixBQUN2Qjt1QkFQRixBQU9xQixBQUNuQjt1QkFSRixBQVFxQixBQUNuQjtxQkFURixBQVNtQjs7Z0JBVG5CO2tCQXRDVyxBQWViLEFBdUJFO0FBQUE7QUFDRTtBQXZDTiIsImZpbGUiOiJyZWdpc3Rlci5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGFuZ3BvbmQvU2l0ZXMvTmV4dGdlbnNvZnQvZXhhbSJ9