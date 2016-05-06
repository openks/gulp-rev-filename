# gulp-rev-filename

> Static asset revisioning by change content hash to filenames
> `unicorn.png` → `d41d8cd98f.png`

## Install

```
$ npm install --save-dev gulp-rev-filename
```


## Usage

```js
var gulp = require('gulp');
var rev = require('gulp-rev-filename');

gulp.task('default', function () {
	return gulp.src('src/*.png')
		.pipe(rev())
		.pipe(gulp.dest('dist'));
});
//`unicorn.png` → `unicorn.png`


gulp.task('default', function () {
	return gulp.src('src/*.png')
		.pipe(rev({showSize:true}))
		.pipe(gulp.dest('dist'));
});
//`unicorn.png` → `40*40_1.png`


gulp.task('default', function () {
	return gulp.src('src/*.png')
		.pipe(rev({showSize:true,showName:true}))
		.pipe(gulp.dest('dist'));
});
//`unicorn.png` → `unicorn_40*40_1.png`


gulp.task('default', function () {
	return gulp.src('src/*.png')
		.pipe(rev({showSize:true,showName:true,showHash:true}))
		.pipe(gulp.dest('dist'));
});
//`unicorn.png` → `unicorn_40*40_1_d41d8cd98f.png`

```
## API


### rev(obj)

#### obj.showName

		Type: `boolean`  

		Default: `false`

		if `true`

		`unicorn.png` → `unicorn.png`

#### obj.showSize

Type: `boolean`  

Default: `false`

if `true`

`unicorn.png` → `40*40_1.png`
> width:40px;
  height:40px;
  size:1k;


#### obj.showHash

	Type: `boolean`  

	Default: `false`

	if `true`

	`unicorn.png` → `d41d8cd98f.png`


## License

MIT © [openks](https://github.com/openks)
