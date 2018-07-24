
var TwitterPackage = require('twitter');

var secret = require('./secret');

var Twitter = new TwitterPackage(secret);

setInterval(tweetIt, 1000*60*60)

tweetIt();

  function tweetIt() {

    // we will randomly pick one of these items in this array
    var arrOfMagicSayings = [
    "I'm about to have a nervous breakdown, my head really hurts, if I don't find a way out of this mall parking lot, I am gonna go berserker!",
    "We're getting older but we're acting younger, We should be smarter, and start eating kale and going to yoga",
    "I was a teenage anarchist, but the politics were to convenient",
    "Should I stay or Should I go to bed before 10 PM?",
    "If your gonna scream, scream with me, car and home payments never last...",
    "Walking is probably still honest",
    "Quincentuple Your Money with a 401K",
    "These 4 wheels feel like home to Me, during my daily work commute. ",
    "I Don't wanna hear it!",
    "Sick of being sober, Sick of starting over, Sick of black flag, Sick of cro mags, Sick of the living, Sick of people dying, Sick of the buying, Sick of trying, Sick of television, Sick of telephones, Sick of homophobes, Sick of condos, Sick of the GOP, Sick of liberals",
    "How can I explain my situation, convey all the frustration, When confusion with Ikea instructions are all I find?",
    "I am the one who is searching to destroy the weeds that are consuming my patio",
    "Smooth Jazz Lines.",
    "When you feel like you're a Human Party Trick to Entertain your co-workers at lunch",
    "Count Your ego's bruises one by one, and drink it off.",
    "Contemplate the NASDAQ down turn on the Tree of Woe.",
    "Kill the Poor, is what the republican party seems to be out to do.",
    "I am Jet Black, I am so old.",
    "doublewhiskeycokenoice, got me into trouble at the company christmas party",
    "Better not tell you now, D4 is about to Start.",
    "Our vulnerability is all our insensitivity.",
    "You're not punk and I am telling everyone.",
    "Minimum wage is still a gateway drug",
    "The Only Band That Matters, is now what my kids listen too",
    "Clown Cars on Cinderblocks",
    "MAXIMUM Piss & Vinegar",
    "A Headache With Pictures",
    "Wake me up if you play the Clash.",
    "To Shreds, you say?",
    "Nazi suburban white collar folks, Fuck Off",
    "I'm so tired, the sheep are counting me, No more energy, Need a nap to feel complete",
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
        }
        console.log('Success');  // Tweet body.
        console.log(response);  // Raw response object.
      });
    };
