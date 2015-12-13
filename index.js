'use strict';

module.exports = loader;

var jsxgettext = require('jsxgettext')
  , loaderUtils = require('loader-utils')
  , merge = require('lodash.merge')
  , fs = require('fs')
  , path = require('path');

function loader(content) {
  this.cacheable();
  var opts = merge({
    joinExisting: true,
    fromCode: 'utf-8'
  }, loaderUtils.parseQuery(this.query));
  if (!opts.keyword) opts.keyword = ['gettext'];
  if (!opts.output || !opts.outputDir) throw new Error('jsxgettext-loader needs output to be configured');
  var result = jsxgettext.generate([content], opts);
  fs.writeFileSync(path.join(opts.outputDir, opts.output), result, 'utf-8');
  return content;
}
