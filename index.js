/* jshint node: true */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-ma-square',

  /*included: function(app) {
    app.import('vendor/style.css');
  },*/

  treeForApp: function() {
    var addonName = this.name;
    var tree = new Funnel(this.contentPath(), {
      include: ['component.js', 'style.css'],
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

  treeForAddon: function() {
    var addonName = this.name;
    var tree = new Funnel(this.treeGenerator(this.addonPath()), {
      srcDir: '/vendor',
      destDir: '/app/styles',
      include: ['style.css'],
      getDestinationPath: function(relativePath) {
        if (relativePath === 'style.css') {
          return addonName + '.css';
        }

      }
    });

    return tree;
  },

  addonPath: function() {
    return 'node_modules/ember-ma-square'
  },

  contentPath: function() {
    return path.join(this.addonPath(), 'content');
  },

  vendorPath: function() {
    return path.join(this.addonPath(), 'vendor');
  }
};
