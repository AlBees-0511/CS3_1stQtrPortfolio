console.log("Hey there! What's your name?")

rli = require('readline').createInterface({input:process.stdin})

rli.on('line', greet)
function greet(name) {
  console.log("Hello, " + name + "!")
  console.log("Do you want to play a game " + name + "?")
}

setTimeout(function() {
  console.log("Oh, bye I guess... :(");
}, 10000);