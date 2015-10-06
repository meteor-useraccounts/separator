// Package metadata for Meteor.js web platform (https://www.meteor.com/)
// This file is defined within the Meteor documentation at
//
//   http://docs.meteor.com/#/full/packagejs
//
// and it is needed to define a Meteor package
'use strict';


var Both = ['client', 'server'];
var Client = 'client';


Package.describe({
  name: 'useraccounts:separator',
  summary: 'UserAccounts separator package.',
  version: '2.0.0',
  git: 'https://github.com/meteor-useraccounts/separator.git',
});

Package.onUse(function pkgOnUse(api) {
  api.versionsFrom('1.0');

  // Logger
  api.use([
    'jag:pince@0.0.9',
    'underscore',
    'useraccounts:core@2.0.0',
  ], Both);

  api.imply([
    'useraccounts:core',
  ], Both);

  api.use([
    'templating',
  ], Client);

  api.addFiles([
    'src/templates/ua_separator.html',
  ], Client);

  // Base Class instantiation
  api.addFiles([
    'src/_globals.js',
    'src/logger.js',
    'src/modules/separator_module.js',
    'src/main.js',
  ], Both);
});
