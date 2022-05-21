module.exports = {
  content: [
    './assets/src/sass/**/*.scss',
    '/assets/src/js/**/+.js',
    './index.html',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    colors: {
      black: '#000',
      white: '#fff',
      primary: '#f88906',
      secondary: '#129e9e',
      blue: '#051b2d',
      gray: '#e5e5e5',
      grayText: '#828282',
      grayTextLight: '#aaaaaa',
      purple: '#cf71d1',
      transparent: 'transparent',
      border: '#ededed',
    },
    fontFamily: {
      primary: '"Montserrat", sans-serif',
      secondary: '"Raleway", sans-serif',
    },
    extend: {},
  },
  plugins: [],
}