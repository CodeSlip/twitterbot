// Dependencies ========
var
  twit = require('twit');
  config = require('./config.js');

var Twitter = new twit(config);

//RETWEET BOT ==========

// find latest tweet according to whatever I defined in 'q' params

var retweet = function() {
  var params = {
    q: '@blockapps, @BlockApps',
    result_type: 'recent',
    lang: 'en'
  }

  Twitter.get('search/tweets', params, function(err, data) {
     // if there no errors
       if (!err) {
         // grab ID of tweet to retweet
           var retweetId = data.statuses[0].id_str;
           // Tell TWITTER to retweet
           Twitter.post('statuses/retweet/:id', {
               id: retweetId
           }, function(err, response) {
               if (response) {
                   console.log('Retweeted!!!');
               }
               // if there was an error while tweeting
               if (err) {
                   console.log('Something went wrong while RETWEETING... Duplication maybe...');
               }
           });
       }
       // if unable to Search a tweet
       else {
         console.log('Something went wrong while SEARCHING...');
       }
   });
}

// grab & retweet as soon as program is running...
retweet();
// retweet in every 50 minutes
setInterval(retweet, 3000000);
// grab & retweet as soon as program is running...

var retweet3 = function() {
  var params = {
    q: '#ethereum, #Ethereum',
    result_type: 'recent',
    lang: 'en'
  }

  Twitter.get('search/tweets', params, function(err, data) {
     // if there no errors
       if (!err) {
         // grab ID of tweet to retweet
           var retweetId = data.statuses[0].id_str;
           // Tell TWITTER to retweet
           Twitter.post('statuses/retweet/:id', {
               id: retweetId
           }, function(err, response) {
               if (response) {
                   console.log('Retweeted!!!');
               }
               // if there was an error while tweeting
               if (err) {
                   console.log('Something went wrong while RETWEETING... Duplication maybe...');
               }
           });
       }
       // if unable to Search a tweet
       else {
         console.log('Something went wrong while SEARCHING...');
       }
   });
}

// grab & retweet as soon as program is running...
retweet3();
// retweet3 in every 50 minutes
setInterval(retweet3, 3000000);
// grab & retweet as soon as program is running...

// FAVORITE BOT====================

// find a random tweet and 'favorite' it
var favoriteTweet = function(){
  var params = {
      q: '#solidity, #Solidity',  // REQUIRED
      result_type: 'recent',
      lang: 'en'
  }
  // for more parametes, see: https://dev.twitter.com/rest/reference

  // find the tweet
  Twitter.get('search/tweets', params, function(err,data){

    // find tweets
    var tweet = data.statuses;
    var randomTweet = ranDom(tweet);   // pick a random tweet

    // if random tweet exists
    if(typeof randomTweet != 'undefined'){
      // Tell TWITTER to 'favorite'
      Twitter.post('favorites/create', {id: randomTweet.id_str}, function(err, response){
        // if there was an error while 'favorite'
        if(err){
          console.log('CANNOT BE FAVORITE... Error');
        }
        else{
          console.log('FAVORITED... Success!!!');
        }
      });
    }
  });
}
// grab & 'favorite' as soon as program is running...
favoriteTweet();
// 'favorite' a tweet in every 60 minutes
setInterval(favoriteTweet, 1800000);

// find a random tweet and 'favorite' it
var favoriteTweet2 = function(){
  var params = {
      q: '#smartcontract, #SmartContract',  // REQUIRED
      result_type: 'recent',
      lang: 'en'
  }
  // for more parametes, see: https://dev.twitter.com/rest/reference

  // find the tweet
  Twitter.get('search/tweets', params, function(err,data){

    // find tweets
    var tweet = data.statuses;
    var randomTweet = ranDom(tweet);   // pick a random tweet

    // if random tweet exists
    if(typeof randomTweet != 'undefined'){
      // Tell TWITTER to 'favorite'
      Twitter.post('favorites/create', {id: randomTweet.id_str}, function(err, response){
        // if there was an error while 'favorite'
        if(err){
          console.log('CANNOT BE FAVORITE... Error');
        }
        else{
          console.log('FAVORITED... Success!!!');
        }
      });
    }
  });
}
// grab & 'favorite' as soon as program is running...
favoriteTweet2();
// 'favorite' a tweet in every 60 minutes
setInterval(favoriteTweet2, 1800000);

// find a random tweet and 'favorite' it
var favoriteTweet3 = function(){
  var params = {
      q: '#SoftwareDeveloper, #softwaredeveloper',  // REQUIRED
      result_type: 'recent',
      lang: 'en'
  }
  // for more parametes, see: https://dev.twitter.com/rest/reference

  // find the tweet
  Twitter.get('search/tweets', params, function(err,data){

    // find tweets
    var tweet = data.statuses;
    var randomTweet = ranDom(tweet);   // pick a random tweet

    // if random tweet exists
    if(typeof randomTweet != 'undefined'){
      // Tell TWITTER to 'favorite'
      Twitter.post('favorites/create', {id: randomTweet.id_str}, function(err, response){
        // if there was an error while 'favorite'
        if(err){
          console.log('CANNOT BE FAVORITE... Error');
        }
        else{
          console.log('FAVORITED... Success!!!');
        }
      });
    }
  });
}
// grab & 'favorite' as soon as program is running...
favoriteTweet3();
// 'favorite' a tweet in every 60 minutes
setInterval(favoriteTweet3, 1800000);

