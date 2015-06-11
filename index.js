/* jshint node: true */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var compileSass = require('broccoli-sass');

module.exports = {
  name: 'ember-ma-square',

  treeForApp: function() {
    return this.buildTree(this.root, ['component.js', 'library.js']);
  },

  treeForTemplates: function() {
    return this.buildTree(this.root, ['template.hbs']);
  },

  treeForAddon: function() {
    var cssTree = compileSass([this.root], 'style.scss', 'style.css');
    return this.buildTree(cssTree, ['style.css']);
  },

  buildTree: function(sourceTree, includedFiles) {
    var addon = this;

    return new Funnel(sourceTree, {
      include: includedFiles,
      getDestinationPath: function(relativePath) {
        return addon.mapFile(relativePath);
      }
    });
  },

  mapFile: function(relativePath) {
    if (relativePath === 'component.js') {
      return path.join('components', this.name + '.js');
    } else if (relativePath === 'library.js') {
      return path.join('lib', this.name + '.js');
    } else if (relativePath === 'template.hbs') {
      return path.join('components', this.name + '.hbs');
    } else if (relativePath === 'style.css') {
      return path.join('addon/styles', this.name + '.css');
    }
  }
};
