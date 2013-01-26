
exports.directive = function() {
  
};
exports.filter = function() {
  
};

var read = require("fs").readFileSync;

module.exports.__express = function(path, options, fn){
  if ('function' == typeof options) {
    fn = options, options = {};
  }

  try {
    fn(null, read(path, 'utf8'));
  } catch (err) {
    fn(err);
  }
};