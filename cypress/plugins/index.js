/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

//Allure configuration
 const allureWriter = require('@shelex/cypress-allure-plugin/writer');
 const selectTestsWithGrep = require('cypress-select-tests/grep');

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
	/* on('file:preprocessor', selectTestsWithGrep(config));
	allureWriter(on, config);
	return config; */
}
module.exports = (on, config) => {
	// inside config.browsers array each object has information like
	// {
	//   name: 'chrome',
	//   channel: 'canary',
	//   family: 'chromium',
	//   displayName: 'Canary',
	//   version: '80.0.3966.0',
	//   path:
	//    '/Applications/Canary.app/Contents/MacOS/Canary',
	//   majorVersion: 80
	// }
	return {
	  browsers: config.browsers.filter((b) => b.family === 'chromium'),
	}
  }