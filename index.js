"use strict";

var Chance = require('chance');
var chance = new Chance();
var semver = require('semver');

function getNumberToChange () {
  var possibleChanges = [ "major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease" ];
  var i = chance.natural({ min: 0, max: possibleChanges.length - 1 });

  return possibleChanges[i];
}

function getNewVersion (currentVersion) {
  return semver.inc(currentVersion, getNumberToChange());
}

module.exports = {
  getNewVersion: getNewVersion
};
