/* jshint node: true */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var compileSass = require('broccoli-sass');

module.exports = {
  name: 'ember-ma-square',

  treeForApp: function() {
    var addonName = this.name;
    return new Funnel(this.root, {
      include: ['component.js'],
      getDestinationPath: function(relativePath) {
        if (relativePath === 'component.js') {
          return path.join('components', addonName + '.js');
        }
      }
    });
  },

  treeForTemplates: function() {
    var addonName = this.name;
    return new Funnel(this.root, {
      include: ['template.hbs'],
      getDestinationPath: function(relativePath) {
        if (relativePath === 'template.hbs') {
          return path.join('components', addonName + '.hbs');
        }
      }
    });
  },

  treeForAddon: function() {
    var addonName = this.name;

    var compiledTree = compileSass([this.root], 'style.scss', 'style.css');

    return new Funnel(compiledTree, {
      include: ['style.css'],
      getDestinationPath: function(relativePath) {
        if (relativePath === 'style.css') {
          return path.join('addon/styles', addonName + '.css');
        }
      }
    });
  },
};
