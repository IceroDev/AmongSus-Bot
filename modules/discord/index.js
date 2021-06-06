/*************************************************
 * 
 * Discord Variables initialisation
 * 
*************************************************/
var Twitter = require("twitter");
const config = require("./config.json");
const fs = require('fs');

var client = new Twitter({
  consumer_key: config.twitter.consumer_key,
  consumer_secret: config.twitter.consumer_secret,
  access_token_key: config.twitter.access_token_key,
  access_token_secret: config.twitter.access_token_secret,
});

const Discord = require("discord.js");
const discordClient = new Discord.Client();
discordClient.on("ready", () => {
  const discordInit = new Date(Date.now());
  console.log(
    discordInit.toLocaleTimeString("fr-FR", { timeZone: "Europe/Paris" }) +
      " | Initialisation de l'instance Discord"
  );
  var log = new Discord.MessageEmbed()
    .setTitle("🟢 Bot has restarted")
    .setColor("2f3136");
  discordClient.channels.cache.get("851054671279292416").send(log);
});
var loading = new Discord.MessageEmbed()
  .setDescription(
    "<a:loading:851052297383182346> I am processing your request, please wait a second."
  )
  .setColor("2f3136");

discordClient.on("message", (message) => {
    if(message.channel.id =="851146660305960992"){
        let api = require("../express/views/api.json");
        let prefix ="!"
        const args = message.content.slice(prefix.length).trim().split(' ');
        if(message.content.startsWith("!bl")){
            api.users.blacklisted.push(args[1])
            fs.writeFile("./modules/express/views/api.json", JSON.stringify(api), (err) => {
                if (err) console.log(err);
              });
        }
    }
  if (message.channel.id == "851025011145310228") {
    if (message.author.bot) return;
    var log = new Discord.MessageEmbed().setColor("2f3136");
    message.channel.send(loading).then((msg) => {
        let api = require("../express/views/api.json");
        if(api.users.blacklisted.includes(message.author.id)){
            loading.setDescription(
            "❌ Hmm, you're sus. You seem to be banned from using this function."
          );
          loading.setColor("RED");
          return msg.edit(loading);
        }
        if(message.content.startsWith("@")){
            loading.setDescription(
            `❌ Oops, I can't accept this username. Please do not include the "@" in the username.`
          );
          loading.setColor("RED");
            return msg.edit(loading);
        }
        if(api.users.alreadyDone.includes(message.content)){
            loading.setDescription(
            `❌ This user has already been mentioned once by <@!851028408619892747> In order to avoid spamming Twitter users, a user can only be pinged once.`
          );
          loading.setColor("RED");
            return msg.edit(loading);
        }
      var twitterName = require("twitter-name");
      twitterName(message.content, function (err, isAvailable) {
        if (isAvailable == true) {
          loading.setDescription(
            "❌ Hmm, that's sus. I don't find any Twitter user with that name."
          );
          loading.setColor("RED");
          msg.edit(loading);
        } else {
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
                `I saw @${message.content} from Discord vent in admin`,
                `Woa ! @${message.content} from Discord killed in front of me!`,
                `Uh ? @${message.content} from Discord is lying!`,
                `Trust me, @${message.content} from Discord is sus!`,
                `Trust me, @${message.content} from Discord is sus!`,
                `Trust me, @${message.content} from Discord is sus!`,
                `Trust me, @${message.content} from Discord is sus!`,
                `Trust me, @${message.content} from Discord is sus!`,
                `Trust me, @${message.content} from Discord is sus!`,
                `Trust me, @${message.content} from Discord is kinda sus!`,
                `Hmm, @${message.content} from Discord was near the body!`,
                `Welp @${message.content} from Discord I saw you on the cams, what task were you doing?`,
                `So, @${message.content} from Discord where are you in your quests?`,
                `I saw @${message.content} from Discord in admin`,
                `I saw @${message.content} from Discord in storage`,
                `I saw @${message.content} from Discord in medbay`,
                `I saw @${message.content} from Discord at vitals`,
                `I saw @${message.content} from Discord in labo`,
                `I saw @${message.content} from Discord doing the scan thing`,
              ];
              let tweetos = Math.floor(Math.random() * replies.length);
              client.post(
                "statuses/update",
                { status: `${replies[tweetos]}` },
                function (error, tweet, response) {
                  if (error) throw error;
                  console.log(
                    htweet.toLocaleTimeString("fr-FR", {
                      timeZone: "Europe/Paris",
                    }) + " | Post d'un tweet depuis Discord"
                  );
                  loading.setDescription(
                    "✅ Great news, your tweet has been posted for @" +
                      message.content +
                      "!"
                  );
                  loading.setColor("GREEN");
                  msg.edit(loading);
                  log
                    .setTitle("🐦 New Tweet ! 🐦")
                    .setDescription(
                      "Sent from Discord by <@!" + message.author.id + ">"
                    )
                    .addField(
                      "Mention :",
                      "[@" +
                        message.content +
                        "](https://twitter.com/" +
                        message.content +
                        ")"
                    );
                  discordClient.channels.cache
                    .get("851054671279292416")
                    .send(log);
                    let api = require("../express/views/api.json");
			api.lastTweet = Date.now()
                    api.users.alreadyDone.push(message.content)
            fs.writeFile("./modules/express/views/api.json", JSON.stringify(api), (err) => {
                if (err) console.log(err);
              });
                }
              );
            }
          );
        }
      });
    });
  } 
});
discordClient.login(config.discord.token);