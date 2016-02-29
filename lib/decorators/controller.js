'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Controller = Controller;

var _moduleContainer = require('../core/moduleContainer');

var _moduleContainer2 = _interopRequireDefault(_moduleContainer);

var _NodeSpringUtil = require('../core/NodeSpringUtil');

var _NodeSpringUtil2 = _interopRequireDefault(_NodeSpringUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Controller decorator
 * @author calbertts
 */

function Controller() {

  var args = arguments[0];
  var options = {};

  var addModule = function addModule(target) {
    target.moduleType = 'controller';
    _moduleContainer2.default.addController(target, options.path || target.name);
  };

  if (arguments.length === 0 || arguments.length === 1 && !_NodeSpringUtil2.default.isClass(arguments[0])) {
    options = arguments[0] || {};
    return addModule;
  } else {
    var target = arguments[0];
    target.type = 'controller';

    addModule(target);
  }
}
//# sourceMappingURL=controller.js.map