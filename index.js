
exports.directive = function() {
  
};
exports.filter = function() {
  
};

var read = require("fs").readFileSync;

exports.renderFile = function(path, options, fn){
  if ('function' == typeof options) {
    fn = options, options = {};
  }

  try {
    fn(null, read(path, 'utf8'));
  } catch (err) {
    fn(err);
  }
};

exports.__express = exports.renderFile;
exports.__isomorphic = exports.renderFile;