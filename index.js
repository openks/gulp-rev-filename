'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var revHash = require('rev-hash');
var imageinfo = require('imageinfo');
var modifyFilename = require('modify-filename');


function transformFilename(file, opts) {
  var hash = revHash(file.contents);
  var ret_path = "";
  file.path = modifyFilename(file.path, function(filename, ext) {
    if (opts.showName == true) {
      ret_path += filename;
    }
    if (opts.showSize == true) {
      var info = imageinfo(file.contents);
      var size = parseInt(file.contents.length / 1024, 10);
      ret_path += "_" + info.width + "x" + info.height + "_" + size;
    }
    if (opts.showHash == true) {
      ret_path += "_" + hash;
    }
    if (ret_path.length === 0) {
      ret_path = filename;
    }
    return ret_path + ext;
  });
}
;

var plugin = function(opts) {
  opts = opts || {};
  return through.obj(function(file, enc, cb) {
    if (file.isNull()) {
      cb(null, file);
      return;
    }
    if (file.isStream()) {
      cb(new gutil.PluginError('gulp-rev', 'Streaming not supported'));
      return;
    }
    transformFilename(file, opts);
    cb(null, file);
  }, function(cb) {
    cb();
  });
};

module.exports = plugin;
