var Twitter = require('twitter');
const config = require("./config.json");
const event = new Date(Date.now());
var client = new Twitter({
    consumer_key: config.twitter.consumer_key,
    consumer_secret: config.twitter.consumer_secret,
    access_token_key: config.twitter.access_token_key,
    access_token_secret: config.twitter.access_token_secret
  });
console.log("████████╗██╗    ██╗██╗████████╗████████╗███████╗██████╗     ██████╗  ██████╗ ████████╗\n╚══██╔══╝██║    ██║██║╚══██╔══╝╚══██╔══╝██╔════╝██╔══██╗    ██╔══██╗██╔═══██╗╚══██╔══╝\n   ██║   ██║ █╗ ██║██║   ██║      ██║   █████╗  ██████╔╝    ██████╔╝██║   ██║   ██║   \n   ██║   ██║███╗██║██║   ██║      ██║   ██╔══╝  ██╔══██╗    ██╔══██╗██║   ██║   ██║   \n   ██║   ╚███╔███╔╝██║   ██║      ██║   ███████╗██║  ██║    ██████╔╝╚██████╔╝   ██║   \n   ╚═╝    ╚══╝╚══╝ ╚═╝   ╚═╝      ╚═╝   ╚══════╝╚═╝  ╚═╝    ╚═════╝  ╚═════╝    ╚═╝   \n                                                                                      \n██████╗ ██╗   ██╗    ██╗ ██████╗███████╗██████╗  ██████╗                              \n██╔══██╗╚██╗ ██╔╝    ██║██╔════╝██╔════╝██╔══██╗██╔═══██╗                             \n██████╔╝ ╚████╔╝     ██║██║     █████╗  ██████╔╝██║   ██║                             \n██╔══██╗  ╚██╔╝      ██║██║     ██╔══╝  ██╔══██╗██║   ██║                             \n██████╔╝   ██║       ██║╚██████╗███████╗██║  ██║╚██████╔╝                             \n╚═════╝    ╚═╝       ╚═╝ ╚═════╝╚══════╝╚═╝  ╚═╝ ╚═════╝                              \n                                                                                      ")
console.log(event.toLocaleTimeString('fr-FR',{ timeZone: 'Europe/Paris' })+" | Démarrage");
const Discord = require('discord.js');
  const discordClient = new Discord.Client();
  var loading = new Discord.MessageEmbed()
.setDescription("<a:loading:851052297383182346> I am processing your request, please wait a second.")
.setColor("2f3136");
var log = new Discord.MessageEmbed()
.setColor("2f3136");
  discordClient.on('message', message =>{
    if(message.channel.id =="851025011145310228"){
        if(message.author.bot)return;
        message.channel.send(loading).then(msg => {
      var twitterName = require('twitter-name');
      twitterName(message.content, function (err, isAvailable) {
      if(isAvailable == true){
        loading.setDescription("❌ Hmm, that's sus. I don't find any Twitter user with that name.")
        loading.setColor("RED")
        m.edit(loading)
      }else{
          const htweet = new Date(Date.now());
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
              `I saw @${message.content} from Discord doing the scan thing`
          ]
          let tweetos = Math.floor(Math.random() * replies.length);
        client.post('statuses/update', {status: `${replies[tweetos]}`},  function(error, tweet, response) {
          if(error) throw error;
          console.log(htweet.toLocaleTimeString('fr-FR',{ timeZone: 'Europe/Paris' })+" | Post d'un tweet depuis Discord");
          loading.setDescription("✅ Great news, your tweet has been posted for @"+message.content+"!")
          loading.setColor("GREEN")
          m.edit(loading)
          log.setTitle("🐦 New Tweet ! 🐦")
          .setDescription("Sent from Discord by <@!"+message.author.id+">")
          .addField("Mention :",
          "@"+message.content)
          discordClient.channels.cache.get("851054671279292416").send(log)
        });
        
      });
      }
});
        })
    }else{
      return;
    }
  
  })
  setInterval(function(){
      const htweet = new Date(Date.now());
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
  client.post('statuses/update', {status: `${replies[tweetos]} #amongus #sus`},  function(error, tweet, response) {
    if(error) throw error;
	console.log(htweet.toLocaleTimeString('fr-FR',{ timeZone: 'Europe/Paris' })+" | Post d'un tweet");
  log.setTitle("🐦 New Tweet ! 🐦")
          .setDescription("Sent from Twitter by <@!851028408619892747")
          .addField("Mention :",
          "@"+fol.users[levainqueur].screen_name)
          discordClient.channels.cache.get("851054671279292416").send(log)
  });
  
});
},7200000)
discordClient.login(config.discord.token)