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
      }, _react2.default.createElement(_semanticUiReact.Grid, { textAlign: 'center', style: { height: '100%' }, verticalAlign: 'middle', __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { style: { maxWidth: 450 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', color: 'teal', textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement(_semanticUiReact.Image, { src: '/logo.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }), ' Log-in to your account'), _react2.default.createElement(_semanticUiReact.Form, { size: 'large', onSubmit: this.handleSubmit, loading: false, __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, { stacked: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 77
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
          lineNumber: 78
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', fluid: true, size: 'large', type: 'submit', __source: {
          fileName: _jsxFileName,
          lineNumber: 87
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2lkZW50aXR5LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIlNlbGVjdCIsIkJ1dHRvbiIsIkZvcm0iLCJHcmlkIiwiSGVhZGVyIiwiSW1hZ2UiLCJNZXNzYWdlIiwiU2VnbWVudCIsImNvdW50cnlPcHRpb25zIiwia2V5IiwidmFsdWUiLCJmbGFnIiwidGV4dCIsIlNlbGVjdFNjaG9vbCIsIklkZW50aXR5Iiwic3RhdGUiLCJzY2hvb2wiLCJjaXRpemVuIiwic3VibWl0dGVkU2Nob29sIiwic3VibWl0dGVkQ2l0aXplbiIsImhhbmRsZUNoYW5nZSIsImUiLCJuYW1lIiwic2V0U3RhdGUiLCJoYW5kbGVTdWJtaXQiLCJlbWFpbCIsImhlaWdodCIsIm1heFdpZHRoIiwiZGVmYXVsdFByb3BzIiwibWVzc2FnZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVM7Ozs7QUFDVCxBQUFTLEFBQVEsQUFBUSxBQUFNLEFBQU0sQUFBUSxBQUFPLEFBQVM7Ozs7Ozs7QUFFN0QsSUFBTTtPQUNKLEFBQ08sQUFDTDtTQUZGLEFBRVMsQUFDUDtRQUhGLEFBR1EsQUFDTjtRQUxKLEFBQXVCLEFBQ3JCLEFBSVE7QUFKUixBQUNFLENBRm1COztBQVN2QixJQUFNLGVBQWUsU0FBZixBQUFlLGVBQUE7eUJBQU0sQUFBQyx5Q0FBTyxhQUFSLEFBQW9CLHVCQUFzQixTQUExQyxBQUFtRDtnQkFBbkQ7a0JBQU4sQUFBTTtBQUFBO0dBQUE7QUFBM0I7O0lBRU0sQTs7Ozs7Ozs7Ozs7Ozs7Z05BS0osQTtjQUFRLEFBQ0UsQUFDUjtlQUZNLEFBRUcsQUFDVDt1QkFITSxBQUdXLEFBQ2pCO3dCQUpNLEFBSVksQTtBQUpaLEFBQ04sYSxBQWdCRixlQUFlLFVBQUEsQUFBQyxVQUFEO1VBQUEsQUFBTSxhQUFOLEFBQU07VUFBTixBQUFZLGNBQVosQUFBWTthQUFZLE1BQUEsQUFBSywyQ0FBTCxBQUFpQixNQUF6QyxBQUF3QixBQUF3QjtBLGFBRS9ELEEsZUFBZSxZQUFNO3dCQUNLLE1BREwsQUFDVTtVQURWLEFBQ1gsbUJBRFcsQUFDWDtVQURXLEFBQ0wsb0JBREssQUFDTCxBQUVkOztZQUFBLEFBQUssU0FBUyxFQUFFLGlCQUFGLEFBQW1CLE1BQU0sa0JBQXZDLEFBQWMsQUFBMkMsQUFDMUQ7QTs7Ozs7d0NBaEJtQixBQUNsQjtBQUNBO0FBQ0Q7Ozs7MkNBRXNCLEFBQ3JCO0FBQ0E7QUFDRDs7O1NBVUQ7O0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs2QkFFUzttQkFHSCxLQUhHLEFBR0U7VUFIRixBQUVMLGdCQUZLLEFBRUw7VUFGSyxBQUVHLGlCQUZILEFBRUc7VUFGSCxBQUVZLHlCQUZaLEFBRVk7VUFGWixBQUU2QiwwQkFGN0IsQUFFNkIsQUFHcEM7OzZCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsQUFBQyx1Q0FBSyxXQUFOLEFBQWdCLFVBQVMsT0FBTyxFQUFFLFFBQWxDLEFBQWdDLEFBQVUsVUFBVSxlQUFwRCxBQUFrRTtvQkFBbEU7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQU8sRUFBRSxVQUF0QixBQUFvQixBQUFZO29CQUFoQztzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyx5Q0FBTyxJQUFSLEFBQVcsTUFBSyxPQUFoQixBQUFzQixRQUFPLFdBQTdCLEFBQXVDO29CQUF2QztzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyx3Q0FBTSxLQUFQLEFBQVc7b0JBQVg7c0JBREYsQUFDRTtBQUFBO1VBRkosQUFDRSxBQUdBLDRDQUFBLEFBQUMsdUNBQUssTUFBTixBQUFXLFNBQVEsVUFBVSxLQUE3QixBQUFrQyxjQUFjLFNBQWhELEFBQXlEO29CQUF6RDtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQywwQ0FBUSxTQUFUO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt1Q0FDRSxBQUFDLHNCQUFELEFBQU07ZUFBTixBQUVFO3FCQUZGLEFBRWMsQUFDWjtjQUhGLEFBR08sQUFDTDtzQkFKRixBQUllLEFBQ2I7Y0FMRixBQUtPLEFBQ0w7ZUFORixBQU1TLEFBQ1A7a0JBQVUsS0FQWixBQU9pQjs7b0JBUGpCO3NCQURGLEFBQ0UsQUFTQTtBQVRBO0FBQ0UsMEJBUUYsQUFBQyx5Q0FBTyxPQUFSLEFBQWMsUUFBTyxPQUFyQixNQUEyQixNQUEzQixBQUFnQyxTQUFRLE1BQXhDLEFBQTZDO29CQUE3QztzQkFBQTtBQUFBO1NBbEJaLEFBQ0UsQUFDRSxBQUNFLEFBSUUsQUFDRSxBQVVFLEFBU2I7Ozs7O0EsQUFqRm9COztBQUFqQixBLFNBQ0csQTtZQUFlLEFBQ1YsQUFrRmQsQTtBQW5Gd0IsQUFDcEI7O2tCQWtGSixBQUFlIiwiZmlsZSI6ImlkZW50aXR5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wYW5ncG9uZC9TaXRlcy9OZXh0Z2Vuc29mdC9leGFtIn0=