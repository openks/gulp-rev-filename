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
//`unicorn.png` → `d41d8cd98f.png`
```
## API


### rev(obj)

#### obj.showSize

Type: `boolean`  

Default: `false`

if `true`
`unicorn.png` → `d41d8cd98f_40*40_1.png`
> width:40px;
  height:40px;
  size:1k;


## License

MIT © [openks](https://github.com/openks)
