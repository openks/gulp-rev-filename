'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var revHash = require('rev-hash');
var imageinfo = require('imageinfo');
var modifyFilename = require('modify-filename');


function transformFilename(file,opts) {
	var hash= revHash(file.contents)
	file.path = modifyFilename(file.path, function (filename, ext) {
		if(opts.showSize==true){
			var info = imageinfo(file.contents);
			var size = parseInt(file.contents.length/1024,10);
			return  hash+"_"+info.width+"x"+info.height+"_"+size+ ext;
		}else{
			return  hash+ ext;
		}
	});
};

var plugin = function (opts) {
	opts = opts || {};
	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}
		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-rev', 'Streaming not supported'));
			return;
		}
		transformFilename(file,opts);
		cb(null, file);
	}, function (cb) {
		cb();
	});
};

module.exports = plugin;
