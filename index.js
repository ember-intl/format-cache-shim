/* jshint node: true */
'use strict';

const path = require('path');
const mergeTrees = require('broccoli-merge-trees');
const UnwatchedDir = require('broccoli-source').UnwatchedDir;

const sourcePath = path.join(path.dirname(require.resolve('intl-format-cache')), 'src');

module.exports = {
  name: 'intl-format-cache',

  treeForAddon(tree) {
    let formatCacheTree = new UnwatchedDir(sourcePath);
    let addonTree = mergeTrees([formatCacheTree, tree], { overwrite: true });

    return this._super.treeForAddon.call(this, addonTree);
  }
};
