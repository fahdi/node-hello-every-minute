var schedule = require('node-schedule');

var j = schedule.scheduleJob('* * * * *', function(){
  console.log('Hello');
});
