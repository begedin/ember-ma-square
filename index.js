/* jshint node: true */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-ma-square',

  treeForApp: function() {
    var addonName = this.name;
    var tree = new Funnel(this.contentPath(), {
      include: ['component.js'],
      getDestinationPath: function(relativePath) {
        if (relativePath === 'component.js') {
          return 'components/' + addonName + '.js';
        }

        return relativePath;
      }
    });

    return tree;
  },

  treeForTemplates: function() {
    var addonName = this.name;
    var tree = new Funnel(this.contentPath(), {
      include: ['template.hbs'],
      getDestinationPath: function(relativePath) {
        if (relativePath === 'template.hbs') {
          return 'components/' + addonName + '.hbs';
        }

        return relativePath;
      }
    });

    return tree;
  },

  treeForStyles: function() {
    var addonName = this.name;
    var tree = new Funnel(this.contentPath(), {
      include: ['style.css'],
      getDestinationPath: function(relativePath) {
        if (relativePath === 'style.css') {
          return 'styles/' + addonName + '.css';
        }

        return relativePath;
      }
    });

    return this.compileStyles(tree);
  },

  contentPath: function() {
    return 'node_modules/ember-ma-square/content';
  }
};
