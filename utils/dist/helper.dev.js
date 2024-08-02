"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dbHandler = dbHandler;

var _databaseConnection = _interopRequireDefault(require("./databaseConnection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function dbHandler(fn, data) {
  return regeneratorRuntime.async(function dbHandler$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap((0, _databaseConnection["default"])());

        case 3:
          _context.next = 5;
          return regeneratorRuntime.awrap(fn(data));

        case 5:
          return _context.abrupt("return", _context.sent);

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", {
            status: "error",
            error: _context.t0.message || "Something went wrong"
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
}