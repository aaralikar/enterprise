#!/usr/bin/env node

var fs = require('fs'),
	filename = 'package.json',
	file = require('../' + filename),
	tag = '-develop';

if (!file.version.includes(tag)) {
	file.version = file.version + tag;
}

fs.writeFile(filename, JSON.stringify(file, null, 2), function (err) {
	if (err) return console.log(err);
	console.log(JSON.stringify(file));
	console.log('writing to ' + filename);
});
