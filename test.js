var request = require('request');

const apiToken = '5ias184wv9i776rfup30j2vhkhwxekfufysn3';
const username =  'distelli';

var query = "create app blah"
var queryArray = query.split(" ");
var appName = queryArray[2];
console.log(appName);

request.put({headers: {'content-type' : 'application/json'}, url: 'https://api.distelli.com/' + username + '/apps/' + appName + '?apiToken=' + apiToken}), function(error, response, body){
  console.log(error);
  console.log(body);
  console.log(response.statusCode);
  if(!error && response.statusCode == 200){
    var contents = JSON.parse(body);
    console.log(contents);
  } else{
    console.log("DIDNT WORK");
  }
}