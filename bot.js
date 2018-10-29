// Dependencies ========
var
  twit = require('twit');
  config = require('./config.js');

var Twitter = new twit(config);

//RETWEET BOT ==========

// find latest tweet according to whatever I defined in 'q' params


// RETWEET 1
var retweet = function() {
  var params = {
    q: '@iamdevloper',
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
// retweet once a day
setInterval(retweet, 86400000);
// grab & retweet as soon as program is running...

// RETWEET 2
var retweet2 = function() {
  var params = {
    q: '@hackernoon',
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
retweet2();
// retweet2 once a day
setInterval(retweet2, 86400000);
// grab & retweet as soon as program is running...

// RETWEET 3
var retweet3 = function() {
  var params = {
    q: '@coindesk',
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
// retweet3 twice a day
setInterval(retweet3, 43200000);
// grab & retweet as soon as program is running...

// RETWEET 4
var retweet4 = function() {
  var params = {
    q: '@circlepay',
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
retweet4();
// retweet4 once a day
setInterval(retweet4, 86400000);
// grab & retweet as soon as program is running...

// RETWEET 5
var retweet5 = function() {
  var params = {
    q: '@Blockgks',
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
retweet5();
// retweet4 once a day
setInterval(retweet5, 86400000);
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
// 'favorite' a tweet once a day
setInterval(favoriteTweet, 86400000);

// find a random tweet and 'favorite' it
var favoriteTweet2 = function(){
  var params = {
      q: '#cryptocurrency',  // REQUIRED
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
// 'favorite' a tweet twice a day
setInterval(favoriteTweet2, 43200000);

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
// 'favorite' a tweet twice a day
setInterval(favoriteTweet3, 43200000);

// find a random tweet and 'favorite' it
var favoriteTweet4 = function(){
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
favoriteTweet4();
// 'favorite' a tweet twice a day
setInterval(favoriteTweet4, 43200000);

// Twice a day post about Training 

// var tweet1 = function(){  
//   Twitter.post('statuses/update', {
// 	status: "Join @BlockApps for #DeveloperTraining in #SanFrancisco on November 30th & December 1st. Tickets are available here, seats are limited https://www.eventbrite.com/e/blockchain-developer-course-with-blockapps-sunnyvale-tickets-39185721548?aff=erelexpmlt #ethereum #blockchain #smartcontracts"}, 
// 	function(err,data,response){
//         	// if there was an error while 'tweeting'
//         	if(err){
//           		console.log('CANNOT BE FAVORITE... Error');
//         		}
// 		// it worked!
//         	else{
//           		console.log('Tweeted... Success!!!');
// 			}
// 	}
// )};

// // tweet tweet1 as soon s the program is running

// // perform this tweet every 12 hours
// setInterval(tweet1, 21600000);

//tweet1();


