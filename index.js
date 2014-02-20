
/**
 * Module dependencies.
 */

var open = require('viatropos-open-window');

/**
 * Expose `share`.
 */

module.exports = share;

/**
 * Share `url` to reddit.
 *
 * @see http://www.reddit.com/buttons/
 * @param {String} [url] Defaults to `window.location`
 */

function share(url) {
  return open('http://www.reddit.com/submit?url=' + encodeURIComponent(url || window.location));
}