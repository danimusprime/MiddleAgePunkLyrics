
var TwitterPackage = require('Twitter');

var secret = require('./secret');

var Twitter = new TwitterPackage(secret);

// we will randomly pick one of these items in this array
var arrOfMagicSayings = [
  "Walking is probably still honest",
  "Quincentuple Your Money, for your 401K",
  "These 4 wheels feel like home to Me, during my daily work commute. ",
  "I Don't wanna hear it!",
  "Smooth Jazz Lines.",
  "When you feel like you're a Human Party Trick to Entertain",
  "Count Your Bruises one by one, and laugh it off.",
  "Contemplate this on the Tree of Woe.",
  "Jet Black",
  "doublewhiskeycokenoice",
  "Better not tell you now, D4 is about to Start.",
  "Our vulnerability is all our insensitivity",
  "Yes - definitely listen to more Jawbreaker.",
  "Minimum wage is a gateway drug",
  "The Only Band That Matters",
  "Clown Cars on Cinderblocks",
  "MAXIMUM Piss & Vinegar",
  "A Headache With Pictures",
  "Wake me up if you play the Clash.",
  "To Shreds, you say?"
]
// calculate the random index (Math.random returns a double between 0 and 1)
var randomIndex = Math.round(Math.random() * arrOfMagicSayings.length);

// Call the stream function and pass in 'statuses/filter', our filter object, and our callback
Twitter.stream('user', {track: '@batenkaitosbot'}, function(stream) {

  // ... when we get tweet data...
  stream.on('data', function(tweet) {

    // print out the text of the tweet that came in
    console.log(tweet.text);

    //build our reply string grabbing the string in that randomIndex we've calculated
    var reply = arrOfMagicSayings[randomIndex];

    //call the post function to tweet something
    Twitter.post('statuses/update', {status: reply},  function(error, tweetReply, response){

      //if we get an error print it out
      if(error){
        console.log(error);
      }

      //print the text of the tweet we sent out
      console.log(tweetReply.text);
    });
  });

  // ... when we get an error...
  stream.on('error', function(error) {
    //print out the error
    console.log(error);
  });
});
