module.exports = {
  plugins: {
    autoprefixer: {},
	"postcss-aspect-ratio-mini": {},
	"postcss-viewport-units":{},
	"postcss-px-to-viewport": {
      viewportWidth: 1366,
      viewportHeight: 768,
      unitPrecision: 3,
      viewportUnit: 'vw',
      selectorBlackList: ['novw', '.ignore', '.hairlines'],
      minPixelValue: 1,
      mediaQuery: false
    }
  }
}
