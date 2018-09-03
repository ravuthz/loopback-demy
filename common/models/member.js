'use strict';

module.exports = function(Member) {

  /**
   * takes in a name and then says it
   * @param {string} myName Chuck in the name of the person
   * @param {Function(Error, object)} callback
   */

  Member.sayMyName = function(myName, callback) {
    var myResponse = 'Your name is ' + myName;
    console.log('(sayMyName) remote:', myName);
    callback(null, myResponse);
  };

  Member.beforeRemote('sayMyName', function(context, unused, next) {
    var args = JSON.stringify(context.args);
    console.log('(sayMyName) beforeRemote:', args);
    next();
  });

  Member.afterRemote('sayMyName', function(context, finalOutput, next) {
    var args = JSON.stringify(context.args);
    console.log('(sayMyName) afterRemote:', args);
    next();
  });

};
