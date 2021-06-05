var Twitter = require('twitter');
const config = require("./config.json");
var client = new Twitter({
    consumer_key: config.consumer_key,
    consumer_secret: config.consumer_secret,
    access_token_key: config.access_token_key,
    access_token_secret: config.access_token_secret
  });
  setInterval(function(){
  
  client.get('followers/list', {screen_name: 'AmongUsGame'}, function(error2, fol) {
    if(error2) throw error2;
    //console.log(fol.users);  // The favorites.
    let followers =0;
    fol.users.forEach(element=>{
        followers++
    })
    followers++
    var levainqueur = Math.floor(Math.random() * followers);
  
    let replies =[
        `I saw @${fol.users[levainqueur].screen_name} vent in admin`,
        `Woa ! @${fol.users[levainqueur].screen_name} killed in front of me!`,
        `Uh ? @${fol.users[levainqueur].screen_name} is lying!`,
        `Trust me, @${fol.users[levainqueur].screen_name} is sus!`,
        `Trust me, @${fol.users[levainqueur].screen_name} is sus!`,
        `Trust me, @${fol.users[levainqueur].screen_name} is sus!`,
        `Trust me, @${fol.users[levainqueur].screen_name} is sus!`,
        `Trust me, @${fol.users[levainqueur].screen_name} is sus!`,
        `Trust me, @${fol.users[levainqueur].screen_name} is sus!`,
        `Trust me, @${fol.users[levainqueur].screen_name} is kinda sus!`,
        `Hmm, @${fol.users[levainqueur].screen_name} was near the body!`,
        `Welp @${fol.users[levainqueur].screen_name} I saw you on the cams, what task were you doing?`,
        `So, @${fol.users[levainqueur].screen_name} where are you in your quests?`,
        `I saw @${fol.users[levainqueur].screen_name} in admin`,
        `I saw @${fol.users[levainqueur].screen_name} in storage`,
        `I saw @${fol.users[levainqueur].screen_name} in medbay`,
        `I saw @${fol.users[levainqueur].screen_name} at vitals`,
        `I saw @${fol.users[levainqueur].screen_name} in labo`,
        `I saw @${fol.users[levainqueur].screen_name} doing the scan thing`
    ]
    let tweetos = Math.floor(Math.random() * replies.length);
  client.post('statuses/update', {status: `${replies[tweetos]}`},  function(error, tweet, response) {
    if(error) throw error;
    console.log("Tweet Posté")
    //console.log(tweet);  // Tweet body.
    //console.log(response);  // Raw response object.
  });
  
});
},7200000)