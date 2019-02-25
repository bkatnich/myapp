/**
 * bController.js
 *
 * Created by Britton Katnich on February 16th, 2019.
 * Copyright © 2018 Britton Katnich. All rights reserved.
 */
'use strict';

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _winston = _interopRequireDefault(require("winston"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Model
var B = _mongoose.default.model('B'); // Routes


var router = _express.default.Router();
/**
 * Get all
 */


router.get('/',
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _winston.default.debug('Get all called');

            res.status(200).send("Get all B called successfully");
            /*try
            {
                const bList = await B.find({})
                    .skip(re.query.skip)
                    .limit(req.query.limit); 
                 res.send(aList);
            }
            catch (err) 
            {
                res.status(500).json(err);
            }*/

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
/**
 * Get one
 */

router.get('/:id',
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _winston.default.debug('Get called for id: ' + req.params.id);

            res.status(200).send("Get one B called successfully with id " + req.params.id);
            /*try
            {
                const b = await B.findOne({_id: req.params.id}, {}); 
                
                if (!b) 
                {
                    res.status(404).json('{ message: b for id ' + req.params.id + ' not found }');
                }
                else
                {
                    res.send(portal);
                }
            }
            catch (err) 
            {
                res.status(500).json(err);
            } */

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
/**
 * Delete
 */

router.delete('/:id',
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _winston.default.debug('Delete called for id: ' + req.params.id);

            res.status(200).send("Delete B called successfully with id " + req.params.id);
            /*try 
            {
                const b = await B.findByIdAndDelete({_id: req.params.id});
                
                if (!b) 
                {
                    res.status(404).json('{ message: b for id ' + req.params.id + ' not found }');
                }
                else
                {
                    res.json('{ message: deleted }')
                }
            }     
            catch (err) 
            {
              if (err.name == 'ValidationError') 
              {
                  res.status(400).json(err);
              } 
              else 
              {
                  res.status(500).json(err);
              }
            }*/

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
/**
 * Post
 */

router.post('/',
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _winston.default.debug('Post called with body: ' + req.body);

            res.status(200).send("Post an B called successfully with body: " + req.body);
            /*try 
            {
                const b = new B(req.body);
            
                await b.save();
                 res.send(b);
            }     
            catch (err) 
            {
              if (err.name == 'ValidationError') 
              {
                  res.status(400).json(err);
              } 
              else 
              {
                  res.status(500).json(err);
              }
            }*/

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
/**
 * Put
 */

router.put('/',
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _winston.default.debug('Put called with body: ' + req.body);

            res.status(200).send("Put an B called successfully with body: " + req.body);
            /*try 
            {
                const b = await B.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true});
                
                if (!b) 
                {
                    res.status(404).json('{ message: b for id ' + req.params.id + ' not found }');
                }
                else
                {
                    res.send(b)
                }
                 res.send(portal);
            }     
            catch (err) 
            {
              if (err.name == 'ValidationError') 
              {
                  res.status(400).json(err);
              } 
              else 
              {
                  res.status(500).json(err);
              }
            }*/

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());
module.exports = router;