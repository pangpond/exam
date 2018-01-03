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

var _identity = require('./identity');

var _identity2 = _interopRequireDefault(_identity);

var _identityForm = require('../components/identityForm');

var _identityForm2 = _interopRequireDefault(_identityForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pangpond/Sites/Nextgensoft/exam/pages/index.js?entry';

exports.default = function () {
  return _react2.default.createElement('div', {
    className: 'jsx-2102850432',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('link', {
    rel: 'stylesheet',
    href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css',
    className: 'jsx-2102850432',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement('link', {
    rel: 'stylesheet',
    href: '//fonts.googleapis.com/css?family=Roboto:400,100,300,500,700,900',
    className: 'jsx-2102850432',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Montserrat:400,700', className: 'jsx-2102850432',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), _react2.default.createElement('link', {
    rel: 'stylesheet',
    href: '//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css',
    className: 'jsx-2102850432',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  })), _react2.default.createElement(_style2.default, {
    styleId: '2102850432',
    css: 'body{background:#f1f1f1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCTyxBQUc4QixtQkFDckIiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3Bhbmdwb25kL1NpdGVzL05leHRnZW5zb2Z0L2V4YW0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIEdyaWQsIEhlYWRlciwgSW1hZ2UsIE1lc3NhZ2UsIFNlZ21lbnQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuaW1wb3J0IElkZW50aXR5IGZyb20gJy4vaWRlbnRpdHknXG5pbXBvcnQgSWRlbnRpdHlGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvaWRlbnRpdHlGb3JtJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8bGlua1xuICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgaHJlZj1cIi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NlbWFudGljLXVpLzIuMi4xMi9zZW1hbnRpYy5taW4uY3NzXCJcbiAgICAgIC8+XG4gICAgICA8bGlua1xuICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgaHJlZj1cIi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDEwMCwzMDAsNTAwLDcwMCw5MDBcIlxuICAgICAgLz5cbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLy9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDcwMFwiIC8+XG4gICAgICA8bGlua1xuICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgaHJlZj1cIi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuMy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiXG4gICAgICAvPlxuICAgIDwvSGVhZD5cbiAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgIHtgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgICA8SWRlbnRpdHlGb3JtIC8+XG4gIDwvZGl2PlxuKVxuIl19 */\n/*@ sourceURL=pages/index.js?entry */'
  }), _react2.default.createElement(_identityForm2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhlYWQiLCJCdXR0b24iLCJGb3JtIiwiR3JpZCIsIkhlYWRlciIsIkltYWdlIiwiTWVzc2FnZSIsIlNlZ21lbnQiLCJJZGVudGl0eSIsIklkZW50aXR5Rm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFRLEFBQU0sQUFBTSxBQUFRLEFBQU8sQUFBUzs7QUFFckQsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBa0IsQUFFekI7Ozs7Ozs7O2tCQUFlLFlBQUE7eUJBQ2IsY0FBQTtlQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBO1NBQ0UsQUFDTSxBQUNKO1VBRkYsQUFFTztlQUZQOztnQkFBQTtrQkFERixBQUNFLEFBSUE7QUFKQTtBQUNFO1NBR0YsQUFDTSxBQUNKO1VBRkYsQUFFTztlQUZQOztnQkFBQTtrQkFMRixBQUtFLEFBSUE7QUFKQTtBQUNFLDhDQUdJLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCLG1FQUE1Qjs7Z0JBQUE7a0JBVEYsQUFTRSxBQUNBO0FBREE7O1NBQ0EsQUFDTSxBQUNKO1VBRkYsQUFFTztlQUZQOztnQkFBQTtrQkFYSixBQUNFLEFBVUU7QUFBQTtBQUNFO2FBWk47U0FBQSxBQXVCRTtBQXZCRixzQkF1QkUsQUFBQzs7Z0JBQUQ7a0JBeEJXLEFBQ2IsQUF1QkU7QUFBQTtBQUFBO0FBeEJKIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wYW5ncG9uZC9TaXRlcy9OZXh0Z2Vuc29mdC9leGFtIn0=