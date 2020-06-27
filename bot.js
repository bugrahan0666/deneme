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
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(ayarlar.token);

//Discord Code Share

//Discord Code Share

//Discord Code Share

//Discord Code Share

//Discord Code Share

//Discord Code Share

//Discord Code Share

//Discord Code Share

//Discord Code Share

//Discord Code Share

//........MESAJ ISTATISTIK........//

client.on("message", async message => {
  if (message.author.bot === false){
await db.add(`puan_${message.guild.id}_${message.author.id}`, 1); //MESAJ BAŞINA VERİLECEK PUAN ÜYE  //Discord Code Share

await db.add(`puanc_${message.guild.id}_${message.channel.id}`, 1); //MESAJ BAŞINA VERİLECEK PUAN KANAL   //Discord Code Share

await db.add(`puanuc_${message.author.id}_${message.channel.id}`, 1); //EN COK MESAJ ATILAN KANAL UYE  //Discord Code Share

}
});



//........SES ISTATISTIK........//

client.on("voiceStateUpdate", async (oldMember, newMember) => {
  if(!oldMember.user.bot){
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
    );  //Discord Code Share

    await db.add(
      "voicec_" + oldMember.guild.id + "_" + oldMember.voiceChannelID,
      time
    );  //Discord Code Share

    await db.add(
      "voiceuc_" + oldMember.user.id + "_" + oldMember.voiceChannelID,
      time
    );   //Discord Code Share

  }}
});

//Discord Code Share

//Discord Code Share

//Discord Code Share

//Discord Code Share

//Discord Code Share

//Discord Code Share

//Discord Code Share

//Discord Code Share

//Discord Code Share

//Discord Code Share
