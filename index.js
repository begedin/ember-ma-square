/* jshint node: true */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-ma-square',

  treeForApp: function() {
    return this.customTree(['component.js']);
  },

  treeForTemplates: function() {
    return this.customTree(['template.hbs']);
  },

  treeForAddon: function() {
    return this.customTree(['style.css']);
  },

  mapPath: function(relativePath) {
    var mappedPath;

    if (relativePath === 'component.js') {
      mappedPath = path.join('components', this.name + '.js');
    } else if (relativePath === 'template.hbs') {
      mappedPath = path.join('components', this.name + '.hbs');
    } else if (relativePath === 'style.css') {
      mappedPath = path.join('app/styles', this.name + '.css');
    }

    return mappedPath;
  },

  customTree: function(include) {

    var addon = this;
    return new Funnel(this.root, {
      include: include,
      getDestinationPath: function(relativePath) {
        return addon.mapPath(relativePath);
      }
    });
  }
};
