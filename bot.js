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


//........MESAJ ISTATISTIK........//

client.on("message", async message => {
  if (message.author.bot === false) {
    await db.add(`puan_${message.guild.id}_${message.author.id}`, 1); 

    await db.add(`puanc_${message.guild.id}_${message.channel.id}`, 1); 

    await db.add(`puanuc_${message.author.id}_${message.channel.id}`, 1);
  }
});

//........SES ISTATISTIK........//

client.on("voiceStateUpdate", async (oldMember, newMember) => {
  if (!oldMember.user.bot) {
    let oldChannel = oldMember.voiceChannel; 

    let newChannel = newMember.voiceChannel;

    if (oldChannel === undefined && newChannel !== undefined) {
      db.set(`girisses.${oldMember.user.id}.${oldMember.guild.id}`, Date.now());
    } else if (newChannel === undefined) {
      let ilksessüre = await db.fetch(
        `girisses.${oldMember.user.id}.${oldMember.guild.id}`
      ); 

      let time = Date.now() - ilksessüre;
      await db.add(
        "voicei_" + oldMember.guild.id + "_" + oldMember.user.id,
        time
      ); 

      await db.add(
        "voicec_" + oldMember.guild.id + "_" + oldMember.voiceChannelID,
        time
      ); 

      await db.add(
        "voiceuc_" + oldMember.user.id + "_" + oldMember.voiceChannelID,

        time
      ); 
    }
  }
}); 






client.on("userUpdate", async (oldUser, newUser) => {
  if (oldUser.username !== newUser.username) {
    let tag = "ﾅ"; //Kullandığınız tag
    let sunucu = "696149491316949052"; //Sunucunuzun İD'si
    let kanal = "744630301887561851"; //Mesaj atıalcağı kanal
    let rol = "744630194698190968"; //Rolünüzün İD'si
    if (
      newUser.username.includes(tag) &&
      !client.guilds
        .get(sunucu)
        .members.get(newUser.id)
        .roles.has(rol)
    ) {
      client.channels
        .get(kanal)
        .send(new Discord.RichEmbed().setColor('RANDOM').setDescription(`${newUser} ${tag} Tagımızı Aldı ve <@&${rol}> Rolünü Verdim`));
      client.guilds
        .get(sunucu)
        .members.get(newUser.id)
        .addRole(rol);
    }
    if (
      !newUser.username.includes(tag) &&
      client.guilds
        .get(sunucu)
        .members.get(newUser.id)
        .roles.has(rol)
    ) {
      client.guilds
        .get(sunucu)
        .members.get(newUser.id)
        .removeRole(rol);
      client.channels
        .get(kanal)
        .send(new Discord.RichEmbed().setColor('RANDOM').setDescription(`${newUser} ${tag} Tagımızı Bıraktığı için <@&${rol}> Rolünü Aldım`));
    }
  }
});


//salvatore sa as
client.on("message", async msg => {
  if (msg.content == "sa") {
    return msg.reply(
      "**Aleyküm Selam Hoşgeldin Dostum** "
    );
  }
});

client.on("message", async msg => {
  if (msg.content == "sea") {
    return msg.reply(
      "**Aleyküm Selam Hoşgeldin Dostum** "
    );
  }
});

client.on("message", async msg => {
  if (msg.content == "selam") {
    return msg.reply(
      "**Aleyküm Selam Hoşgeldin Dostum** "
    );
  }
});

client.on("message", async msg => {
  if (msg.content == "selamun aleyküm") {
    return msg.reply(
      "**Aleyküm Selam Hoşgeldin Dostum** "
    );
  }
});

client.on("message", async msg => {
  if (msg.content == "Selam") {
    return msg.reply(
      "**Aleyküm Selam Hoşgeldin Dostum** "
    );
  }
});

client.on("message", async msg => {
  if (msg.content == "Sa") {
    return msg.reply(
      "**Aleyküm Selam Hoşgeldin Dostum** "
    );
  }
});


//tag link ver
client.on("message", msg => {
  if (msg.content === "!tag") {
    msg.channel.sendMessage("ﾅ");
  }
});

client.on("message", msg => {
  if (msg.content === "tag") {
    msg.channel.sendMessage("ﾅ");
  }
});


client.on("message", msg => {
  if (msg.content === ".tag") {
    msg.channel.sendMessage("ﾅ");
  }
});

client.on("message", msg => {
  if (msg.content === "a!tag") {
    msg.channel.sendMessage("ﾅ");
  }
});

client.on("message", msg => {
  if (msg.content === "!link") {
    msg.channel.sendMessage("https://discord.gg/GS8rHyU");
  }
});


client.on("message", msg => {
  if (msg.content === ".link") {
    msg.channel.sendMessage("https://discord.gg/GS8rHyU");
  }
});

client.on("message", msg => {
  if (msg.content === "link") {
    msg.channel.sendMessage("https://discord.gg/GS8rHyU");
  }
});
