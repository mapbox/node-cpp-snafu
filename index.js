var NodeCppSkel = require('node-cpp-skel');
var moduleOne = require('module-one');
var moduleTwo = require('module-two');

moduleOne.hey.shout('waka', {}, function(err, res) {
  if (err) throw err;
  console.log(res);

  moduleTwo.hey.shout('waka', {}, function(err, res) {
    if (err) throw err;
    console.log(res);

    moduleOne.hey.shout('louder', {louder: true}, function(err, res) {
      if (err) throw err;
      console.log(res);

      moduleTwo.hey.shout('louder', {louder: true}, function(err, res) {
        if (err) throw err;
        console.log(res);
      })
    });
  });
});