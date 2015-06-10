/* jshint node: true */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-ma-square',

  treeForApp: function() {
    var addonName = this.name;
    var tree = new Funnel(this.root, {
      include: ['component.js', 'style.css'],
      getDestinationPath: function(relativePath) {
        if (relativePath === 'component.js') {
          return path.join('components', addonName + '.js');
        }

        return relativePath;
      }
    });

    return tree;
  },

  treeForTemplates: function() {
    var addonName = this.name;
    var tree = new Funnel(this.root, {
      include: ['template.hbs'],
      getDestinationPath: function(relativePath) {
        if (relativePath === 'template.hbs') {
          return path.join('components', addonName + '.hbs');
        }

        return relativePath;
      }
    });

    return tree;
  },

  treeForAddon: function() {
    var addonName = this.name;
    var tree = new Funnel(this.root, {
      include: ['style.css'],
      getDestinationPath: function(relativePath) {
        if (relativePath === 'style.css') {
          return path.join('app/styles', addonName + '.css');
        }

      }
    });

    return tree;
  }
};
