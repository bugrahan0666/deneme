const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json"); 
const chalk = require("chalk"); 
const moment = require("moment"); 
var Jimp = require("jimp");
const { Client, Util } = require("discord.js");
const weather = require("weather-js");
const fs = require("fs"); 
const db = require("quick.db"); 
const http = require("http"); 
const express = require("express"); 
require("./util/eventLoader")(client); 
const path = require("path"); 
const request = require("request");
const snekfetch = require("snekfetch");
const queue = new Map(); 
const YouTube = require("simple-youtube-api"); 
const ytdl = require("ytdl-core"); 
const app = express(); 
app.get("/", (request, response) => {

  console.log(Date.now() + " Ping tamamdır."); 

  response.sendStatus(200); 
});
app.listen(process.env.PORT); 

setInterval(() => {

  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 280000); 


var prefix = ayarlar.prefix;

const log = message => {
  

  console.log(`${message}`); 
};

client.commands = new Discord.Collection(); 

client.aliases = new Discord.Collection(); 

fs.readdir("./komutlar/", (err, files) => {

  if (err) console.error(err);

  log(`${files.length} komut yüklenecek.`); 

  files.forEach(f => {

    let props = require(`./komutlar/${f}`);

    log(`Yüklenen komut: ${props.help.name}.`); 

    client.commands.set(props.help.name, props); 

    props.conf.aliases.forEach(alias => {

      client.aliases.set(alias, props.help.name);
    }); 
  });
}); 

client.reload = command => {
 

  return new Promise((resolve, reject) => {

    try {

      delete require.cache[require.resolve(`./komutlar/${command}`)];

      let cmd = require(`./komutlar/${command}`);

      client.commands.delete(command); 

      client.aliases.forEach((cmd, alias) => {

        if (cmd === command) client.aliases.delete(alias); 
      });
      client.commands.set(command, cmd); 

      cmd.conf.aliases.forEach(alias => {

        client.aliases.set(alias, cmd.help.name); 
      }); 

      resolve(); 
    } catch (e) {

      reject(e);
    } 
  }); 
}; 

client.load = command => {


  return new Promise((resolve, reject) => {

    try {

      let cmd = require(`./komutlar/${command}`);

      client.commands.set(command, cmd);

      cmd.conf.aliases.forEach(alias => {

        client.aliases.set(alias, cmd.help.name);
      });

      resolve();
    } catch (e) {

      reject(e);
    }
  }); 
};

client.unload = command => {
  

  return new Promise((resolve, reject) => {

    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)]; 

      let cmd = require(`./komutlar/${command}`); 

      client.commands.delete(command); 

      client.aliases.forEach((cmd, alias) => {
        

        if (cmd === command) client.aliases.delete(alias); 
      }); 

      resolve(); 
    } catch (e) {
      

      reject(e); 
    } 
  });
};


client.elevation = message => {
 

  if (!message.guild) {


    return; 
  }
  let permlvl = 0; 

  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;

  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;

  if (message.author.id === ayarlar.sahip) permlvl = 4; 

  return permlvl; 
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g; 

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
}); 


client.on("error", e => {

  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});


client.login(ayarlar.token);

client.on('ready', ()=>{
client.channels.get('756849938809487450').join()
})

client.on('message', async msg => { 
if (msg.content.toLowerCase() === 'sa') { 
await msg.react('🇦'); 
msg.react('🇸'); 
} 
});
client.on('message', async msg => { 
if (msg.content.toLowerCase() === 'selam') { 
await msg.react('🇦'); 
msg.react('🇸'); 
} 
}); 
client.on('message', async msg => { 
if (msg.content.toLowerCase() === 'selamın aleyküm') { 
await msg.react('🇦'); 
msg.react('🇸'); 
} 
}); 

client.on('message', async msg => { 
if (msg.content.toLowerCase() === 'selamun aleyküm') { 
await msg.react('🇦'); 
msg.react('🇸'); 
} 
});
client.on('message', async msg => { 
if (msg.content.toLowerCase() === 'sa') { 
await msg.react('🇦'); 
msg.react('🇸'); 
} 
});

