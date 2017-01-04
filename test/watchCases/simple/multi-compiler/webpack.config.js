module.exports = [{
	name: "changing",
	entry: "./index.js",
	output: {
		filename: "./bundle.js"
	}
}, {
	name: "changing2",
	entry: "./shared-changing-file.js",
	output: {
		filename: "./bundle-2.js"
	}
}, {
	name: "static",
	entry: "./static-file.js",
	output: {
	filename: "./static.js"
	}
}];
