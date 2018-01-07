'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fieldsEnum = exports.resolveResultbyField = undefined;

var _jqljs = require('jqljs');

var _jqljs2 = _interopRequireDefault(_jqljs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fieldsEnum = {
  SCHOOL: 's',
  DISTRICT: 'd',
  AMPHOE: 'a',
  PROVINCE: 'p'
}; // const JQL = require('jqljs')


var preprocess = function preprocess(data) {
  if (!data.data[0].length) {
    // non-compacted database
    return data;
  }

  var expanded = [];
  var lookup = data.lookup.split('|');
  var words = data.words.split('|');

  var text = function text(_text) {
    var repl = function repl(m) {
      var ch = m.charCodeAt(0);
      return words[ch < 97 ? ch - 65 : 26 + ch - 97];
    };
    if (typeof _text === 'number') {
      _text = lookup[_text];
    }
    return _text.replace(/[A-Z]/gi, repl);
  };

  data.data.forEach(function (provinceEntry) {
    var province = provinceEntry[0];
    var amphurList = provinceEntry[1];
    amphurList.forEach(function (amphurEntry) {
      var amphur = amphurEntry[0];
      var districtList = amphurEntry[1];
      districtList.forEach(function (districtEntry) {
        var district = districtEntry[0];
        var schoolList = districtEntry[1];
        schoolList.forEach(function (school) {
          expanded.push({
            s: text(school),
            d: text(district),
            a: text(amphur),
            p: text(province)
          });
        });
      });
    });
  });
  return expanded;
};
var DB = new _jqljs2.default(preprocess(require('../../static/school.json')));

var resolveResultbyField = function resolveResultbyField(type, searchStr) {
  var possibles = [];
  try {
    possibles = DB.select('*').where(type).match('^' + searchStr).orderBy(type).fetch();
  } catch (e) {
    return [];
  }
  return possibles;
};

exports.resolveResultbyField = resolveResultbyField;
exports.fieldsEnum = fieldsEnum;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdHlwZWFoZWFkL2ZpbmRlci5qcyJdLCJuYW1lcyI6WyJKUUwiLCJmaWVsZHNFbnVtIiwiU0NIT09MIiwiRElTVFJJQ1QiLCJBTVBIT0UiLCJQUk9WSU5DRSIsInByZXByb2Nlc3MiLCJkYXRhIiwibGVuZ3RoIiwiZXhwYW5kZWQiLCJsb29rdXAiLCJzcGxpdCIsIndvcmRzIiwidGV4dCIsInJlcGwiLCJjaCIsIm0iLCJjaGFyQ29kZUF0IiwicmVwbGFjZSIsImZvckVhY2giLCJwcm92aW5jZSIsInByb3ZpbmNlRW50cnkiLCJhbXBodXJMaXN0IiwiYW1waHVyIiwiYW1waHVyRW50cnkiLCJkaXN0cmljdExpc3QiLCJkaXN0cmljdCIsImRpc3RyaWN0RW50cnkiLCJzY2hvb2xMaXN0IiwicHVzaCIsInMiLCJzY2hvb2wiLCJkIiwiYSIsInAiLCJEQiIsInJlcXVpcmUiLCJyZXNvbHZlUmVzdWx0YnlGaWVsZCIsInR5cGUiLCJzZWFyY2hTdHIiLCJwb3NzaWJsZXMiLCJzZWxlY3QiLCJ3aGVyZSIsIm1hdGNoIiwib3JkZXJCeSIsImZldGNoIiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLEFBQU87Ozs7OztBQUVQLElBQU07VUFBYSxBQUNULEFBQ1I7WUFGaUIsQUFFUCxBQUNWO1VBSGlCLEFBR1QsQUFDUjtZQUpGLEFBQW1CLEFBSVA7QUFKTyxBQUNqQixHQUpGOzs7QUFVQSxJQUFNLGFBQWEsU0FBYixBQUFhLGlCQUFRLEFBQ3pCO01BQUksQ0FBQyxLQUFBLEFBQUssS0FBTCxBQUFVLEdBQWYsQUFBa0IsUUFBUSxBQUN4QjtBQUNBO1dBQUEsQUFBTyxBQUNSO0FBRUQ7O01BQU0sV0FBTixBQUFpQixBQUNqQjtNQUFJLFNBQVMsS0FBQSxBQUFLLE9BQUwsQUFBWSxNQUF6QixBQUFhLEFBQWtCLEFBQy9CO01BQUksUUFBUSxLQUFBLEFBQUssTUFBTCxBQUFXLE1BQXZCLEFBQVksQUFBaUIsQUFFN0I7O01BQU0sT0FBTyxxQkFBUSxBQUNuQjtRQUFNLE9BQU8sU0FBUCxBQUFPLFFBQUssQUFDaEI7VUFBTSxLQUFLLEVBQUEsQUFBRSxXQUFiLEFBQVcsQUFBYSxBQUN4QjthQUFPLE1BQU0sS0FBQSxBQUFLLEtBQUssS0FBVixBQUFlLEtBQUssS0FBQSxBQUFLLEtBQXRDLEFBQU8sQUFBb0MsQUFDNUM7QUFIRCxBQUlBO1FBQUksT0FBQSxBQUFPLFVBQVgsQUFBb0IsVUFBVSxBQUM1QjtjQUFPLE9BQVAsQUFBTyxBQUFPLEFBQ2Y7QUFDRDtXQUFPLE1BQUEsQUFBSyxRQUFMLEFBQWEsV0FBcEIsQUFBTyxBQUF3QixBQUNoQztBQVRELEFBV0E7O09BQUEsQUFBSyxLQUFMLEFBQVUsUUFBUSx5QkFBaUIsQUFDakM7UUFBTSxXQUFXLGNBQWpCLEFBQWlCLEFBQWMsQUFDL0I7UUFBTSxhQUFhLGNBQW5CLEFBQW1CLEFBQWMsQUFDakM7ZUFBQSxBQUFXLFFBQVEsdUJBQWUsQUFDaEM7VUFBTSxTQUFTLFlBQWYsQUFBZSxBQUFZLEFBQzNCO1VBQU0sZUFBZSxZQUFyQixBQUFxQixBQUFZLEFBQ2pDO21CQUFBLEFBQWEsUUFBUSx5QkFBaUIsQUFDcEM7WUFBTSxXQUFXLGNBQWpCLEFBQWlCLEFBQWMsQUFDL0I7WUFBTSxhQUFhLGNBQW5CLEFBQW1CLEFBQWMsQUFDakM7bUJBQUEsQUFBVyxRQUFRLGtCQUFVLEFBQzNCO21CQUFBLEFBQVM7ZUFDSixLQURTLEFBQ1QsQUFBSyxBQUNSO2VBQUcsS0FGUyxBQUVULEFBQUssQUFDUjtlQUFHLEtBSFMsQUFHVCxBQUFLLEFBQ1I7ZUFBRyxLQUpMLEFBQWMsQUFJVCxBQUFLLEFBRVg7QUFOZSxBQUNaO0FBRkosQUFRRDtBQVhELEFBWUQ7QUFmRCxBQWdCRDtBQW5CRCxBQW9CQTtTQUFBLEFBQU8sQUFDUjtBQTFDRDtBQTJDQSxJQUFNLEtBQUssQUFBSSxvQkFBSSxXQUFXLFFBQTlCLEFBQVcsQUFBUSxBQUFXLEFBQVE7O0FBRXRDLElBQU0sdUJBQXVCLFNBQXZCLEFBQXVCLHFCQUFBLEFBQUMsTUFBRCxBQUFlLFdBQXNCLEFBQ2hFO01BQUksWUFBSixBQUFnQixBQUNoQjtNQUFJLEFBQ0Y7Z0JBQVksR0FBQSxBQUFHLE9BQUgsQUFBVSxLQUFWLEFBQ1QsTUFEUyxBQUNILE1BREcsQUFFVCxZQUZTLEFBRUMsV0FGRCxBQUdULFFBSFMsQUFHRCxNQUhYLEFBQVksQUFJVCxBQUNKO0FBTkQsSUFNRSxPQUFBLEFBQU8sR0FBRyxBQUNWO1dBQUEsQUFBTyxBQUNSO0FBQ0Q7U0FBQSxBQUFPLEFBQ1I7QUFaRCxBQWNBOztRQUFBLEFBQVM7UUFBVCxBQUErQiIsImZpbGUiOiJmaW5kZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3Bhbmdwb25kL1NpdGVzL05leHRnZW5zb2Z0L2V4YW0ifQ==