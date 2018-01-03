'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pangpond/Sites/Nextgensoft/exam/pages/identity.js';


var countryOptions = [{
  key: 'af',
  value: 'af',
  flag: 'af',
  text: 'Afghanistan'
}];

var SelectSchool = function SelectSchool() {
  return _react2.default.createElement(_semanticUiReact.Select, { placeholder: 'Select your country', options: countryOptions, __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  });
};

var Identity = function (_Component) {
  (0, _inherits3.default)(Identity, _Component);

  function Identity() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Identity);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Identity.__proto__ || (0, _getPrototypeOf2.default)(Identity)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      school: 'โรงเรียนกาญจนาภิเษกวิทยาลัย สุราษฎร์ธานี',
      citizen: '',
      submittedSchool: 'โรงเรียนกาญจนาภิเษกวิทยาลัย สุราษฎร์ธานี',
      submittedCitizen: ''
    }, _this.handleChange = function (e, _ref2) {
      var name = _ref2.name,
          value = _ref2.value;
      return _this.setState((0, _defineProperty3.default)({}, name, value));
    }, _this.handleSubmit = function () {
      var _this$state = _this.state,
          name = _this$state.name,
          email = _this$state.email;

      _this.setState({ submittedSchool: name, submittedCitizen: email });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Identity, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // this.socket = io()
      // this.socket.on('message', this.handleMessage)
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      // this.socket.off('message', this.handleMessage)
      // this.socket.close()
    }
  }, {
    key: 'render',

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
          submittedCitizen = _state.submittedCitizen;

      return _react2.default.createElement('div', { className: 'login-form', __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, {
        textAlign: 'center',
        style: { height: '100%' },
        verticalAlign: 'middle',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { style: { maxWidth: 450 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', color: 'teal', textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement(_semanticUiReact.Image, { src: '/logo.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }), ' ', 'Log-in to your account'), _react2.default.createElement(_semanticUiReact.Form, { size: 'large', onSubmit: this.handleSubmit, loading: false, __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, { stacked: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Input, {
        fluid: true,
        placeholder: '\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E25\u0E02\u0E1A\u0E31\u0E15\u0E23\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E0A\u0E19 13 \u0E2B\u0E25\u0E31\u0E01',
        icon: 'user',
        iconPosition: 'left',
        name: 'citizen',
        value: citizen,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', fluid: true, size: 'large', type: 'submit', __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, 'Submit'))))));
    }
  }]);

  return Identity;
}(_react.Component);

Identity.defaultProps = {
  messages: []
};

exports.default = Identity;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2lkZW50aXR5LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIlNlbGVjdCIsIkJ1dHRvbiIsIkZvcm0iLCJHcmlkIiwiSGVhZGVyIiwiSW1hZ2UiLCJNZXNzYWdlIiwiU2VnbWVudCIsImNvdW50cnlPcHRpb25zIiwia2V5IiwidmFsdWUiLCJmbGFnIiwidGV4dCIsIlNlbGVjdFNjaG9vbCIsIklkZW50aXR5Iiwic3RhdGUiLCJzY2hvb2wiLCJjaXRpemVuIiwic3VibWl0dGVkU2Nob29sIiwic3VibWl0dGVkQ2l0aXplbiIsImhhbmRsZUNoYW5nZSIsImUiLCJuYW1lIiwic2V0U3RhdGUiLCJoYW5kbGVTdWJtaXQiLCJlbWFpbCIsImhlaWdodCIsIm1heFdpZHRoIiwiZGVmYXVsdFByb3BzIiwibWVzc2FnZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVM7Ozs7QUFDVCxBQUFTLEFBQVEsQUFBUSxBQUFNLEFBQU0sQUFBUSxBQUFPLEFBQVM7Ozs7Ozs7QUFFN0QsSUFBTTtPQUNKLEFBQ08sQUFDTDtTQUZGLEFBRVMsQUFDUDtRQUhGLEFBR1EsQUFDTjtRQUxKLEFBQXVCLEFBQ3JCLEFBSVE7QUFKUixBQUNFLENBRm1COztBQVN2QixJQUFNLGVBQWUsU0FBZixBQUFlLGVBQUE7eUJBQU0sQUFBQyx5Q0FBTyxhQUFSLEFBQW9CLHVCQUFzQixTQUExQyxBQUFtRDtnQkFBbkQ7a0JBQU4sQUFBTTtBQUFBO0dBQUE7QUFBM0I7O0lBRU0sQTs7Ozs7Ozs7Ozs7Ozs7Z04sQUFLSjtjQUFRLEFBQ0UsQUFDUjtlQUZNLEFBRUcsQUFDVDt1QkFITSxBQUdXLEFBQ2pCO3dCQUFrQixBLEFBSlo7QUFBQSxBQUNOLGFBZ0JGLEEsZUFBZSxVQUFBLEFBQUMsVUFBRDtVQUFBLEFBQU0sYUFBTixBQUFNO1VBQU4sQUFBWSxjQUFaLEFBQVk7YUFBWSxNQUFBLEFBQUssMkNBQUwsQUFBaUIsTUFBekMsQUFBd0IsQUFBd0I7QSxhLEFBRS9ELGVBQWUsWUFBTTt3QkFDSyxNQURMLEFBQ1U7VUFEVixBQUNYLG1CQURXLEFBQ1g7VUFEVyxBQUNMLG9CQURLLEFBQ0wsQUFFZDs7WUFBQSxBQUFLLFNBQVMsRUFBRSxpQkFBRixBQUFtQixNQUFNLGtCQUF2QyxBQUFjLEFBQTJDLEFBQzFEO0E7Ozs7O3dDQWhCbUIsQUFDbEI7QUFDQTtBQUNEOzs7OzJDQUVzQixBQUNyQjtBQUNBO0FBQ0Q7OztTQVVEOztBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7NkJBRVM7bUJBR0gsS0FIRyxBQUdFO1VBSEYsQUFFTCxnQkFGSyxBQUVMO1VBRkssQUFFRyxpQkFGSCxBQUVHO1VBRkgsQUFFWSx5QkFGWixBQUVZO1VBRlosQUFFNkIsMEJBRjdCLEFBRTZCLEFBR3BDOzs2QkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLEFBQUM7bUJBQUQsQUFDWSxBQUNWO2VBQU8sRUFBRSxRQUZYLEFBRVMsQUFBVSxBQUNqQjt1QkFIRixBQUdnQjs7b0JBSGhCO3NCQUFBLEFBS0U7QUFMRjtBQUNFLHlCQUlDLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQU8sRUFBRSxVQUF0QixBQUFvQixBQUFZO29CQUFoQztzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyx5Q0FBTyxJQUFSLEFBQVcsTUFBSyxPQUFoQixBQUFzQixRQUFPLFdBQTdCLEFBQXVDO29CQUF2QztzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyx3Q0FBTSxLQUFQLEFBQVc7b0JBQVg7c0JBREYsQUFDRSxBQUNDO0FBREQ7VUFERixLQURGLEFBQ0UsQUFJQSwyQ0FBQSxBQUFDLHVDQUFLLE1BQU4sQUFBVyxTQUFRLFVBQVUsS0FBN0IsQUFBa0MsY0FBYyxTQUFoRCxBQUF5RDtvQkFBekQ7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsMENBQVEsU0FBVDtvQkFBQTtzQkFBQSxBQUNFO0FBREY7dUNBQ0UsQUFBQyxzQkFBRCxBQUFNO2VBQU4sQUFFRTtxQkFGRixBQUVjLEFBQ1o7Y0FIRixBQUdPLEFBQ0w7c0JBSkYsQUFJZSxBQUNiO2NBTEYsQUFLTyxBQUNMO2VBTkYsQUFNUyxBQUNQO2tCQUFVLEtBUFosQUFPaUI7O29CQVBqQjtzQkFERixBQUNFLEFBU0E7QUFUQTtBQUNFLDBCQVFGLEFBQUMseUNBQU8sT0FBUixBQUFjLFFBQU8sT0FBckIsTUFBMkIsTUFBM0IsQUFBZ0MsU0FBUSxNQUF4QyxBQUE2QztvQkFBN0M7c0JBQUE7QUFBQTtTQXZCWixBQUNFLEFBQ0UsQUFLRSxBQUtFLEFBQ0UsQUFVRSxBQU9iOzs7OztBQXBGb0IsQTs7QSxBQUFqQixTQUNHLEE7WUFBZSxBQUNWLEEsQUFxRmQ7QUF0RndCLEFBQ3BCOztrQkFxRkosQUFBZSIsImZpbGUiOiJpZGVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGFuZ3BvbmQvU2l0ZXMvTmV4dGdlbnNvZnQvZXhhbSJ9