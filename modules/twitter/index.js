/*************************************************
 * 
 * Twitter integration
 * 
*************************************************/
var Twitter = require("twitter");
const config = require("./config.json");
const event = new Date(Date.now());
const fs = require('fs');
const axios = require("axios");
const Discord = require("discord.js");
const discordClient = new Discord.Client();
discordClient.login(config.discord.token);
var client = new Twitter({
  consumer_key: config.twitter.consumer_key,
  consumer_secret: config.twitter.consumer_secret,
  access_token_key: config.twitter.access_token_key,
  access_token_secret: config.twitter.access_token_secret,
});
console.log(
  event.toLocaleTimeString("fr-FR", { timeZone: "Europe/Paris" }) +
    " | Initialisation de l'instance Twitter"
);
setInterval(function () {
  var log = new Discord.MessageEmbed().setColor("2f3136");
  const htweet = new Date(Date.now());
  client.get(
    "followers/list",
    { screen_name: "AmongUsGame" },
    function (error2, fol) {
      if (error2) throw error2;
      //console.log(fol.users);  // The favorites.
      let followers = 0;
      fol.users.forEach((element) => {
        followers++;
      });
      followers++;
      var levainqueur = Math.floor(Math.random() * followers);

      let replies = [
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
        `I saw @${fol.users[levainqueur].screen_name} doing the scan thing`,
      ];
      let tweetos = Math.floor(Math.random() * replies.length);
      client.post(
        "statuses/update",
        { status: `${replies[tweetos]} #amongus #sus` },
        function (error, tweet, response) {
          if (error) throw error;
          console.log(
            htweet.toLocaleTimeString("fr-FR", { timeZone: "Europe/Paris" }) +
              " | Post d'un tweet mention"
          );
          log
            .setTitle("🐦 New Tweet ! 🐦")
            .setDescription("Sent from Twitter by <@!851028408619892747>")
            .addField(
              "Mention :",
              "[@" +
                fol.users[levainqueur].screen_name +
                "](https://twitter.com/" +
                fol.users[levainqueur].screen_name +
                ")"
            );
          discordClient.channels.cache.get("851054671279292416").send(log);
            let api = require("../express/views/api.json");
			api.lastTweet = Date.now()
            api.users.alreadyDone.push(fol.users[levainqueur].screen_name)
            fs.writeFile("./modules/express/views/api.json", JSON.stringify(api), (err) => {
                if (err) console.log(err);
              });
        }
      );
    }
  );
}, 86400000);

setInterval(function () {
  var log = new Discord.MessageEmbed().setColor("2f3136");
  const htweet = new Date(Date.now());
    axios
    .get('https://random-word-api.herokuapp.com/word')
    .then(response => {
    let mot = response.data[0];
    
      client.post(
        "statuses/update",
        { status: `When ${mot} is sus... ${mot}us ! #amongus #sus` },
        function (error, tweet, response) {
          if (error) throw error;
          console.log(
            htweet.toLocaleTimeString("fr-FR", { timeZone: "Europe/Paris" }) +
              " | Post d'un tweet mot"
          );
          log
            .setTitle("🐦 New Tweet ! 🐦")
            .setDescription("Sent from Twitter by <@!851028408619892747>")
            .addField(
              "Message :",
              `When ${mot} is sus... ${mot}us ! #amongus #sus`
            );
          discordClient.channels.cache.get("851054671279292416").send(log);
            let api = require("../express/views/api.json");
			api.lastTweet = Date.now()
            fs.writeFile("./modules/express/views/api.json", JSON.stringify(api), (err) => {
                if (err) console.log(err);
              });
        }
      );
    })
}, 3600000);