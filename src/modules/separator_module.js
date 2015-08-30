/* global
    UALog: false,
    UAModule: false,
    UASeparatorModule: true
*/
'use strict';


// ------------------------------------------
//  Logs the start of execution for this file
// ------------------------------------------
UALog.trace('Loading separator_module.js');


// define the Student class
UASeparatorModule = function () {
  // Call the parent constructor
  UAModule.call(this);

  this._id = 'separator';
  this.position = 40;
  this.template = 'uaSeparator';
  this.templateClass = 'separator';
  this.visible = true;
};


// inherit UAModule
UASeparatorModule.prototype = new UAModule();

_.extend(UASeparatorModule.prototype, {
  // correct the constructor pointer because it points to UAModule
  constructor: UASeparatorModule,

  configure: function(options) {
    UALog.trace('configure ' + this._id);
    // console.log(options);

    this.texts = _.defaults(options.texts || {}, this.texts);
  },

  texts: {
    default: {
      sep: 'or',
    },
  },

  text: function() {
    return this.getText('sep');
  },
});

/*
UserAccounts.startup(function(){
  if (!!this.oauth && !!this.password) {
    this.separator.visible = true;
  }
});
*/
