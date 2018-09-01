'use strict';

module.exports = function(Member) {

  /**
   * takes in a name and then says it
   * @param {string} myName Chuck in the name of the person
   * @param {Function(Error, object)} callback
   */

  Member.sayMyName = function(myName, callback) {
    var myResponse = 'Your name is ' + myName;
    // TODO
    callback(null, myResponse);
  };

};