client.on('message', async msg => { 
if (msg.content.toLowerCase() === 'Selamun Aleyküm') { 
await msg.react('🇦'); 
msg.react('🇸'); 
} 
});

client.on("message", message => {
  if(message.content.toLowerCase() === "sa") {
    message.channel.send("Aleyküm Selam Hoşgeldin!");
  }
  
    client.on('guildMemberAdd', member => {
if(!member.guild.id === '756241474148106360') return;
if(member.bot) return;
member.guild.members.get(member.id).addRole('756255623422673058')
})
  
  
  
  client.on("userUpdate", async(eski, yeni) => {
  if(eski.username !== yeni.username) {
  if(!yeni.username.includes("π") && client.guilds.get("756241474148106360").members.get(yeni.id).roles.has("756249558631186546")) {
     client.guilds.get("756241474148106360").members.get(yeni.id).removeRole("756249558631186546")
     client.channels.get('756874144787857428').send(`:broken_heart: ${yeni}, TAG tagını çıkardı!`)
    }
     if(yeni.username.includes("π") && !client.guilds.get("756241474148106360").members.get(yeni.id).roles.has("756249558631186546")) {
      client.channels.get('756874144787857428').send(`:heart: ${yeni}, TAG tagını aldı!`)
      client.guilds.get("756241474148106360").members.get(yeni.id).addRole("756249558631186546")
     }
  }
  }) 
  
});

client.on("message", message => {
    const dmchannel = client.channels.find("id", "756874144787857428");
    if (message.channel.type === "dm") {
        if (message.author.bot) return;
        dmchannel.sendMessage("", {embed: {
            color: 3447003,
            title: `Gönderen: ${message.author.tag}`,
            description: `Bota Özelden Gönderilen DM: ${message.content}` 
        }})
    }
});


client.on(`guildMemberAdd`, async member => {
  const phentostag = client.emojis.get('758826993285726208')
  const tac = client.emojis.get('757280968683028520')
  const phentoselmas = client.emojis.get('758830318987378688')
  const jaus1embed = new Discord.RichEmbed()
    .setColor(`RED`)
    .setTitle("PHENTOS KRALLIĞI")
    .setDescription(`${phentostag} Phentos Krallığına Hoşgeldin! ${phentostag} \n${tac}  Kuralları okumayı unutma! \n${tac}  Tag alıp bize destek olabilirsiniz!  \n${phentoselmas}   İyi eğlenceler! ${phentoselmas}`)
    .setFooter('Phentos | Developed By Phentos');
  member.send(jaus1embed);
});

   const ms = require("parse-ms");
client.on("message", async message => {
  
  if(message.author.bot) return;
  if(!message.guild) return;
  if(message.content.includes(`${prefix}afk`)) return;

  if(await db.fetch(`afk_${message.author.id}`)) {
    db.delete(`afk_${message.author.id}`);
    db.delete(`afk_süre_${message.author.id}`);

    message.channel.send(new Discord.RichEmbed()
    .setTitle("Bizden Uzakta!")
                         .setColor("RANDOM")
                         .setDescription(`<@!${message.author.id}> AFK Modundan çıktı. Tekrar Hoşgeldin! \n `)
                         .setFooter("Developed By Phentos")
                         .setTimestamp()).then(msg => msg.delete(15000))
  }
  //Tekrar Hoşgeldin! \n Kullanıcı ${timeObj.hours}h ${timeObj.minutes}m ${timeObj.seconds}s boyunca AFK modundaydı 
        var USER = message.mentions.users.first();

  if(!USER) return;
  var REASON = await db.fetch(`afk_${USER.id}`);
  
  if(REASON) {
      let süre = await db.fetch(`afk_süre_${USER.id}`);
      let timeObj = ms(Date.now() - süre);
    let mesaj = `${USER.tag} kullanıcısı AFK\nAFK süresi: ${timeObj.hours}h ${timeObj.minutes}m ${timeObj.seconds}s\nSebep:\n **${REASON}** `
   
    message.channel.send(new Discord.RichEmbed()
    .setTitle("Bizden Uzakta!")
                         .setColor("RANDOM")
                         .setDescription(mesaj)
                         .setFooter("Developed By Phentos")
                         .setTimestamp()).then(msg => msg.delete(15000))

  }
});

