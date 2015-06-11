/* jshint node: true */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var compileSass = require('broccoli-sass');

module.exports = {
  name: 'ember-ma-square',

  treeForApp: function() {
    var addon = this;
    return new Funnel(this.root, {
      include: ['component.js'],
      getDestinationPath: function(relativePath) {
        return addon.mapFile(relativePath);
      }
    });
  },

  treeForTemplates: function() {
    var addon = this;
    return new Funnel(this.root, {
      include: ['template.hbs'],
      getDestinationPath: function(relativePath) {
        return addon.mapFile(relativePath);
      }
    });
  },

  treeForAddon: function() {
    var addon = this;

    var compiledTree = compileSass([this.root], 'style.scss', 'style.css');

    return new Funnel(compiledTree, {
      include: ['style.css'],
      getDestinationPath: function(relativePath) {
        return addon.mapFile(relativePath);
      }
    });
  },

  mapFile: function(relativePath) {
    if (relativePath === 'component.js') {
      return path.join('components', this.name + '.js');
    } else if (relativePath === 'template.hbs') {
      return path.join('components', this.name + '.hbs');
    } else if (relativePath === 'style.css') {
      return path.join('addon/styles', this.name + '.css');
    }
  }
};
