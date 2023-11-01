/**
 * Commitlint config.
 *
 * @description Commitlint config.
 * @see https://commitlint.js.org/#/
 */

module.exports = {
	extends : [ 'gitmoji' ],
	rules   : {
		'header-max-length' : [ 0, 'always', 100 ],
	},
}
