/* global
    s: false,
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
UASeparatorModule = function _UASeparatorModule() {
  var self = this;

  // Call the parent constructor
  UAModule.call(this);

  self._id = 'separator';
  self.position = 40;
  self.skins = {};
  self.template = 'uaSeparator';
  self.templateClass = 'separator';
  self.visible = true;
};


// inherit UAModule
UASeparatorModule.prototype = new UAModule();


_.extend(UASeparatorModule.prototype, {
  constructor: UASeparatorModule,

  /**
   *
   */
  texts: {
    'default': {
      sep: 'or',
    },
  },

  /**
   *
   */
  textTransforms: {
    'default': null,
    sep: s.titleize,
  },

  configure: function configure(options) {
    var self = this;

    UALog.trace('UATitleModule.configure');

    self.texts = _.defaults(options.texts || {}, self.texts);
  },
});
