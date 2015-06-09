/* jshint node: true */
'use strict';

var fs = require('fs');
var path = require('path');

module.exports = {
  name: 'ember-ma-square',

  preBuild: function() {
    this.copyComponent();
    this.copyTemplate();
    this.copyStyle();
  },

  copyComponent: function() {
    var componentInput = this.componentInputPath();
    var componentOutput = this.componentOutputPath();

    if (fs.existsSync(componentInput)) {
      console.log('component input exists!');
      fs.symlinkSync(componentInput, componentOutput);
      fs.unlinkSync(componentInput);
    }
  },

  copyTemplate: function() {
    var templateInput = this.templateInputPath();
    var templateOutput = this.templateOutputPath();

    if (fs.existsSync(templateInput)) {
      console.log('component input exists!');
      fs.symlinkSync(templateInput, templateOutput);
      fs.unlinkSync(templateInput);
    }
  },

  copyStyle: function() {
    var styleInput = this.styleInputPath();
    var styleOutput = this.styleOutputPath();

    if (fs.existsSync(styleInput)) {
      console.log('component input exists!');
      fs.symlinkSync(styleInput, styleOutput);
      fs.unlinkSync(styleInput);
    }
  },

  tmpDir: function() {
    return path.join(process.cwd(), 'tmp');
  },

  componentInputPath: function() {
    return path.join(this.tmpDir(), 'addon/component.js');
  },

  componentOutputPath: function() {
    return path.join(this.tmpDir(), 'app/components/' + this.name + '.js');
  },

  templateInputPath: function() {
    return path.join(this.tmpDir(), 'addon/template.hbs');
  },

  templateOutputPath: function() {
    return path.join(this.tmpDir(), 'app/templates/' + this.name + '.hbs');
  },

  styleInputPath: function() {
    return path.join(this.tmpDir(), 'addon/style.scss');
  },

  styleOutputPath: function() {
    return path.join(this.tmpDir(), 'addon/styles/' + this.name + '.scss');
  }
};
