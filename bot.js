
console.log("Starting the Bot..");
var TwitterPackage = require('twit');
// const axios = require('axios');

var secret = ({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token_key: process.env.access_token_key,
  access_token_secret: process.env.access_token_secret
});

var Twitter = new TwitterPackage(secret);

setInterval(tweetIt, 3000*60*480)

tweetIt();

  function tweetIt() {

    // we will randomly pick one of these items in this array
    var arrOfMagicSayings = [
    "I need a holiday, from my holiday in Cambodia",
    "What they say of the grass on the other side is true, too much time reading the news is turning me blue.",
    "I was just a stupid kid back then, I take back every word that I said.",
    "In case your're wondering I am tweeting about growing up and giving in.",
    "Cubicles will now suffice, some say it's the roll of the dice, I think they're wrong, I know I'm right.",
    "There's a metelhead in the parking lot.  It's my son.",
    "I'm about to have a nervous breakdown, my head really hurts, if I don't find a way out of this mall parking lot, I am gonna go berserker!",
    "We're getting older but we're acting younger, We should be smarter, and start eating kale and going to yoga",
    "I was a teenage anarchist, but then the Hot Topic closed in town.",
    "Should I stay or Should I go to bed before 10 PM?",
    "If your gonna scream, scream with me, car and home payments never end...",
    "Walking is probably still honest, but the minivan can hold my whole family on the way to CostCo",
    "Quincentuple Your Money with a 401K",
    "These 4 wheels feel like home to me, during my daily work commute. ",
    "I Don't wanna hear it, InfoWars is full of shit!",
    "I'm all lost in the Supermarket, I cannot find the perpackaged meats...",
    "Now I got a job, but it don't pay, I need a new Iphone, forget somewhere to stay.",
    "I see all my dreams come tumbling down, I can't be happy without my daily nap",
    "Sick of being sober, Sick of starting over, Sick of black flag, Sick of cro mags, Sick of the living, Sick of people dying, Sick of the buying, Sick of trying, Sick of television, Sick of telephones, Sick of homophobes, Sick of condos, Sick of the GOP, Sick of liberals",
    "How can I explain my situation, convey all the frustration, When confusion with Ikea instructions are all I find?",
    "I am the one who is searching to destroy the weeds that are consuming my patio",
    "Smooth Jazz Lines.",
    "When you feel like you're a Human Party Trick to Entertain your co-workers at lunch",
    "Count your ego's bruises one by one, and drink it off.",
    "Contemplate the NASDAQ down turn on the Tree of Woe.",
    "Kill the Poor, is what the republican party seems to be out to do.",
    "I am Jet Black, I am so old.",
    "He who drinks more than 2 beers, will later be hungover.",
    "They offered me the office, they offered me the shop, they said I'd better take anything they got, Do you want to creat paperwork all day, so you can buy everything on amazon you see?",
    "doublewhiskeycokenoice, got me into trouble at the company christmas party",
    "Don't want to admit I'm an American Idiot, stealing better songs to pad my own wallet.",
    "Better not tell you now, D4 is about to Start.",
    "Our vulnerability is on display on all social medial platforms.",
    "I'm not punk and please don't tell anyone.",
    "Minimum wage is still a gateway drug",
    "The Only Band That Matters, is now what my kids listen too",
    "Clown Cars on Cinderblocks, is how my work carpool feels.",
    "A sustainable amount of Piss & Vinegar for my white collar job",
    "A Headache With Pictures",
    "Wake me up if you play the Clash.",
    "To Shreds, you say?",
    "Nazi suburban white collar folks, Fuck Off",
    "I'm so tired, the sheep are counting me, No more energy, Need a nap to feel complete",
    "Pay to write, pay to play, Pay to cum, pay to fight!",
    "Emails politely phrased, everything about me begs 'Don't pass me over, there is rent I gotta pay'",
    "I finally got a suburban home, suburban home.",
    "Trying to get ahead is what I'm supposed to do, No matter what I do I gotta get ahead of you"
    ]
    // calculate the random index (Math.random returns a double between 0 and 1)
    var randomIndex = Math.round(Math.random() * arrOfMagicSayings.length);

      //build our reply string grabbing the string in that randomIndex we've calculated
      var tweet = arrOfMagicSayings[randomIndex];

      //call the post function to tweet something
      Twitter.post('statuses/update', {status: tweet},  function(error, tweet, response){
        if(error){
          console.log(data);
        }
        console.log('Success');  // Tweet body.
        console.log(response);  // Raw response object.
      });
    };
