`
var TwitterPackage = require('Twitter');

var secret = require('./secret');

var Twitter = new TwitterPackage(secret);

setInterval(tweetIt, 9000*50*60);

tweetIt();

function tweetIt() {

  // we will randomly pick one of these items in this array
  var arrOfMagicSayings = [
  "Walking is probably still honest",
  "Quincentuple Your Money, for your 401K",
  "These 4 wheels feel like home to Me, during my daily work commute. ",
  "I Don't wanna hear it!",
  "Smooth Jazz Lines.",
  "When you feel like you're a Human Party Trick to Entertain your co-workers at lunch",
  "Count Your ego's bruises one by one, and drink it off.",
  "Contemplate this on the Tree of Woe.",
  "I am Jet Black, I am so old.",
  "doublewhiskeycokenoice, got me into trouble at the company christmas party",
  "Better not tell you now, D4 is about to Start.",
  "Our vulnerability is all our insensitivity, said the HR director.",
  "You're not punk and I am telling everyone.",
  "Minimum wage is still a gateway drug",
  "The Only Band That Matters",
  "Clown Cars on Cinderblocks",
  "MAXIMUM Piss & Vinegar",
  "A Headache With Pictures",
  "Wake me up if you play the Clash.",
  "To Shreds, you say?",
  "Pay to write, pay to play, Pay to cum, pay to fight!"
  ]
  // calculate the random index (Math.random returns a double between 0 and 1)
  var randomIndex = Math.round(Math.random() * arrOfMagicSayings.length);

    //build our reply string grabbing the string in that randomIndex we've calculated
    var tweet = arrOfMagicSayings[randomIndex];

    //call the post function to tweet something
    Twitter.post('statuses/update', {status: tweet},  function(error, tweet, response){
      if(error){
        console.log('Something went wrong');
      }``
      console.log('Success');  // Tweet body.
      console.log(response);  // Raw response object.
    });
  };
`
