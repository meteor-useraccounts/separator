/* global
    UserAccounts: false,
    UALog: false,
    UASeparatorModule: false
*/
'use strict';


// ------------------------------------------
//  Logs the start of execution for this file
// ------------------------------------------
UALog.trace('Loading main.js');


UALog.trace('Adding separator module');
var separator = new UASeparatorModule();

UserAccounts.registerModule(separator);