// find a random tweet and 'favorite' it
var favoriteTweet4 = function(){
  var params = {
      q: '#codeacademy, #codeacademy',  // REQUIRED
      result_type: 'recent',
      lang: 'en'
  }
  // for more parametes, see: https://dev.twitter.com/rest/reference

  // find the tweet
  Twitter.get('search/tweets', params, function(err,data){

    // find tweets
    var tweet = data.statuses;
    var randomTweet = ranDom(tweet);   // pick a random tweet

    // if random tweet exists
    if(typeof randomTweet != 'undefined'){
      // Tell TWITTER to 'favorite'
      Twitter.post('favorites/create', {id: randomTweet.id_str}, function(err, response){
        // if there was an error while 'favorite'
        if(err){
          console.log('CANNOT BE FAVORITE... Error');
        }
        else{
          console.log('FAVORITED... Success!!!');
        }
      });
    }
  });
}
// grab & 'favorite' as soon as program is running...
favoriteTweet4();
// 'favorite' a tweet in every 60 minutes
setInterval(favoriteTweet4, 1800000);

// find a random tweet and 'favorite' it
var favoriteTweet5 = function(){
  var params = {
      q: '#girlswhocode, #GirlsWhoCode',  // REQUIRED
      result_type: 'recent',
      lang: 'en'
  }
  // for more parametes, see: https://dev.twitter.com/rest/reference

  // find the tweet
  Twitter.get('search/tweets', params, function(err,data){

    // find tweets
    var tweet = data.statuses;
    var randomTweet = ranDom(tweet);   // pick a random tweet

    // if random tweet exists
    if(typeof randomTweet != 'undefined'){
      // Tell TWITTER to 'favorite'
      Twitter.post('favorites/create', {id: randomTweet.id_str}, function(err, response){
        // if there was an error while 'favorite'
        if(err){
          console.log('CANNOT BE FAVORITE... Error');
        }
        else{
          console.log('FAVORITED... Success!!!');
        }
      });
    }
  });
}
// grab & 'favorite' as soon as program is running...
favoriteTweet5();
// 'favorite' a tweet in every 60 minutes
setInterval(favoriteTweet5, 1800000);

// find a random tweet and 'favorite' it
var favoriteTweet6 = function(){
  var params = {
      q: '#softwareengineer, #SoftwareEngineer',  // REQUIRED
      result_type: 'recent',
      lang: 'en'
  }
  // for more parametes, see: https://dev.twitter.com/rest/reference

  // find the tweet
  Twitter.get('search/tweets', params, function(err,data){

    // find tweets
    var tweet = data.statuses;
    var randomTweet = ranDom(tweet);   // pick a random tweet

    // if random tweet exists
    if(typeof randomTweet != 'undefined'){
      // Tell TWITTER to 'favorite'
      Twitter.post('favorites/create', {id: randomTweet.id_str}, function(err, response){
        // if there was an error while 'favorite'
        if(err){
          console.log('CANNOT BE FAVORITE... Error');
        }
        else{
          console.log('FAVORITED... Success!!!');
        }
      });
    }
  });
}
// grab & 'favorite' as soon as program is running...
favoriteTweet6();
// 'favorite' a tweet in every 60 minutes
setInterval(favoriteTweet6, 1800000);

// function to generate a random tweet tweet
function ranDom (arr) {
  var index = Math.floor(Math.random()*arr.length);
  return arr[index];
};


// Twice a day post about Training 

var tweet1 = function(){  
  Twitter.post('statuses/update', {
	status: "Join @BlockApps for #DeveloperTraining in #SanFrancisco on November 30th & December 1st. Tickets are available here, seats are limited https://www.eventbrite.com/e/blockchain-developer-course-with-blockapps-sunnyvale-tickets-39185721548?aff=erelexpmlt #ethereum #blockchain #smartcontracts"}, 
	function(err,data,response){
        	// if there was an error while 'tweeting'
        	if(err){
          		console.log('CANNOT BE FAVORITE... Error');
        		}
		// it worked!
        	else{
          		console.log('Tweeted... Success!!!');
			}
	}
)};

// tweet tweet1 as soon s the program is running
tweet1();
// perform this tweet every 12 hours
setInterval(tweet1, 21600000);

var tweet2 = function(){  
  Twitter.post('statuses/update', {
	status: "Join @BlockApps for #DeveloperTraining in #Toronto on December 7th & 8th. Tickets are available here, seats are limited https://www.eventbrite.com/e/blockchain-developer-course-with-blockapps-toronto-tickets-39662925879?aff=es2 #ethereum #blockchain #smartcontracts"}, 
	function(err,data,response){
        	// if there was an error while 'tweeting'
        	if(err){
          		console.log('CANNOT BE FAVORITE... Error');
        		}
		// it worked!
        	else{
          		console.log('Tweeted... Success!!!');
			}
	}
)};

// tweet tweet1 as soon s the program is running
tweet2();
// perform this tweet every 12 hours
setInterval(tweet2, 21600000);

