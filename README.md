### Setup
* `npm install -g protractor`
* `npm install`

### Tasks
* `npm run build`
  * Production mode - runs Webpack, which will transpile, concatenate, and compress (collectively, "bundle") all assets and modules into `dist/bundle.js`. It also prepares `index.html` to be used as application entry point, links assets and created dist version of our application.
* `npm run serve`
  * starts a dev server via `webpack-dev-server`, serving the client folder.
* `npm run e2e`
  * run protractor test
* `npm run test`
  * run unit testing