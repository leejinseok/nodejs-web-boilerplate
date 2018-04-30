module.exports = {
  css: {
    path: {
      src: [
        './resources/dist/css/**/*.css',
        '!./resources/dist/css/**/*.min.css'
      ],
      dist: './resources/dist/css'
    }
  },
  scss: {
    path: {
      src: './resources/src/scss/**/*.scss',
      dist: './resources/dist/css'
    }
  },
  js: {
    path: {
      src: [
        './resources/src/js/**/*.js'
      ],
      dist: './resources/dist/js'
    }
  }
}
