const gulp = require("gulp");
const themeKit = require("@Shopify/themekit");
const sass = require("gulp-sass")(require("sass"));

gulp.task("sass", function () {
	return gulp.src("styles/custom-styles.scss").pipe(sass()).pipe(gulp.dest("assets"));
});
