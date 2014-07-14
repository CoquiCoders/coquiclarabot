/*
 * Description:
 * Display a random tweet from twitter about a subject
 *
 * Commands:
 *  hubot <keyword> tweet - Returns a link to a tweet about <keyword>
 */

var http = require('http');
var sheetURL = "https://docs.google.com/spreadsheet/pub?key=0An1dKay68b2odE1OZmRQamRreUtJMlBOWGFqNUtJaGc&single=true&gid=0&output=csv"
module.exports = function(robot) {
  return robot.hear(/(.+)/i, function(msg) {
    return msg.http(sheetURL).get()(function(err, res, body) {
      var body = body.split("\n");
      var random = Math.floor(Math.random() * (body.length - 1));
      return msg.send(body[random]);
    });
  });
}
