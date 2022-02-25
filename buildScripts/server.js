import browsersync from 'browser-sync';

browsersync({
  server: ["src/pages", "src"],
  files: ["src/*.html", "src/css/**/*.css", "src/js/**/*.js"]
});
