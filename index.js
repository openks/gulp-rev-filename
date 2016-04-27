'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var revHash = require('rev-hash');
var modifyFilename = require('modify-filename');


function transformFilename(file) {
	var hash= revHash(file.contents)
	file.path = modifyFilename(file.path, function (filename, ext) {
		return  hash + ext;
	});
};

var plugin = function () {
	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}
		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-rev', 'Streaming not supported'));
			return;
		}
		transformFilename(file);
		cb(null, file);
	}, function (cb) {
		cb();
	});
};

module.exports = plugin;
